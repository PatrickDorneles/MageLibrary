# MageLibrary 🧙‍♂️📕
A library API to storage books data. This personal prototype project was made by me to learn more about express and REST APIs, and other libraries like prisma.

[![NodeJS Badge](https://img.shields.io/badge/-NodeJS-339933?style=for-the-badge&logo=Node.JS&logoColor=white)](https://nodejs.org/en/)
[![Prisma Badge](https://img.shields.io/badge/-Prisma-11354A?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Typescript Badge](https://img.shields.io/badge/-Typescript-3179C7?style=for-the-badge&logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)

## Starting
To run or build this project you should have these requirements installed:
- NodeJS 14+
- Postgres (and a Postgres database empty)
### 1. Installing dependencies
Run this on your terminal while on the project root:
``` npm i ``` or ``` yarn ```
### 2. Creating environments variables
Create a file named *.env* on the project root and add these fields to it:
```
DATABASE_URL: [YOUR DATABASE URL (like this: "postgresql://user:pass@localhost:5432/mage_library?schema=public")]
PORT: [YOUR FAVORITE PORT]
```
### 3. Create the database tables
After setting your database you can put your database in sync with the project schema by running ```npx prisma db push``` or creating a [migration](https://www.prisma.io/docs/concepts/components/prisma-migrate).

If you change the schema be sure to run ```npx prisma generate dev``` and do the process above.
### 4. Run or build the application
(TODO)