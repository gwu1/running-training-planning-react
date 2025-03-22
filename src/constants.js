export const ROUTES = [
  {
    id: 1,
    name: "沙田運動場",
    distance: 7.5,
    description: "SCTC -> Sha Tin Sports Ground -> Twin Bridge -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.387, lng: 114.203 }, // SCTC
      { lat: 22.391, lng: 114.195 }, // Sports Institute
      { lat: 22.385, lng: 114.188 }, // Sports Ground
      { lat: 22.379, lng: 114.192 }, // Twin Bridge
      { lat: 22.387, lng: 114.203 }  // Back to SCTC
    ],
    hasDrills: true,
    hasSprints: true,
    drillVideos: [
      "https://youtu.be/6H8WLfyavWk?si=MmN68RnCtHBKkWSo",
      "https://youtube.com/shorts/mUD2u-YVn7A?si=XbALHTDWobAVhwYh"
    ]
  },
  {
    id: 2,
    name: "馬鞍山海濱",
    distance: 10.3,
    description: "SCTC -> Ma On Shan Promenade -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.387, lng: 114.203 }, // SCTC
      { lat: 22.391, lng: 114.195 }, // Sports Institute
      { lat: 22.406, lng: 114.231 }, // Ma On Shan Promenade
      { lat: 22.387, lng: 114.203 }  // Back to SCTC
    ],
    hasDrills: false,
    hasSprints: false
  },
  {
    id: 3,
    name: "科學園",
    distance: 13.5,
    description: "SCTC -> Twin Bridge -> HK Science Park -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.387, lng: 114.203 }, // SCTC
      { lat: 22.379, lng: 114.192 }, // Twin Bridge
      { lat: 22.426, lng: 114.209 }, // Science Park
      { lat: 22.387, lng: 114.203 }  // Back to SCTC
    ],
    hasDrills: false,
    hasSprints: false
  },
  {
    id: 4,
    name: "梅子林",
    distance: 12.3,
    description: "SCTC -> Mui Tsz Lam -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.387, lng: 114.203 }, // SCTC
      { lat: 22.393, lng: 114.233 }, // Mui Tsz Lam
      { lat: 22.387, lng: 114.203 }  // Back to SCTC
    ],
    hasDrills: false,
    hasSprints: false
  },
  {
    id: 5,
    name: "美田邨",
    distance: 11.4,
    description: "SCTC -> Mei Tin Estate, Tai Wai -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.387, lng: 114.203 }, // SCTC
      { lat: 22.376, lng: 114.169 }, // Mei Tin Estate
      { lat: 22.387, lng: 114.203 }  // Back to SCTC
    ],
    hasDrills: false,
    hasSprints: false
  },
  {
    id: 6,
    name: "屯門公路轉車站",
    distance: 22.4,
    description: "Tsuen Wan West Station -> Tuen Mun Road Bus-Bus Interchange -> Tsuen Wan West Station",
    mapCenter: { lat: 22.370, lng: 114.117 },
    path: [
      { lat: 22.370, lng: 114.117 }, // Tsuen Wan West
      { lat: 22.382, lng: 114.077 }, // Tuen Mun Road Interchange
      { lat: 22.370, lng: 114.117 }  // Back to Tsuen Wan West
    ],
    hasDrills: false,
    hasSprints: false
  },
  {
    id: 7,
    name: "深井嘉頓",
    distance: 11.7,
    description: "Tsuen Wan West -> The Garden, Sham Tseng -> Tsuen Wan West",
    mapCenter: { lat: 22.370, lng: 114.117 },
    path: [
      { lat: 22.370, lng: 114.117 }, // Tsuen Wan West
      { lat: 22.365, lng: 114.064 }, // Sham Tseng
      { lat: 22.370, lng: 114.117 }  // Back to Tsuen Wan West
    ],
    hasDrills: false,
    hasSprints: false
  }
];

export const DRILL_SETS = 5;
export const DRILL_REPS = 2.5;
export const DRILL_TIME_PER_SET = 0.5;
export const SPRINT_DISTANCE = 0.1;
export const SPRINT_SPEED = 20 / 60;
export const SPRINT_REST = 1.5;
export const SPRINT_SETS_DEFAULT = 4;

export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;