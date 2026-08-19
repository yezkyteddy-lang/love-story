# Michael & Donnah — Combined Website

This folder combines the two supplied projects into one static website.

## Included
- Michael Jet Maulas personal portfolio/profile
- Donnah Atasha A. Batchar dedicated profile
- Shared relationship timeline
- Monthsary timeline and countdowns
- Love letters and replies from the original mobile web app
- Journey, values, and gallery sections from the portfolio
- Memories / Love Wall
- Private photo vault with the original Local Mode + optional Firebase Cloud Mode
- Night mode, notifications, counters, and responsive mobile navigation
- Both profile images (`mj.png` and `donnah.png`)

## Run locally
Open `index.html` in a browser, or use VS Code Live Server.

## Firebase
The combined site keeps the original `firebase-config.js`, `firestore.rules`, and `storage.rules`.
It starts in Local Mode. Use the site's Cloud Setup only if you want private cross-device synchronization and have configured Firebase Authentication, Firestore, and Storage.

## Relationship date
The original project uses August 7, 2026 as the relationship start date.


## Private Login

The site includes an animated login modal and Firebase Authentication integration for:
- Michael: micheljetmaulas@gmail.com
- Donnah: donnabatchar@gmail.com

Passwords are intentionally NOT hard-coded into the HTML/JavaScript. Create these two Firebase Authentication users using the passwords you choose, then sign in through the animated login screen. Firebase Auth persistence keeps a signed-in session across pages on the same device. Firestore/Storage rules restrict access to the two authorized email accounts, enabling cross-device private-memory sync when the same Firebase project is configured.

Before cloud login can work, replace the Firebase placeholders in `firebase-config.js` with the Web App config from your Firebase project, enable Email/Password Authentication, Firestore, and Storage, and publish the included rules.


## Local testing

Do not double-click index.html for cloud testing. Use RUN_LOCAL.bat or VS Code Live Server so the site runs over http://127.0.0.1:5500. Direct file mode is still supported for viewing, but Firebase cross-device sync requires the hosted HTTPS site and a configured Firebase project.


## IMPORTANT: run the private site correctly

Do not open the HTML by double-clicking it as `file:///...` for Firebase authentication. Use VS Code Live Server or GitHub Pages HTTPS.

For local testing: open `index.html` with Live Server.

The first-time login screen now has a **SET UP PRIVATE CLOUD** button. Enter the Firebase Web App config and the two authorized email addresses, save, reload, then sign in. Passwords are created and managed by Firebase Authentication and are not stored in the site source.
