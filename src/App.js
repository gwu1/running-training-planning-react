import React, { useState, useEffect } from 'react';
import { Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { QRCodeCanvas } from 'qrcode.react';
import { ROUTES, DRILL_SETS, DRILL_REPS, DRILL_TIME_PER_SET, SPRINT_SPEED, SPRINT_REST, SPRINT_SETS_DEFAULT, GOOGLE_MAPS_API_KEY } from './constants';
import './App.css';

Modal.setAppElement('#root');

function App() {
  const [selectedRoute, setSelectedRoute] = useState(1);
  const [paceMinutes, setPaceMinutes] = useState(6);
  const [paceSeconds, setPaceSeconds] = useState(0);
  const [sprintSets, setSprintSets] = useState(SPRINT_SETS_DEFAULT);
  const [result, setResult] = useState(null);
  const [shareUrl, setShareUrl] = useState('');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('shaTin');
  const [mapEmbedUrl, setMapEmbedUrl] = useState('');

  // Set the app element for react-modal after the component mounts
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  // Load URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const route = parseInt(params.get('route')) || 1;
    const minutes = parseInt(params.get('pace_minutes')) || 6;
    const seconds = parseInt(params.get('pace_seconds')) || 0;
    const sprints = parseInt(params.get('sprint_sets')) || SPRINT_SETS_DEFAULT;

    setSelectedRoute(route);
    setPaceMinutes(minutes >= 4 && minutes <= 10 ? minutes : 6);
    setPaceSeconds(seconds % 5 === 0 && seconds >= 0 && seconds < 60 ? seconds : 0);
    setSprintSets(sprints === 4 || sprints === 5 ? sprints : SPRINT_SETS_DEFAULT);
    setActiveTab(route <= 5 ? 'shaTin' : 'tsuenWan');
    calculateResult(route, minutes, seconds, sprints);
  }, []);

  // Calculate result dynamically
  useEffect(() => {
    calculateResult(selectedRoute, paceMinutes, paceSeconds, sprintSets);
  }, [selectedRoute, paceMinutes, paceSeconds, sprintSets]);

  const calculateResult = (routeId, minutes, seconds, sprints) => {
    const route = ROUTES.find(r => r.id === routeId);
    const pace = minutes + seconds / 60;
    let totalTime = route.distance * pace;
    let drillTime = 0, sprintTime = 0, extraLinks = '', sprintSummary = '', drillSummary = '';

    if (route.hasDrills && route.hasSprints) {
      drillTime = DRILL_SETS * DRILL_REPS * DRILL_TIME_PER_SET;
      sprintTime = sprints * (SPRINT_SPEED + SPRINT_REST);
      totalTime += drillTime + sprintTime;
      extraLinks = `<br><b>Drill Videos:</b> <a href="${route.drillVideos[0]}" target="_blank">Video 1</a> | <a href="${route.drillVideos[1]}" target="_blank">Video 2</a>`;
      sprintSummary = `<b>Sprints:</b> ${sprints} x 100m (~${Math.round(sprintTime)} min)<br>`;
      drillSummary = `<b>Drills:</b> ${DRILL_SETS * DRILL_REPS} reps (~${Math.round(drillTime)} min)<br>`;
    }

    const runTime = route.distance * pace;
    const hours = Math.floor(totalTime / 60);
    const minutesLeft = Math.round(totalTime % 60);
    const paceDisplay = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    setResult({
      text: `
        <b>Run:</b> ${route.distance} km (${route.description})<br>
        <b>Pace:</b> ${paceDisplay} min/km<br>
        <b>Run Time:</b> ${Math.round(runTime)} min<br>
        ${drillSummary}
        ${sprintSummary}
        <b>Total Time:</b> ${hours} hr ${minutesLeft} min
        ${extraLinks}<br>
        <i>Power up your training in ${route.id <= 5 ? 'Sha Tin' : 'Tsuen Wan'}!</i>
      `,
      mapCenter: route.mapCenter, // Optional, can be removed if not used
    });

    // Construct the Google Maps Embed API URL using Place IDs
    try {
      const start = `place_id:${route.placeIds[0]}`; // First Place ID as origin
      const end = `place_id:${route.placeIds[route.placeIds.length - 1]}`; // Last Place ID as destination
      const waypoints = route.placeIds.slice(1, -1).map(placeId => `place_id:${placeId}`).join('|'); // Intermediate Place IDs as waypoints
      const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${start}&destination=${end}${waypoints ? `&waypoints=${waypoints}` : ''}&mode=walking`;
      setMapEmbedUrl(embedUrl);
    } catch (error) {
      console.error('Error constructing map embed URL:', error);
      setMapEmbedUrl(''); // Fallback to empty URL to avoid breaking the UI
    }
  };

  const handleShare = () => {
    const url = `${window.location.origin}/?route=${selectedRoute}&pace_minutes=${paceMinutes}&pace_seconds=${paceSeconds}&sprint_sets=${sprintSets}`;
    setShareUrl(url);
    setIsShareOpen(true);
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => alert('Link copied to clipboard!')).catch(() => alert('Failed to copy link to clipboard.'));
    } else {
      alert('Clipboard API not supported. Please copy the URL manually.');
    }
  };

  return (
    <div className="App">
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Running / Training Planning
      </Typography>

      <div className="container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'shaTin' ? 'active' : ''}`}
            onClick={() => setActiveTab('shaTin')}
          >
            Sha Tin
          </div>
          <div
            className={`tab ${activeTab === 'tsuenWan' ? 'active' : ''}`}
            onClick={() => setActiveTab('tsuenWan')}
          >
            Tsuen Wan
          </div>
        </div>

        <ul className="route-list">
          {ROUTES.filter(r => (activeTab === 'shaTin' ? r.id <= 5 : r.id > 5)).map(route => (
            <motion.li
              key={route.id}
              className={`route-item ${selectedRoute === route.id ? 'selected' : ''}`}
              onClick={() => setSelectedRoute(route.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="route-icon">🏃</span>
              <Typography variant="body2">
                {route.name} <span style={{ color: '#666' }}>({route.distance} km)</span>
              </Typography>
            </motion.li>
          ))}
        </ul>

        <div className="input-container">
          <FormControl sx={{ minWidth: 85 }}>
            <InputLabel id="pace-minutes-label">Pace Min</InputLabel>
            <Select
              labelId="pace-minutes-label"
              value={paceMinutes}
              label="Pace Min"
              onChange={e => setPaceMinutes(parseInt(e.target.value))}
              sx={{
                fontSize: '0.85rem',
                '& .MuiSelect-select': {
                  padding: '8px 24px 8px 8px',
                  paddingRight: '24px !important',
                },
                '& .MuiInputBase-root': {
                  backgroundColor: '#fff',
                },
              }}
            >
              {[...Array(7)].map((_, i) => (
                <MenuItem key={i + 4} value={i + 4} sx={{ fontSize: '0.85rem' }}>
                  {i + 4}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 85 }}>
            <InputLabel id="pace-seconds-label">Pace Sec</InputLabel>
            <Select
              labelId="pace-seconds-label"
              value={paceSeconds}
              label="Pace Sec"
              onChange={e => setPaceSeconds(parseInt(e.target.value))}
              sx={{
                fontSize: '0.85rem',
                '& .MuiSelect-select': {
                  padding: '8px 24px 8px 8px',
                  paddingRight: '24px !important',
                },
                '& .MuiInputBase-root': {
                  backgroundColor: '#fff',
                },
              }}
            >
              {[...Array(12)].map((_, i) => (
                <MenuItem key={i * 5} value={i * 5} sx={{ fontSize: '0.85rem' }}>
                  {i * 5 < 10 ? `0${i * 5}` : i * 5}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedRoute === 1 && (
            <FormControl sx={{ minWidth: 85 }}>
              <InputLabel id="sprint-sets-label">Sprints</InputLabel>
              <Select
                labelId="sprint-sets-label"
                value={sprintSets}
                label="Sprints"
                onChange={e => setSprintSets(parseInt(e.target.value))}
                sx={{
                  fontSize: '0.85rem',
                  '& .MuiSelect-select': {
                    padding: '8px 24px 8px 8px',
                    paddingRight: '24px !important',
                  },
                  '& .MuiInputBase-root': {
                    backgroundColor: '#fff',
                  },
                }}
              >
                <MenuItem value={4} sx={{ fontSize: '0.85rem' }}>4</MenuItem>
                <MenuItem value={5} sx={{ fontSize: '0.85rem' }}>5</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>

        <Button
          variant="contained"
          onClick={handleShare}
          sx={{ mt: 1, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' }, fontSize: '0.85rem' }}
        >
          Share
        </Button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="result"
        >
          <Typography variant="h6" component="h2" gutterBottom>Workout Summary</Typography>
          <div dangerouslySetInnerHTML={{ __html: result.text }} />
          {mapEmbedUrl ? (
            <iframe
              title="Route Map"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px', marginTop: '8px' }}
              src={mapEmbedUrl}
              allowFullScreen
            />
          ) : (
            <Typography variant="body2" color="error">
              Unable to load the route map. Please try again later.
            </Typography>
          )}
        </motion.div>
      )}

      <Modal
        isOpen={isShareOpen}
        onRequestClose={() => setIsShareOpen(false)}
        className="share-modal"
        overlayClassName="Overlay"
      >
        <Typography variant="h6" component="h2">Share Your Route</Typography>
        <input type="text" value={shareUrl} readOnly />
        <QRCodeCanvas value={shareUrl} size={80} />
        <Button
          onClick={() => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(shareUrl).then(() => alert('Copied!')).catch(() => alert('Failed to copy!'));
            } else {
              alert('Clipboard API not supported. Please copy the URL manually.');
            }
          }}
          sx={{ mt: 1, mr: 1, fontSize: '0.85rem' }}
        >
          Copy
        </Button>
        <Button onClick={() => setIsShareOpen(false)} sx={{ mt: 1, fontSize: '0.85rem' }}>Close</Button>
      </Modal>
    </div>
  );
}

export default App;