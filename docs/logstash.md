# Logstash

### Getting Started 
* list plugins
 * `./bin/plugins list`
* install plugins
 * `bin/plugin install <plugin names>`

### Plugin
* [logstash-to-elasticsearch](https://github.com/logstash-plugins/logstash-output-elasticsearch)


### Fundamental Out
```
output {
  stdout {}
}
```

### Problem
* **unknown setting** protocol for elasticsearch