# docker run
### Useful flags
* [document](https://docs.docker.com/engine/reference/run/)

E.g.: `docker run --rm -it -v `pwd`:/go/src/rtc-middle -p 8000:8000 browny/go-docker-dev`
* --rm: remove container when it exits
* -i: Keep STDIN open even not attaching
* -t: Allocate pseudo-TTY
* -v: bind mount a volume <host directory>:<container directory>, e.g.: `"$PWD":/usr/src`
* -e: add environment variable
* -d: detached mode (`-d` === `-d=true`), `docker attach` can attach a detached container

* -p: map port to port, `ip:hostPort:containerPort | ip::containerPort`
* -P: Publish all exposed ports to the host interfaces
* --name: add container name

* OSX only
  * Connect to the Linux VM ip rather than `localhost`[issue](https://github.com/boot2docker/boot2docker/issues/412)
    * get vm ip by `docker-machine ip default`
