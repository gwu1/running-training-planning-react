# Running & Training Planning App 🏃‍♂️

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub stars](https://img.shields.io/github/stars/gwu1/running-training-planning-react?style=social)
![GitHub forks](https://img.shields.io/github/forks/gwu1/running-training-planning-react?style=social)

A modern React application designed to help runners and athletes plan their training routes in Sha Tin and Tsuen Wan, Hong Kong. This project is an upgraded React version of the original [Running-Training-Plan](https://github.com/gwu1/Running-Training-Plan), which was built using Python Flask. The React version offers a more interactive and responsive user experience, with enhanced features and a modern UI.

The app allows users to select predefined routes, customize their pace and sprint sets, and visualize their route on an embedded Google Map. It also provides a detailed workout summary and a shareable link with a QR code for easy sharing.

**🌟 The app is deployed and live at: [https://gwu1.github.io/running-training-planning-react/](https://gwu1.github.io/running-training-planning-react/)**

## ✨ Features

- **Route Selection:** Choose from multiple predefined running routes in Sha Tin and Tsuen Wan, each with a specified distance and description.
- **Customizable Pace:** Set your running pace (minutes and seconds per kilometer) to calculate the total workout time.
- **Sprint Sets:** For routes with sprints, customize the number of sprint sets to include in your workout.
- **Workout Summary:** Get a detailed breakdown of your workout, including run time, drill time (if applicable), sprint time (if applicable), and total time.
- **Google Maps Integration:** Visualize your selected route on an embedded Google Map using the Google Maps Embed API.
- **Shareable Links:** Generate a shareable URL with a QR code to easily share your planned route and settings with others.
- **Responsive Design:** Built with Material-UI for a clean, responsive, and mobile-friendly user interface.
- **Animations:** Smooth animations using Framer Motion for an engaging user experience.

## 📸 Screenshots
<img width="1405" alt="Screenshot 2025-03-23 at 9 51 43 AM" src="https://github.com/user-attachments/assets/4c0dec5e-5f26-45c4-ad0a-08cf8ae000bd" />

## 🛠️ Tech Stack

- **Frontend:** React, Material-UI, Framer Motion
- **Map Integration:** Google Maps Embed API
- **QR Code Generation:** `qrcode.react`
- **Modal:** `react-modal`
- **Deployment:** GitHub Pages with GitHub Actions
- **Version Control:** Git and GitHub

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v18 or higher) and **npm** (v8 or higher) installed on your machine.
- A Google Maps API key with the **Maps Embed API** enabled. You can get one from the [Google Cloud Console](https://console.cloud.google.com/).

### Installation

1. **Clone the Repository:**

```
git clone https://github.com/gwu1/running-training-planning-react.git
cd running-training-planning-react
```


2. **Install Dependencies:**
```
npm install
```


3. **Set Up Environment Variables:**
Create a `.env` file in the project root and add your Google Maps API key:
```
REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here
```


4. **Run the App Locally:**
```
npm start
```

The app will start on `http://localhost:3000`.

### Project Structure

### Project Structure
```
running-training-planning-react/
├── public/                 # Static assets (e.g., background.jpg)
├── src/                    # Source code
│   ├── components/         # React components (if any)
│   ├── App.js              # Main app component
│   ├── App.css             # Styles for the app
│   ├── constants.js        # Constants (routes, API keys, etc.)
│   └── index.js            # Entry point
├── .github/                # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml      # Workflow for deploying to GitHub Pages
├── .env                    # Environment variables (not committed)
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```


## 📦 Deployment

The app is deployed to GitHub Pages using a GitHub Actions workflow. Follow these steps to deploy your own instance.

### Deploy to GitHub Pages

1. **Set Up Your Repository:**
   - Ensure your repository is public (GitHub Pages requires a public repository for free accounts).
   - Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```
   "homepage": "https://your-username.github.io/running-training-planning-react"
   ```

2. **Add Your Google Maps API Key as a Secret:**
- Go to your repository → “Settings” → “Secrets and variables” → “Actions.”
- Add a secret named `REACT_APP_GOOGLE_MAPS_API_KEY` with your Google Maps API key.

3. **Push Changes to Trigger Deployment:**
The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your app to the `gh-pages` branch whenever you push to the `main` branch:
```
git add .
git commit -m "Update app for deployment"
git push origin main
```


4. **Access Your Deployed App:**
Once the workflow completes, your app will be live at `https://your-username.github.io/running-training-planning-react`.

### Local Deployment (Alternative)
If you prefer to deploy manually:

1. Build the app:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages using the `gh-pages` package:
   ```
   npm run deploy
   ```

## 🔄 CI/CD with GitHub Actions

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD) to automate the build, test, and deployment process to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml` and is triggered whenever changes are pushed to the `main` branch.

### How It Works

1. **Trigger:** The workflow runs on every push to the `main` branch.
2. **Steps:**
- **Checkout Code:** Uses `actions/checkout@v3` to clone the repository.
- **Set Up Node.js:** Uses `actions/setup-node@v3` to set up Node.js (v18).
- **Install Dependencies:** Runs `npm install` to install project dependencies.
- **Run Tests:** Runs `npm test -- --passWithNoTests` to execute unit tests and ensure the app is functioning correctly.
- **Build:** Runs `npm run build` to create a production build, injecting the Google Maps API key from the repository's secrets.
- **Deploy:** Uses `peaceiris/actions-gh-pages@v3` to deploy the `build` folder to the `gh-pages` branch, which GitHub Pages uses to serve the app.

### Storing the Google Maps API Key Securely

To securely manage the Google Maps API key, the key is stored as a repository secret and injected into the build process:

1. **Add the Secret:**
- Go to your repository → “Settings” → “Secrets and variables” → “Actions.”
- Click “New repository secret.”
- Add a secret named `REACT_APP_GOOGLE_MAPS_API_KEY` with your Google Maps API key as the value.

2. **Access the Secret in the Workflow:**
The workflow accesses the secret and sets it as an environment variable during the build step:
```
env:
REACT_APP_GOOGLE_MAPS_API_KEY: ${{ secrets.REACT_APP_GOOGLE_MAPS_API_KEY }}
```

This ensures the API key is securely embedded in the production build without being exposed in the source code.

### Workflow File

The GitHub Actions workflow is defined in `.github/workflows/deploy.yml`. Here’s a simplified version of the workflow:
```
name: Deploy to GitHub Pages

on:
push:
branches:
- main
permissions:
contents: write
pages: write
id-token: write

jobs:
deploy:
runs-on: ubuntu-latest
steps:
- name: Checkout code uses: actions/checkout@v3
- name: Set up Node.js uses: actions/setup-node@v3 with: node-version: '18'
- name: Install dependencies run: npm install
- name: Run tests run: npm test -- --passWithNoTests
- name: Build env: REACT_APP_GOOGLE_MAPS_API_KEY: ${{ secrets.REACT_APP_GOOGLE_MAPS_API_KEY }} run: npm run build
- name: Deploy to GitHub Pages uses: peaceiris/actions-gh-pages@v3 with: github_token: ${{ secrets.GITHUB_TOKEN }} publish_dir: ./build force_orphan: true
```

This setup ensures a seamless and secure deployment process with automated testing for the app.

## 🗺️ Route Data

The app includes predefined routes in Sha Tin and Tsuen Wan, stored in `src/constants.js`. Each route has the following properties:

- `id`: Unique identifier for the route.
- `name`: Name of the route (e.g., "Sha Tin Park Loop").
- `distance`: Distance in kilometers.
- `description`: Brief description of the route.
- `mapCenter`: Center coordinates for the map (not used with Embed API but included for future enhancements).
- `path`: Array of coordinates (`{ lat, lng }`) defining the route’s waypoints.
- `hasDrills` and `hasSprints`: Booleans indicating if the route includes drills or sprints.
- `drillVideos`: Array of URLs to drill videos (if applicable).

To add a new route, update the `ROUTES` array in `src/constants.js`.

## 🔧 Customization

- **Styling:** Modify `src/App.css` to change the app’s appearance (e.g., colors, fonts, background image).
- **Background Image:** Replace `public/background.jpg` with your own image to change the app’s background.
- **Map Styling:** The Google Maps Embed API doesn’t support custom styles. To customize the map’s appearance, consider switching to the Google Maps JavaScript API (see previous commits for an example).
- **Additional Features:** Add new features like user authentication, route creation, or integration with fitness APIs by extending the app’s functionality.

## 🤝 Contributing

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```
   git commit -m "Add your feature description"
   ```
4. Push to your fork:
   ```
   git push origin feature/your-feature-name
   ```
5. Open a pull request to the `main` branch of this repository.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or feedback, feel free to reach out:

- **GitHub:** [gwu1](https://github.com/gwu1)
- **Email:** genehk2@gmail.com

## Acknowledgements

- [React](https://reactjs.org/) for the frontend framework.
- [Material-UI](https://mui.com/) for the UI components.
- [Framer Motion](https://www.framer.com/motion/) for animations.
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed) for map integration.
- [GitHub Pages](https://pages.github.com/) for hosting.
