export declare class PasswordGenerator {
    private length;
    constructor(length: number);
    private generateRandomBytes;
    generatePassword(): string;
}
