# Docker

### Basic Flow
* OSX Only
 * Create a VM (boot2docekr, docker-machine) (`default machine with IP 192.168.99.100`)

* Runinng a Docker Daemon
 * Otherwise, `Is the docker daemon running on this host?`
* Build image from a Docker file. (Or using an existent image in the docker hub)
 * `docker build -t <image name> .` //Use default docker file in current directory
* Run a docker container. NOTE: when running a image, docker will try to use the image in the **local** first
 * `docker run <image name>`

### info
* `docker images` get images list

### CRUD
* `docker rm`: remove docker container, `docker rm -i`: remove docker image