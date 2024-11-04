# React Dashboard Project

This project is a basic React dashboard that includes components for displaying cards, maps, and charts. It uses `react-bootstrap` for styling, `Leaflet` for interactive maps, and `ApexCharts` for charts.

## Table of Contents

1. [React Project Setup](#react-project-setup)
2. [Bootstrap Setup](#bootstrap-setup)
3. [Leaflet for Map Setup](#leaflet-for-map-setup)
4. [ApexCharts Setup](#apexcharts-setup)

---

### 1. React Project Setup

To get started with the project, you’ll need to set up a new React application using `create-react-app`.

#### Steps:
1. Open your terminal and run the following command to create a new project:

   ```bash
   npx create-react-app reactpoc

2. Navigate into your project directory:

    ```bash
    cd reactpoc

### 2. Bootstrap Setup
For responsive and styled components, this project uses react-bootstrap and bootstrap.

### Steps:
1. Install react-bootstrap and bootstrap packages:

    ```bash
    npm install react-bootstrap bootstrap

2. Import the Bootstrap CSS in the src/index.js file:
    import 'bootstrap/dist/css/bootstrap.min.css';

You can now use Bootstrap components in your project.

### 3. Leaflet for Map Setup
Leaflet is a popular open-source library for interactive maps. In this project, we use react-leaflet, a React wrapper for Leaflet.

### Steps:
1. Install react-leaflet and leaflet:
    
    ```bash
    npm install react-leaflet leaflet

2. Import the Leaflet CSS in the src/index.js file:
    import 'leaflet/dist/leaflet.css';

This setup enables you to add a Leaflet map component in your React application.

### 4. ApexCharts Setup
ApexCharts is a powerful library for adding interactive charts. We use the React wrapper for ApexCharts in this project.

### Steps:
1. Install apexcharts and react-apexcharts:
    ```bash
    npm install apexcharts react-apexcharts

You can now use ApexCharts to create various charts, including bar charts and pie charts, in your React application.


### 5. Run the App
To run the app locally:

### Steps:
1. In your terminal, make sure you’re in the project directory:
    ```bash
    cd reactpoc

2. Start the development server:
    ```bash
    npm start

3. Open http://localhost:3000 in your browser to view the app.