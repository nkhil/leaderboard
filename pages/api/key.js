// import Model from '../../models/apiKey'
import constants from '../../constants';
import { getApiKey } from '../../helpers/database';
import { connectToDatabase } from '../../utils/mongodb';

export default async (req, res) => {
  const { userId } = req.query;
  let response;
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  if (isConnected) {
    try {
      response = await getApiKey(userId)
    } catch (error) {
      console.log('error', error)
    }
  } else {
    return res.status(500).send();
  }

  return res.status(200).json(response);
};
