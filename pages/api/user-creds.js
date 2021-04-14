import constants from '../../constants';
import { createClientId, createClientSecret } from '../../lib/clientCredentials';
import { addUserCredentials } from '../../helpers/database';
import secretHelper from '@subgeniuscorp/secret-helper';
const { SALT_LENGTH, CLIENT_ID_LENGTH } = constants;

export default async (req, res) => {
	const { userId } = req.query;
	const clientId = createClientId(CLIENT_ID_LENGTH);
	const clientSecret = createClientSecret(SALT_LENGTH);
	const clientSecretHash = await secretHelper.createHash({
    valueToHash: clientSecret
  });
  console.log('~  -----------------------------------')
  console.log('~ clientSecretHash', clientSecretHash)
  console.log('~  -----------------------------------')

	try {
		const entry = {
			clientId,
			userId,
			clientSecretHash,
		}
		const response = await addUserCredentials(entry);
    console.log('🚀 ~ file: user-creds.js ~ line 34 ~ response', response)
    const credentials = {
      clientId: response.clientId,
      clientSecret,
    }
    res.status(200).json(credentials);
	} catch (error) {
		console.log('error ===!\n', error)
    res.status(500).json({ error });
	}
};
