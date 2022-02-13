# Next.js with apollo for server and client with code generation

## Development

You can run this command and visit http://localhost:3000
```shell
yarn dev
```
NOTE: make sure you configure the environment variables before starting

in the .env you need to set:
```env
DATABASE_URL (i.e. postgresql connection string)
GRAPHQL_PATH (i.e. /api/graphql)
```
in the next.config.js you need to set:
```shell
GRAPHQL_URL (i.e. http://localhost:3000/api/graphql)
```

The graphql endpoint is http://localhost:3000/api/graphql

## Code generation
This command will generate the types and queries and hooks for the client and the server
```shell
yarn codegen
```

## Backend
- Database: PostgreSQL
- ORM: prisma (https://www.prisma.io/)
- Graphql

## Frontend
- Next.js
- React
- Chakra-ui
- Graphql

### Useful commands
Opens the prisma studio gui in the browser to manage our DB models
```shell
npx prisma studio
```
