import sh from '@subgeniuscorp/secret-helper';
import constants from '../constants';

const { SALT_LENGTH } = constants;

export function generateSalt(len) {
  const length = len ? len : SALT_LENGTH;
  return sh.generateSalt({ length  });
}

export function createHash(str) {
  return sh.createHash({
    valueToHash: str,
  })
}

export function generateApiKey(len) {
  return sh.generateApiKey({ length: len });
}
