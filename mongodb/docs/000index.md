# Mongodb
Some mongodb notes in here

# ACL
* create a user with read and write.
  * Let's create `myDb` with user `me`
    1. login as `root`
    2. `use myDb`
    3. `db.createUser(obj)`
    ```
    db.createUser( { "user" : "me",
                     "pwd": "cleartext password",
                     "roles": ["readWrite"]
                   });
    ```
