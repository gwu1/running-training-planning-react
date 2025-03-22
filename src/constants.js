export const ROUTES = [
  {
    id: 1,
    name: "沙田運動場",
    distance: 7.5,
    description: "SCTC -> Sha Tin Sports Ground -> Twin Bridge -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    path: [
      { lat: 22.396810, lng: 114.201182 }, // SCTC
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.387512, lng: 114.197181 }, // Sports Ground
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.396810, lng: 114.201182 }  // Back to SCTC
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
      { lat: 22.396810, lng: 114.201182 }, // SCTC
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.418101, lng: 114.223154 }, // Ma On Shan Promenade
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.396810, lng: 114.201182 }  // Back to SCTC
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
      { lat: 22.396810, lng: 114.201182 }, // SCTC
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.429442, lng: 114.209777}, // Science Park
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.396810, lng: 114.201182 }  // Back to SCTC
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
      { lat: 22.396810, lng: 114.201182 }, // SCTC
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.393101, lng: 114.233375 }, // Mui Tsz Lam
      { lat: 22.402756, lng: 114.213578 }, // Twin Bridge
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.396810, lng: 114.201182 }  // Back to SCTC
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
      { lat: 22.396810, lng: 114.201182 }, // SCTC
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.386581, lng: 114.196925 },
      { lat: 22.375873, lng: 114.168921 }, // Mei Tin Estate
      { lat: 22.375738, lng: 114.180402 }, // Tai Wai Playground
      { lat: 22.374616, lng: 114.182010 }, // Man Lai Court
      { lat: 22.375524, lng: 114.185449 }, // The Riverpark
      { lat: 22.383530, lng: 114.196446 }, // Wong Uk
      { lat: 22.392262, lng: 114.200203 }, // Sports Institute
      { lat: 22.396810, lng: 114.201182 }  // Back to SCTC
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
      { lat: 22.366813, lng: 114.110937 }, // Tsuen Wan West
      { lat: 22.358562, lng: 114.018563 }, // Tuen Mun Road Interchange
      { lat: 22.366813, lng: 114.110937 }  // Back to Tsuen Wan West
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
      { lat: 22.370812, lng: 114.107062 }, // Tsuen Wan West
      { lat: 22.364562, lng: 114.064312 }, // Sham Tseng
      { lat: 22.370812, lng: 114.107062 }  // Back to Tsuen Wan West
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