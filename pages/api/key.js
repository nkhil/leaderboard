// import Model from '../../models/apiKey'
import constants from '../../constants';
import { getApiKey } from '../../helpers/database';

export default async (req, res) => {
  const { userId } = req.query;
  let response;
  try {
    response = await getApiKey(userId)
  } catch (error) {
    console.log('error', error)
  }
  res.status(200).json(response);
};
