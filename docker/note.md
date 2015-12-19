# Docker

### Basic Flow
* Build image from a Docker file. (Or using an existent image in the docker hub)
 * `docker build -t <image name> .` //Use default docker file in current directory
* Run a docker container. NOTE: when running a image, docker will try to use the image in the **local** first
 * `docker run <image name>`

### info
* `docker images` get images list