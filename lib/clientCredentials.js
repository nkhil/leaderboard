import { generateSalt } from './apiKey';

export function createClientId(length) {
  return 'leaderboard_client_'.concat(generateSalt(length))
}

export function createClientSecret(length) {
  return generateSalt(length)
}
