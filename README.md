# Michael × Donnah Monthsary Website — Fixed

Files:
- `index.html` — cleaned/validated HTML structure based on the project code you provided.
- `style.css` — existing romantic styling plus a final responsive/mobile hotfix layer.
- `script.js` — fixed and expanded JavaScript.

## What was fixed

- Fixed the escaped/broken HTML syntax from the pasted version.
- Fixed mobile header/clock overflow and made the layout responsive.
- Added working mobile navigation open/close behavior.
- Added working notification-center open/close behavior.
- Prevented the whole letter section from re-rendering every second, which could close an opened letter.
- Added live locked-letter countdown updates without destroying open-letter state.
- Added live metric values for the relationship and monthsary countdown cards.
- Added the 100-reasons button functionality.
- Added the existing "Open When..." cards.
- Added love stats rendering.
- Added safe localStorage parsing/writing.
- Escaped user-entered replies and memory notes before rendering.
- Added lightbox backdrop closing and Escape-key support.
- Kept the Asia/Manila time logic and the existing monthsary dates.
- Kept the existing memory filenames and gallery behavior.

## Important: your photos

Your JavaScript currently references these existing photo filenames:

016451de-356b-4611-8846-5ea1e008348e.jpg
1916c4f7-815c-4ddf-9b58-a4a701511aeb.jpg
1f3f5d76-9f21-41d6-b74d-a6f74f2a011f.jpg
3044a879-735f-4c51-b1f4-11e7760732fe.jpg
4725a6a4-d390-4e50-ad67-3adf35bd9c0c.jpg
5aa1abfb-ffc1-417c-8f96-9f856f47b882.jpg
771454a0-838c-4ae8-8086-bf2b287715f9.jpg
77b3bbfb-08d2-48ea-99b8-59ae3df17c61.jpg
970b6489-b73b-456b-a053-fbe88185d79e.jpg
a24203f3-be6d-4996-bfbd-2072583c5ff9.jpg
c0726b67-169c-43ad-94c2-26bdb7c75f32.jpg
f58f5efb-6b81-43a9-a61e-d90eb89649d4.jpg
f9e11083-0eda-4edd-8474-6fcd600b0ee0.jpg

Keep those images in the same folder as `index.html`/`script.js` when deploying, exactly as they are named, unless you also change the `MEMORY_FILES` paths in `script.js`.

## GitHub Pages

Upload/replace:
- `index.html`
- `style.css`
- `script.js`

Keep your existing `.jpg` memory files in the same repository.

No framework or backend is required for this version.

## Important: Local mode vs shared private cloud

The site now correctly hides the Firebase sign-in form when `mode: "local"`. Local mode uses IndexedDB on the current browser/device and is useful for testing uploads immediately.

Local mode does **not** synchronize photos between Michael's phone and Donnah's phone and cannot provide true cross-device privacy by itself.

For real shared private access from both devices, set `mode: "firebase"` in `firebase-config.js`, enter the two authorized email addresses, and follow `FIREBASE_SETUP.md` to configure Firebase Authentication, Firestore, and Storage rules.
