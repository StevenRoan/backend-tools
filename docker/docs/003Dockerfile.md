# Dockerfile
### docker build
* `docker build .`: use local dockerfile
 * **send the entire context**: use the current directory ad root
 * **each instruction is run independently**
 * flags:
  * -f <path to Dockerfile>
  * -t image name

### Dockerfile
* [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint)
 * difference between `ENTRYPOINT` and `CMD` [ref](http://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)
 * Entrypoint decides what is execute when `docker run`. All the parametes will be attached as **parameters**
* `COPY, ADD`
 * COPY and ADD [difference](http://stackoverflow.com/questions/24958140/docker-copy-vs-add)
 * copy the file from the **context** to other location, which is the folder in `docker build ... <context>`
 * `EXPOSE`: expose a port from container. When initiating a container,
 * `VOLUME`: enternal mount point

#### NOTE
* `apt-get update` before do any `apt-get install`

* Later
 * docker ignore


