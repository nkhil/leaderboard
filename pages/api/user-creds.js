// import Model from '../../models/apiKey'
import { generateApiKey, createHash } from '../../lib/apiKey';
import constants from '../../constants';
import { createClientId, createClientSecret } from '../../lib/clientCredentials';
import { addUserCredentials } from '../../helpers/database';
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
  console.log('🚀 ~ file: user-creds.js ~ line 18 ~ clientSecretHash', clientSecretHash)

	try {
		const entry = {
			clientId,
			userId,
			clientSecretHash,
			apiKeys: [
        { apiKey },
      ],
		}
		const response = await addUserCredentials(entry);
    console.log('🚀 ~ file: user-creds.js ~ line 34 ~ response', response)
    const credentials = {
      clientId: response.clientId,
      clientSecret,
      apiKeys: [
        { apiKey }
      ],
    }
    res.status(200).json(credentials);
	} catch (error) {
		console.log('error ===!\n', error)
    res.status(500).json({ error });
	}
};
