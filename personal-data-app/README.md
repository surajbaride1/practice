# Personal Data Storage App

A React.js web application for storing and managing personal data with a beautiful header navigation bar.

## Features

- **Header Navigation Bar** with multiple options:
  - Profile
  - Contact Info
  - Education
  - Work Experience
  - Skills
  - Documents

- **Data Storage**: All data is stored locally in the browser using localStorage
- **Modern UI**: Beautiful, responsive design with gradient colors
- **Multiple Forms**: Different forms for different types of personal data

## Getting Started

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header component
│   └── Header.css       # Header styles
├── pages/
│   ├── Profile.jsx      # Personal profile form
│   ├── Contact.jsx      # Contact information form
│   ├── Education.jsx   # Education details form
│   ├── Experience.jsx  # Work experience form
│   ├── Skills.jsx      # Skills management form
│   ├── Documents.jsx  # Documents information form
│   └── DataForm.css   # Shared form styles
├── App.jsx             # Main app component with routing
├── App.css             # App styles
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Usage

1. Navigate through the header menu to access different sections
2. Fill out the forms with your personal information
3. Click "Save" to store your data (saved in browser localStorage)
4. Your data persists across page refreshes

## Technologies Used

- React 19
- React Router DOM
- Vite
- CSS3
