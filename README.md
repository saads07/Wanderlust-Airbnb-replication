# Wanderlust – Airbnb Inspired Full-Stack Web Application

Wanderlust is a full-stack web application inspired by Airbnb, designed to provide users with a platform to explore and list properties or hotels for rent.

The application includes property management, user authentication, image uploads, reviews, and interactive maps, providing a complete full-stack web development experience.

## Key Features

### Property Listings
- Create new property listings
- View detailed property information
- Edit existing listings
- Delete listings
- Complete CRUD functionality

### User Authentication
- User registration and login
- Session-based authentication
- Protected routes for authorized users
- Secure access to user-specific functionality

### Image Management
- Cloudinary integration for property image uploads
- Cloud-based image storage and retrieval
- Support for JPG, JPEG, and PNG images

### Interactive Maps
- Mapbox integration
- Displays property locations on an interactive map
- Provides geographical context for listings

### Reviews
- Users can add reviews to property listings
- Reviews are associated with individual listings
- Review management functionality

## Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript
- EJS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Cloud & APIs**
- Cloudinary
- Mapbox

**Authentication & Validation**
- Express Session
- Authentication Middleware
- Joi Validation

## Project Structure

- `controllers/` – Application controllers
- `models/` – MongoDB models
- `router/` – Express routes
- `views/` – EJS templates
- `public/` – CSS and client-side JavaScript
- `utils/` – Utility functions
- `uploads/` – Uploaded files
- `app.js` – Main application entry point

## Environment Variables

The application uses environment variables for external services and sensitive configuration.

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret