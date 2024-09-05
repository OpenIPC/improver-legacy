


my-project/
│
├── src/
│   ├── index.js        # Main entry point
│   ├── script.js       # Additional script or utility
│   ├── routes.js       # Define routes
│   ├── controllers.js  # Business logic
│   ├── models.js       # Database models
│   ├── utils.js        # Utility functions
│
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact versions of dependencies
└── README.md           # Project documentation




## Setup

#### Ubuntu

sudo apt install libgbm1 libasound2


headless setup x11
Install Xvfb:
```bash
sudo apt-get install xvfb
```
Start Xvfb:
```bash
Xvfb :99 -screen 0 1024x768x24 &
```

Set the DISPLAY Variable:
```bash
export DISPLAY=:99
```

Run Your Electron App:

```bash
npm start
```