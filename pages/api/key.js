// import Model from '../../models/apiKey'
import constants from '../../constants';
// import '../../models/all';
import { getUserCredentials } from '../../helpers/database';
import { connectToDatabase } from '../../utils/mongodb';

export default async (req, res) => {
  const { userId } = req.query;
  console.log('🚀 ~ file: key.js ~ line 8 ~ userId', userId)
  let response;
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  if (isConnected) {
    try {
      response = await getUserCredentials(userId)
      console.log('🚀 ~ file: key.js ~ line 14 ~ response', response)
      return res.status(200).json(response);
    } catch (error) {
      console.log('error', error)
    }
  } else {
    return res.status(500).send();
  }
};
