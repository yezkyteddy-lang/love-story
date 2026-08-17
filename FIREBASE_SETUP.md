# Private Couple Photo Vault — Firebase Setup

The website now supports two modes:

1. **Local mode** — works immediately. Uploaded photos are stored in this browser only.
2. **Firebase mode** — shared private photos between Michael and Donnah across phones/computers.

A static GitHub Pages site cannot securely synchronize private photos by itself. For the shared private vault, use Firebase Authentication + Firestore + Storage.

## 1. Create a Firebase project

Open Firebase Console and create a project.

Enable:

- Authentication → Sign-in method → Email/Password
- Firestore Database
- Storage

## 2. Create the two accounts

Use the actual email addresses for:

- Michael
- Donnah

The site only accepts those two emails in the client config, and the Firebase Security Rules also enforce them on the server.

## 3. Add your Firebase web app config

Open `firebase-config.js` and change:

```js
window.COUPLE_CONFIG = {
  mode: "firebase",
  allowedEmails: [
    "MICHAEL_REAL_EMAIL",
    "DONNAH_REAL_EMAIL"
  ],
  firebase: {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  }
};
```

Copy these values from Firebase Project Settings → Your apps → Web app.

## 4. Deploy the security rules

Open Firestore → Rules and paste the contents of `firestore.rules`.

Replace:

- `MICHAEL_EMAIL_HERE`
- `DONNAH_EMAIL_HERE`

with the same two email addresses used in `firebase-config.js`.

Open Storage → Rules and paste the contents of `storage.rules`.

Replace the same two email placeholders there too.

## 5. Put the updated files on GitHub Pages

Commit/push these project files to the repository that serves your GitHub Pages site:

- `index.html`
- `style.css`
- `script.js`
- `firebase-config.js`
- `firestore.rules` (for Firebase Console rules)
- `storage.rules` (for Firebase Console rules)

Do not put the two account passwords into the website files.

## 6. Use the website on both phones

After the GitHub Pages deployment finishes:

1. Open the same website URL on Michael's phone.
2. Open the same website URL on Donnah's phone.
3. Both users sign in with their own authorized Firebase email/password account.
4. Choose an album:
   - `Our Memories` — shared and shown in the heart gallery.
   - `Michael` — Michael's personal album.
   - `Donnah` — Donnah's personal album.
5. Upload one or many photos.
6. New cloud photos are stored in Firebase Storage and their metadata is stored in Firestore.

The vault now uses a real-time Firestore listener, so new uploads/deletes can appear on the other signed-in phone without needing a page rebuild.

If the other phone still says **LOCAL MODE**, the deployed `firebase-config.js` is still in local mode or still contains placeholders.

If sign-in says `auth/operation-not-allowed`, enable **Authentication → Sign-in method → Email/Password** in Firebase Console.

## Privacy behavior

Only the two authorized email accounts are allowed by the Firebase rules to read/write the private photo collection.

The rest of the public website is not automatically private. This upgrade specifically creates a private authenticated photo vault. If you want the *entire website* behind the same two-account login, the same Firebase gate can be extended to the full page.

## Local mode

The default config is intentionally:

```js
mode: "local"
```

This prevents a broken site before Firebase is configured. Local mode stores photos in IndexedDB and does not pretend they are shared across devices.
