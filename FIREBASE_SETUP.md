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

## 5. Use the website

After deploying the files to GitHub Pages:

1. Open the site.
2. Go to `♡ PRIVATE COUPLE PHOTO VAULT ♡`.
3. Sign in with Michael's or Donnah's authorized account.
4. Choose an album:
   - Our Memories
   - Michael
   - Donnah
5. Choose one or many photos.
6. Add a title/caption.
7. Click **UPLOAD MEMORIES**.

The photos are uploaded to Firebase Storage and their metadata is stored in Firestore.

## Privacy behavior

Only the two authorized email accounts are allowed by the Firebase rules to read/write the private photo collection.

The rest of the public website is not automatically private. This upgrade specifically creates a private authenticated photo vault. If you want the *entire website* behind the same two-account login, the same Firebase gate can be extended to the full page.

## Local mode

The default config is intentionally:

```js
mode: "local"
```

This prevents a broken site before Firebase is configured. Local mode stores photos in IndexedDB and does not pretend they are shared across devices.
