import { sendSMS } from '../utils/sms';

// Example usage in your bot
const recipientNumber = '1234567890';
const carrierDomain = 'vtext.com'; // Change to the correct domain for the recipient's carrier
const message = 'Hello, this is a test message from your Discord bot!';

// Send SMS when needed
sendSMS(recipientNumber, carrierDomain, message);
