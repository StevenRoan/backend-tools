# Logstash

### Getting Started
* launch the service
 * `./bin/logstash -f <path to config file>`
* list plugins
 * `./bin/plugins list`
* install plugins
 * `bin/plugin install <plugin names>`
 *`/bin/plugin update <plugin names>`

### Plugin
* [logstash-to-elasticsearch](https://github.com/logstash-plugins/logstash-output-elasticsearch)

### Filter
* grok
 * Use reqular expression to map the string to logstash fields
* json
 * transform json inpu to logstash fields

### Fundamental Out
```
output {
  stdout {}
}
```

### Problem
* **unknown setting** protocol for elasticsearch