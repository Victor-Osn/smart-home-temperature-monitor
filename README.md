# Smart Home Temperature Monitor

A simple full-stack IoT-style web application for monitoring temperature readings through a dashboard.

## Project Overview

This project simulates a smart home temperature monitoring system.  
The frontend displays the current temperature, temperature status, and the latest 5 readings.  
The backend provides API endpoints that return simulated temperature data and generate new readings.

## Features

- View current temperature
- View temperature status: Cold, Normal, or Hot
- View latest 5 readings
- Refresh temperature using the backend API
- Color-coded status display

## Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express
- CORS

## API Endpoints

- GET /
- GET /api/temperature/current
- GET /api/temperature/history
- POST /api/temperature/refresh

## Project Structure

- frontend/ - React dashboard
- backend/ - Express API
- run-instructions.md - setup and run guide

## How to Run

### Frontend
1. Open terminal in frontend
2. Run npm install
3. Run npm run dev

### Backend
1. Open terminal in backend
2. Run npm install
3. Run npm start

## Current Status

Completed working full-stack project with frontend-backend integration.

## Future Improvements

- Add timestamps for each reading
- Add loading and error handling
- Improve mobile responsiveness
- Deploy the application online
