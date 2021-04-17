import { generateSalt } from './apiKey';
import sh from '@subgeniuscorp/secret-helper';

export async function createClientId() {
  const randomStrOne = sh.generateRandomString({ length: 4 });
  const randomStrTwo = sh.generateRandomString({ length: 4 });
  const randomStrThree = sh.generateRandomString({ length: 4 });
  return `leaderboard-${randomStrOne}-${randomStrTwo}-${randomStrThree}`;
}

export async function createClientSecret() {
  return await generateSalt()
}
