# Elastic Search

### Getting Started
* `bash ./bin/elasticsearch` for basic service start-up, it will occupy *9200, 9300* ports.

### Access
* 127.0.0.1:8000


### Network Configuration
* In elasticsearch 2.1, es only received request from localhost by default.

### Fundamental API
* find all
 * `http://localhost:9200/<index name>`/_search?pretty=true&q=*`
* find all indexs
 * `http://localhost:9200/_cat/indices?v`
* get settings
 * `localhost:9200/_nodes/settings?pretty=true`
* get cluster status
 * `/_cluster/health?pretty`
 * `/_cluster/health?level=indices&pretty`
 * `/_cat/shards`
  * `red` is broken status