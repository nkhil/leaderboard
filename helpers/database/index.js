import { ApiKey } from '../../models';

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