const crypto = require('crypto')
const { SALT_LENGTH } = require('../constants')

export function generateSalt(len) {
  const set = '0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ'
  const setLen = set.length
  let salt = ''
  for (var i = 0; i < len; i++) {
    var p = Math.floor(Math.random() * setLen);
    salt += set[p];
  }
  return salt;
}

function md5(string) {
  return crypto.createHash('md5').update(string).digest('hex');
}

export function createHash(str) {
  var salt = generateSalt(SALT_LENGTH)
  var hash = md5(str + salt)
  return salt + hash;
}

export function validateHash(hash, apiKeyFromRequest) {
  var salt = hash.substr(0, SALT_LENGTH);
  var validHash = salt + md5(apiKeyFromRequest + salt);
  return hash === validHash;
}

export function generateApiKey(len) {
  if (!len) throw new Error(`API Key length not defined.`)
  return crypto.randomBytes(64).toString('hex').slice(0, len)
}

// module.exports = {
//   generateApiKey,
//   createHash,
//   validateHash,
//   generateSalt,
// }

