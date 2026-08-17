# Private Couple Cloud — Setup

The website has two modes:

## Local Mode
Works immediately, but uploaded photos stay in the current browser/device.

## Private Cloud Mode
Uses Firebase Authentication + Firestore + Storage so Michael and Donnah can see the same uploaded memories on different phones, tablets, or computers.

## Setup

1. Open the website and go to **PRIVATE COUPLE PHOTO VAULT**.
2. Click **☁️ CLOUD SETUP**. This opens an in-page setup panel; it no longer sends you to this Markdown page.
3. In Firebase Console, create a Firebase project and add a Web App.
4. Enable:
   - Authentication → Sign-in method → Email/Password
   - Firestore Database
   - Storage
5. Copy the Firebase Web App config into the website's Cloud Setup panel.
6. Enter the exact Firebase Authentication email for Michael and the exact Firebase Authentication email for Donnah.
7. Deploy the included `firestore.rules` and `storage.rules` to the same Firebase project.
8. Click **☁️ SAVE & ENABLE CLOUD**. The site reloads in Cloud Mode.
9. Create/sign in to the two authorized accounts.

After both devices are signed in, uploads to **Our Memories**, **Michael**, and **Donnah** are stored in Firebase and are synchronized live.

## Important

A Firebase Web App config is normal client-side configuration. The actual privacy is enforced by Firebase Authentication and the Firestore/Storage Security Rules.

The exact two email addresses must be placed into the Security Rules as well as the site's Cloud Setup panel.

### Firestore rules
Replace:

- `MICHAEL_EMAIL_HERE`
- `DONNAH_EMAIL_HERE`

inside `firestore.rules`.

### Storage rules
Replace the same two placeholders inside `storage.rules`.

Do not make the Firestore or Storage rules public.
