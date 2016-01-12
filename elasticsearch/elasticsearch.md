# Elastic Search

### Getting Started
* `bash ./bin/elasticsearch` for basic service start-up, it will occupy *9200, 9300* ports.

### Access
* 127.0.0.1:8000


### Network Configuration
* In elasticsearch 2.1, es only received request from localhost by default.

### Teminology
* index: like mongodb collection
 * filed: an index may contains many fields (like json keys)
  * multivalue fields: a field might contain many values (because of analyzed or .raw ...etc)
   * `.raw`: [link](https://www.elastic.co/guide/en/elasticsearch/guide/current/multi-fields.html)
* type: (external?
* Mapping: Mapping is the process of defining how a document, and the fields it contains, are stored and indexed. For instance, use mappings to define.

### Structure
```
index -----By Mapping---> Field
```

### Fundamental API
* find all
 * `http://localhost:9200/<index name>`/_search?pretty=true&q=*`
* find the **mapping** of a field
 * `http://localhost:9200/<index name>/_mapping` (.raw field is not shown, why)
* find all indexs
 * `http://localhost:9200/_cat/indices?v`
* get settings
 * `localhost:9200/_nodes/settings?pretty=true`
* get cluster status
 * `/_cluster/health?pretty`
 * `/_cluster/health?level=indices&pretty`
 * `/_cat/shards`
  * `red` is broken status

