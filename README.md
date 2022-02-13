# Fullstack application (Next.js, GraphQL, Prisma and PostgreSQL)
## Development

Push the prisma schema into your DB:
https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push
```shell
npx prisma db push
```

You can run this command and visit http://localhost:3000
```shell
yarn dev
```
NOTE: make sure you configure the environment variables before starting

in the .env you need to set:
```env
DATABASE_URL (i.e. DB connection string postgresql://<username>:<password>@<db_url>:<port>/<db_name>)
GRAPHQL_PATH (i.e. /api/graphql)
```
in the next.config.js you can change the endpoint for the graphql api:
```shell
GRAPHQL_URL (i.e. http://localhost:3000/api/graphql)
```

The default graphql endpoint is http://localhost:3000/api/graphql

## Code generation
This command will generate the types and queries and hooks for the client and the server
```shell
yarn codegen
```

## Backend
- Database: PostgreSQL (can be swapped for MYSQL, SQL Server, PlanetScale or MongoDB) 
- ORM: prisma (https://www.prisma.io/)
- Graphql
- Auth0 (not yet implemented)

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
(Prisma studio)
![Screenshot_2022-02-13_23-51-17](https://user-images.githubusercontent.com/66938119/153778831-7f75546b-2609-40df-9373-fb079c8bc84a.png)
