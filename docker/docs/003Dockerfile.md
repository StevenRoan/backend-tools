# Dockerfile
* [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)
 * difference between `ENTRYPOINT` and `CMD` [ref](http://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)
 * Entrypoint decides what is execute when `docker run`. All the parametes will be attached as **parameters**
* `apt-get update` before do any `apt-get install`
* `COPY, ADD`
 * COPY and ADD [difference](http://stackoverflow.com/questions/24958140/docker-copy-vs-add)
 * copy the file from the **context** to other location, which is the folder in `docker build ... <context>`