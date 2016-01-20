# docker run
### Useful flags
E.g.: `docker run --rm -it -v `pwd`:/go/src/rtc-middle -p 8000:8000 browny/go-docker-dev`
* --rm: remove container when it exits
* -i: Keep STDIN open even not attaching
* -t: Allocate pseudo-TTY
* -v: bind mount a volume