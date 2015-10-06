# Elastic Search

### Getting Started 
* `bash ./bin/elasticsearch` for basic service start-up, it will occupy *9200, 9300* ports.

### Fundamental API
* find all
 * `http://localhost:9200/<index name>`/_search?pretty=true&q=*`
* find all indexs
 * `http://localhost:9200/_cat/indices?v`
* get settings
 * `localhost:9200/_nodes/settings?pretty=true`