npm init

npm install express --save

Create a new file called index.js

npm install --save-dev nodemon
--save-dev will save the install as:
"devDependencies": {
    "nodemon": "^2.0.22"
  }
This way it isn't used in production, only in development


# sequelize-cli

## npx sqelize-cli db:migrate:undo

The command "npx sequelize-cli db:migrate:undo" is used to undo the most recent database migration performed by Sequelize CLI.

When working with Sequelize, migrations are used to manage the changes made to the database schema over time. Migrations provide a structured way to create, modify, or delete database tables, columns, indexes, and other schema-related elements.

The "db:migrate:undo" command specifically refers to the undo operation for migrations. When executed, it reverts the changes made by the most recent migration script. This can involve dropping tables, removing columns, or any other changes defined in the migration file.

By running "npx sequelize-cli db:migrate:undo," you effectively rollback the most recent migration, restoring the previous state of the database schema. This command can be useful when you need to revert a migration due to an error, to test a different migration, or when you want to undo the last set of changes made to the database.


To add a table:
npx sequelize-cli model:generate --name=User --attributes=name:string,email:string,password:string

npx sequelize-cli model:generate --name=LoginToken --attributes=token:string

after eberything is configured:
npx sequelize-cli db:migrate


