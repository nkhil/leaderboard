import sh from '@subgeniuscorp/secret-helper';

export function generateSalt() {
  return sh.generateSalt();
}

export function createHash(str) {
  return sh.createHash({
    valueToHash: str,
  })
}

export function generateApiKey(len) {
  return sh.generateApiKey({ length: len });
}
