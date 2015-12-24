# Logstash

### Getting Started
* launch the service
 * `./bin/logstash -f <path to config file>`
* list plugins
 * `./bin/plugins list`
* install plugins
 *`./bin/plugin install <plugin names>`
 *`./bin/plugin update <plugin names>`

### Plugin
* [logstash-to-elasticsearch](https://github.com/logstash-plugins/logstash-output-elasticsearch)

### Filter
* grok
 * Use reqular expression to map the string to logstash fields
* json
 * transform json inpu to logstash fields

 ### Basic Syntax
 * %{[onevariable]}
  * [..]: get the value of a variable. Can be preserved word, or data in the previous stage
  * %{}:interleaving

### Fundamental Out
```
output {
  stdout {}
}
```

### resources
* [filter pattern](https://github.com/logstash-plugins/logstash-patterns-core/blob/master/patterns/mongodb)

### Problem
* **unknown setting** protocol for elasticsearch

### Document Keynote
* [Basic Data Type](https://www.elastic.co/guide/en/logstash/1.5/configuration-file-structure.html)
* [Event Dependent configuration](https://www.elastic.co/guide/en/logstash/2.0/event-dependent-configuration.html)
 * `if else`. [Using Conditional](https://www.elastic.co/guide/en/logstash/2.0/config-examples.html#using-conditionals)
 * access variable in config (Field Reference and Sprintf Format)

### Config Detail
* Time format as variable. ** The "+" before Y is important**.
```
output {
   elasticsearch {
       protocol => "http"
       host => ["127.0.0.1:9200"]
       index => "loga-%{+YYYY.MM.dd}"
   }
   stdout {codec => rubydebug}
}

```