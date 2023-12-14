# Passwrodg V1.1.5

[![npm version](https://badge.fury.io/js/passwordg.svg)](https://badge.fury.io/js/passwordg)
[![GitHub issues](https://img.shields.io/github/issues/seu-usuario/passwordg.svg)](https://github.com/wellingtondev-senior/passwordg/issues)
[![GitHub license](https://img.shields.io/github/license/seu-usuario/passwordg.svg)](https://github.com/wellingtondev-senior/passwordg/blob/master/LICENSE)

## Descrição

O **Gerador de Senhas Aleatórias** é uma biblioteca simples e flexível para Node.js que permite gerar senhas seguras de forma rápida e fácil. Ele oferece opções personalizáveis, como comprimento da senha e a inclusão de caracteres especiais.

## Recursos

- Gere senhas aleatórias seguras.
- Personalize o comprimento da senha.
- Opção para incluir caracteres especiais.
- Fácil de integrar em seus projetos Node.js.

## Instalação

```bash
npm install passwordg
```

```javascript
import { PasswordGenerator } from 'passwordg';



const passwordGenerator = new PasswordGenerator();
const generatedPassword = passwordGenerator.generatePassword(passwordLength,);

console.log(`Generated Password: ${generatedPassword}`);

```