# Filebeat
Filebeat is the new generation log forwarder. Both forward to logstash and elasticsearch are fine.
The lumberjack protocol is implemented.

### Getting Started
* launch the service
 * `sudo ./filebeat -e -c filebeat.yml -d "publish"`

### NOTE
* Use /etc/filebeat/filebeat.yml as example