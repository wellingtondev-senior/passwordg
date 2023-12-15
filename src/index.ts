import * as crypto from 'crypto';

  function generatePassword(length: number): string {
    const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
    return randomBytes.toString('hex').slice(0, length);
  }

export default generatePassword;



