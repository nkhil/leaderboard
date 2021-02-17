// import Model from '../../models/apiKey'
import { generateApiKey, createHash } from '../../lib/apiKey';
import constants from '../../constants';
import { createClientId, createClientSecret } from '../../lib/clientCredentials';
import { addApiKey, getApiKey } from '../../helpers/database';
const { SALT_LENGTH, CLIENT_ID_LENGTH } = constants;

export default async (req, res) => {
  const { userId } = req.query;
  console.log('userId', userId)
  const apiKey = generateApiKey(SALT_LENGTH);
  console.log('🚀 ~ file: apikey.js ~ line 12 ~ apiKey', apiKey)
  const clientId = createClientId(CLIENT_ID_LENGTH);
  console.log('🚀 ~ file: apikey.js ~ line 14 ~ clientId', clientId)
  const clientSecret = createClientSecret(SALT_LENGTH);
  console.log('🚀 ~ file: apikey.js ~ line 16 ~ clientSecret', clientSecret)
  const clientSecretHash = createHash(clientSecret);
  const response = {
    clientId,
    clientSecret,
    apiKey,
  }
  try {
    const entry = {
      userId,
      clientId,
      clientSecretHash,
      apiKey,
    }
    const a = await addApiKey(entry)
    console.log('create new API key response', a);
  } catch (error) {
    console.log('error', error)
  }
  console.log('response', response)
  res.status(200).json(response);
};
