# Docker
* [docker run](docker-run.md)


### Basic Flow
* OSX Only
 * Create a VM (boot2docekr, docker-machine) (`default machine with IP 192.168.99.100`)

* Runinng a Docker Daemon, Otherwise, `Is the docker daemon running on this host?`
 * Use docker quick start terminal in OSX
 * **How to start Docker Daemon everytime we startup a teminal**

* Build image from a Docker file. (Or using an existent image in the docker hub)
 * `docker build -t <image name> .` //Use default docker file in current directory

* Run a docker container. NOTE: when running a image, docker will try to use the image in the **local** first
 * `docker run <image name>`
  1. Check if the image is in local
  1. Clone from remote if it is not in local
### SSH/Attach to a contanier
* `docker attach <CONTAINER>


### Info
* `docker images`: get images list
* `docker ps`: get  containers list

### CRUD
* Delete
  * `docker rm`: remove docker container, `docker rm -i`: remove docker image
  * `docker rmi <imageID>`: remove docker container, `docker rm -i`: remove docker image
* Build our own images by Dockerfile
 * `docker build -t <image name> <path of Dockerfile>`

### Remote
* `docker login --username=<name> --email=<email>`
 * WARNING: login credentials saved in /Users/<user>/.docker/config.json

* `docker tag <imageID> <username>/<imagename>:<version, e.g.:`latest`>`
 * `docker tag 7d9495d03763 maryatdocker/docker-whale:latest`
  * TODO:Autocomplete?

### Questions
* Why `docker rmi` remove more than one image a time
* in the container, why the `df -h` get a lot of space
* How to keep docker container alive after `exit`