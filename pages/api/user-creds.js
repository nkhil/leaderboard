import { createClientId, createClientSecret } from '../../lib/clientCredentials';
import { addUserCredentials } from '../../helpers/database';
import secretHelper from '@subgeniuscorp/secret-helper';

export default async (req, res) => {
	const { userId } = req.query;
	const clientId = await createClientId();
	const clientSecret = await createClientSecret();
	const clientSecretHash = await secretHelper.createHash({
    valueToHash: clientSecret
  });
	try {
		const entry = {
			clientId,
			userId,
			clientSecretHash,
		}
		const response = await addUserCredentials(entry);
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
