import { ApiKey, UserCredentials } from '../../models';
// import { UserCredentials } from '../../models/userCredentials';

export async function addApiKey(apiKey) {
  try {
    return await ApiKey.create(apiKey);
  } catch (error) {
    throw error;
  }
}

export async function getApiKey(userId) {
  try {
    console.log('getApiKey', userId)
    return await ApiKey.find({ userId }).exec()
  } catch (error) {
    throw error;
  }
}

export function getUserCredentials(userId) {
  return UserCredentials.find({ userId }).exec()
}

export function addUserCredentials(userCreds) {
  console.log('🚀 ~ file: index.js ~ line 26 ~ addUserCredentials ~ userCreds', userCreds)
  return UserCredentials.create(userCreds);
}