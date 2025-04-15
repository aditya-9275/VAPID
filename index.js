const webpush = require('web-push');

// Generate VAPID keys
const vapidKeys = webpush.generateVAPIDKeys();

console.log("🔐 Public VAPID Key:\n", vapidKeys.publicKey);
console.log("🗝️ Private VAPID Key:\n", vapidKeys.privateKey);

