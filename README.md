# SafeHer – Women's Safety Application

A responsive, front-end student project prototype that brings selected safety-support options into one interface.

## Features
- Responsive dashboard and navigation
- Add, view, call and remove trusted contacts
- Saves contact entries in the browser's local storage
- User-initiated browser geolocation with a map link
- Quick-reference emergency call links (India)
- Input validation and clear prototype limitations

## Run locally
1. Download and extract this ZIP.
2. Open the `SafeHer_GitHub_Ready` folder.
3. Open `index.html` in a modern browser.
4. For geolocation testing, use `localhost` or deploy through HTTPS; browsers may block location on ordinary local files.

No build tools or package installation are required.

## Upload to GitHub
1. Sign in at https://github.com
2. Select **New repository** and name it `SafeHer`.
3. Create the repository.
4. Choose **Add file → Upload files**.
5. Extract this ZIP on your laptop, then drag the files inside this folder into GitHub's upload area.
6. Select **Commit changes**.
7. To publish the website, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Wait for the Pages URL to appear.

## Important safety and privacy notes
- This is a front-end prototype, not a verified emergency-response service.
- The SOS button opens the device dialer for 112; it does not silently place a call.
- The website does not send SMS, WhatsApp messages, or automatic alerts.
- Location is requested only after the user presses a location button. It is not uploaded to a server.
- Trusted contacts are stored in the current browser's local storage. They are not synced to another device or account.
- Nearby-help information is a quick-reference section, not a live directory. Verify local services and availability.
- Do not publish real personal phone numbers, API keys, passwords, or private user data in a public repository.

## Project structure
```text
SafeHer_GitHub_Ready/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technology
HTML5 · CSS3 · Vanilla JavaScript · Browser Geolocation API · Local Storage

This ZIP is a clean GitHub-ready front-end implementation based on the SafeHer project concept. It is not the original React/TypeScript + Node/Express + SQLite source code described as the intended architecture in the project report.
