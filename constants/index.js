const DEFAULT_MESSAGE = 'Invalid login credentials'

export default {
  SALT_LENGTH: 32,
  CLIENT_ID_LENGTH: 6,
  authErrorCodes: [
    'auth/email-already-exists',
    'auth/invalid-email',
    'auth/invalid-password',
    'auth/user-not-found',
    'auth/wrong-password',
  ],
}
