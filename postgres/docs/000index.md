# Postgres
## Starting from scrach
<!-- * `sudo -E -u postgres -D /usr/lib/postgresql/9.5/bin/postgre -->
- `sudo -u postgres /usr/lib/postgresql/9.5/bin/psql`: use terminal

## Directories
- Binaries: `/usr/lib/postgresql/<version>/bin/*`
- Log:  `/var/log/postgreSql/`
- *
  - `SHOW config_file` -> ask database [link](http://stackoverflow.com/questions/3602450/where-are-my-postgres-conf-files)

## Database, Role, Privilege
### Grant
- `GRANT SELECT ON ALL TABLES..`
- `GRANT SELECT ON ALL ALL SEQUENECES..`
- Q
  - TABLES, SEQUENCES, USAGES? : ->`database object `
  - `PUBLIC`: The key word PUBLIC indicates that the privileges are to be granted to all roles, including those that might be created later.
