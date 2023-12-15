import * as crypto from 'crypto';

export default function generatePassword(length: number): string {
    const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
    return randomBytes.toString('hex').slice(0, length);
  }




