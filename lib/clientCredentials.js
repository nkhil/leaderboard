import { generateSalt } from './apiKey';

export async function createClientId() {
  const salt = await generateSalt();
  return 'leaderboard_client_'.concat(salt)
}

export async function createClientSecret() {
  return await generateSalt()
}
