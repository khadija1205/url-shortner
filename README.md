## Web Version
A live, deployed version of this project is available at:
[URL Shortener with Analytics](https://url-shortner-nu-silk.vercel.app/)

# URL Shortener with Analytics
A full-stack URL shortening service with real-time analytics, custom aliases, and QR code generation built with modern web technologies.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat&logo=shadcnui&logoColor=white)

## Project Overview

## Project Overview
This project is a production-ready URL shortener that provides custom short links, detailed analytics tracking, and QR code generation. Built to demonstrate full-stack development skills including RESTful API design, database optimization, and responsive frontend development.

### Key Features
- **URL Shortening**: Generate compact, shareable links from long URLs
- **Custom Aliases**: Create memorable, branded short links
- **Analytics Dashboard**: Track clicks, referrers, and geographic data
- **QR Code Generation**: Automatic QR codes for each shortened URL
- **Link Management**: Edit, delete, and organize your shortened URLs



### Key Features

#### Analytics Tracking
- Real-time click tracking
- Referrer source identification
- Device  detection
- Geographic location tracking (IP-based)


##  Installation & Usage
### Prerequisites
- Node.js (v14.0 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Setup
bash
# Clone repository
git clone https://github.com/khadija1205/url-shortener.git
cd url-shortener

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and base URL

# Start server
npm start


### Environment Variables
env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000
JWT_SECRET=your_secret_key



##  Demo Workflow
1. **Create Short URL** - Enter long URL, optionally customize alias
2. **Copy & Share** - Get shortened link and QR code
3. **Track Performance** - View real-time analytics dashboard
4. **Manage Links** - Edit, delete, or extend expiration dates



## Technology Stack
**Backend:**
- Express.js - RESTful API framework
- MongoDB - NoSQL database
- Mongoose - ODM for MongoDB
- QRCode - QR code generation library

**Frontend:**
- React.js - UI framework
- Tailwind CSS - Styling
- Axios - HTTP client
- React Router - Navigation


## Contact
Khadija - [GitHub](https://github.com/khadija1205) | [LinkedIn](https://linkedin.com/in/your-profile)

⭐ **Star this repo if you found it helpful!**
