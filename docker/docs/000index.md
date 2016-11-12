# Docker
- [docker run](docker-run.md)

## Docker document map
* [docker bridge network](https://docs.docker.com/engine/userguide/networking/default_network/dockerlinks/), (--link)


## Basic Flow
### 1. Start Container
- OSX Only Steps
  - Runinng a Docker Daemon, Otherwise, `Is the docker daemon running on this host?`
    - Create a VM (boot2docker, docker-machine) (`default machine with IP 192.168.99.100`)
    - Put `eval "$(docker-machine env default)"` in .bas_profile
      - Use docker quick start terminal in OSX

- Linux Only Step
  - Add user to group `docker`. [ref](http://stackoverflow.com/questions/33562109/docker-command-cant-connect-to-docker-daemon)

### 2. Build Images
- Build image from a Docker file. (Or using an existent image in the docker hub)
  - `docker build -t <image name> .` //Use default docker file in current directory

### 3. Run Container
- Run a docker container. NOTE: when running a image, docker will try to use the image in the **local** first
  - `docker run <image name> <cmd>`, e.g.: `docker run <image> /bin/bash
    - e.g.: `docker run -it -v `pwd`:/root <image name> /bin/bash`
    - `docker run <image name> -e <env_variable>=xxx -d <container name>`
    - Check if the image is in local
    - Clone from remote if it is not in local

### 4. SSH/Attach to a contanier
- `docker exec -it <CONTAINER> <CMD>`
 _ `docker exec -it <CONTAINER> /bin/bash` = ssh
- `docker attach <CONTAINER>`: docker attach 對與 detach mode (stdin/stdout 掛上去)

## Other Operation Summary
### In Docker command
- Exit
  - Ctrl+D  = `exit`
  - Ctrl+P then Ctrl+Q -> 不會導致 container 中止 (more like detach)

### Info
- `docker images`: get images list
- `docker ps -a`: get  containers list (-a includes not running container)
- `docker info`:

### CRUD
- Delete
  - `docker rm <container ID>`: remove docker container, `docker rm -i`: remove docker image
   * `-f`: if the container is running
  - `docker rmi <imageID>`: remove docker container, `docker rm -i`: remove docker image

- Build our own images by Dockerfile
  - `docker build -t <image name> <path of Dockerfile>`

- Commit image
  - `docker commit <container_id> <customized_image_name_you_want>`

### Docker Hub
- `docker login --username=<name> --email=<email>`
  - WARNING: login credentials saved in /Users/<user>/.docker/config.json

- `docker tag <imageID> <username>/<imagename>:<version, e.g.:`latest`>`
  - `docker tag 7d9495d03763 maryatdocker/docker-whale:latest`
  - TODO:Autocomplete?

## Questions
- in the container, why the `df -h` get a lot of space