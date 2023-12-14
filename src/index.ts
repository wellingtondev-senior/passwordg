import * as crypto from 'crypto';

export class PasswordGenerator {
  private length: number;

  constructor(length: number) {
    this.length = length;
  }

  private generateRandomBytes(): Buffer {
    return crypto.randomBytes(Math.ceil(this.length / 2));
  }

  generatePassword(): string {
    const randomBytes = this.generateRandomBytes();
    return randomBytes.toString('hex').slice(0, this.length);
  }
}

// Exemplo de uso
const passwordLength = 12;
const passwordGenerator = new PasswordGenerator(passwordLength);
const generatedPassword = passwordGenerator.generatePassword();
console.log(`Generated Password: ${generatedPassword}`);
