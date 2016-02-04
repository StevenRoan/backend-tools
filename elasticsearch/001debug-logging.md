# Debug and Logging

* Change logging level of elasticsearch
 * `curl -H "Content-Type: application/json" -X PUT -d '{"transient":{"logger.discovery":"DEBUG"}}' http://localhost:9200/_cluster/settings`

* Elasticsearch needs consistent data format among different documents in one filed. [red](http://stackoverflow.com/questions/15583032/nested-documents-in-elasticsearch)