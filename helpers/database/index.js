import { UserCredentials } from '../../models';

export function getUserCredentials(userId) {
  return UserCredentials.find({ userId }).exec();
}

export function addUserCredentials(userCreds) {
  return UserCredentials.create(userCreds);
}