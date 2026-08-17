# Michael ♥ Donnah — Private Memory Universe

HTML + CSS + JavaScript romantic monthsary website for Michael Jet Maulas and Donnah Atasha A. Batchar.

## Run locally

Use VS Code **Live Server** and open `index.html`.

## Private photo vault

The vault has three albums:

- ♡ Our Shared Memories
- ♡ Michael's Photos
- ♡ Donnah's Photos

Local Mode uses IndexedDB on the current device.

Private Cloud Mode uses Firebase Authentication, Firestore, and Storage so both phones/devices can see the same memories.

## Enable Cloud

Use the in-page **☁️ CLOUD SETUP** button. You no longer need to open the raw `FIREBASE_SETUP.md` page in a browser tab.

Once Firebase is configured and both authorized accounts are signed in, uploads sync live across devices.

## Main files

- `index.html`
- `style.css`
- `script.js`
- `firebase-config.js`
- `firestore.rules`
- `storage.rules`
- `FIREBASE_SETUP.md`

## Important

A static GitHub Pages site cannot synchronize private photos between devices by itself. Cross-device private storage requires a backend service. This project uses Firebase for that purpose.
