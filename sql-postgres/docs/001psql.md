#psql
## Commands
### Info
Role is different concept from mongodb. Role is `user`, each role has its' own attribute.
`User` in postgresql is a **ROLE**  with **LOGIN** attribute.
* Info session table [link](http://www.postgresql.org/docs/current/interactive/functions-info.html#FUNCTIONS-INFO-SESSION-TABLE)
  * `SELECT current_user;`: get the name of current user
* `SELECT * FROM pg_roles`, `\du`: get the role

### Set privilege
1. create user
 * e.g.: `CREATE USER tester WITH PASSWORD 'tester';`
1. create database
 * e.g: `CREATE DATABASE myapp;`
1. connect to database
 * `\c myapp;`
1. revoke the privilege
 * `REVOKE ALL ON DATABASE myapp FROM PUBLIC;`
