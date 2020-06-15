import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const simpleHash = (txt: string): string => {
  return crypto.createHash('sha256').update(txt).digest('hex');
};

const hash = (txt: string): { salt: string; hash: string } => {
  const salt = uuidv4();
  return {
    salt,
    hash: bcrypt.hashSync(`${salt.substring(0, salt.length / 2)}${txt}${salt.substring(salt.length / 2)}`, 12),
  };
};

const verifHash = (txt: string, salt: string, hashed: string): boolean => {
  return bcrypt.compareSync(`${salt.substring(0, salt.length / 2)}${txt}${salt.substring(salt.length / 2)}`, hashed);
};

export default {
  simpleHash,
  hash,
  verifHash,
};
