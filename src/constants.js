export const ROUTES = [
  {
    id: 1,
    name: "沙田運動場",
    distance: 7.5,
    description: "SCTC -> Sha Tin Sports Ground -> Twin Bridge -> SCTC",
    mapCenter: { lat: 22.387, lng: 114.203 },
    placeIds: [
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJydpABUwGBDQRQlaysskbm0M', // ST Sports Ground
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
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
    placeIds: [
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJ5XFTHWwJBDQRoMSg3xEXCQo', // Ma On Shan Promenade
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
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
    placeIds: [
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJwQsVK5gJBDQRCRLZbQ8ixPw', // Pak Shek Kok Public Toilet
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk' // SCTC
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
    placeIds: [
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJM7vCqJMHBDQRwlSmZCWi4Ww', // Mui Tsz Lam
      'ChIJIxIxPAAHBDQRsPAnl9Yaq8I', // Twin Bridge
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk' // SCTC
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
    placeIds: [
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk', // SCTC
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJt8O8v6wHBDQR0dggV_lHcoY', // Sha Tin Park
      'ChIJ1wtuR2oHBDQRbJY-fJIVw6Q', // Mei Tin Estate
      'ChIJeQ1U748HBDQRzL6P4pBZltA', // Tai Wai River Garden
      'ChIJmbajCKgHBDQRvMZOm2zRGNc', // Tai Wai Playground
      'ChIJt-jrPKgHBDQRDh4Wpc7-Vk8', // Man Lai Court
      'ChIJD4gUsqsHBDQROIh3dvd9d88', // Hong Kong Bible Research and Education Center
      'ChIJEZ0aoY4HBDQRNKH7t4xTujo', //Lek Yuen Bridge Pavilion
      'ChIJlQoqOkgGBDQRqPGXEIDASAg', // Sports Institute
      'ChIJIwFtYQAHBDQR7OpbhAX-Lxk' // SCTC
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
    placeIds: [
      'ChIJHXJmwAb5AzQR1WHJ-QBRa30', // Tsuen Wan Ferry Pier
      'ChIJr6yHZYn7AzQRWmbrI-KsJQs', // Tuen Mun Road Bus Interchange
      'ChIJHXJmwAb5AzQR1WHJ-QBRa30' // Tsuen Wan Ferry Pier
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
    placeIds: [
      'ChIJMaokuZD5AzQRswKjUnSmUvM', // Hoi Hing Road Public Toilet
      'ChIJQSwProv5AzQRKvEuGw4MQWk', // Sham Tsz Street
      'ChIJMaokuZD5AzQRswKjUnSmUvM' // Hoi Hing Road Public Toilet
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