const test = require('tape');
const Crypt = require('../');

test('Encrypt and decrypt function with hello world like example', t => {
    t.plan(1);
    const crypt = new Crypt('YWF9/oLSjtow5XwKrHvmrw==');
    const encryptedString = crypt.encrypt('Hello World');
    const decryptedString = crypt.decrypt(encryptedString);
    console.log('Encrypt information: ' + encryptedString)
    console.log('Decrypt nformation: ' + decryptedString)
    t.equal(decryptedString, 'Hello World', 'decrypted correctly');
});