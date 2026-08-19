FIXED DEMO LOGIN

This build fixes the GitHub Pages login problem where the demo credentials could not pass the allow-list check.

Use exactly:
Michael
Email: micheljetmaulas@gmail.com
Password: michaeljetmaulas143

Donnah
Email: donnabatchar@gmail.com
Password: donnabatchar143

The two demo accounts are checked before Firebase configuration/allow-list checks, so the front-end demo login works even when firebase-config.js contains placeholders.

Important: this is client-side demo authentication, not real security or cross-device sync.
