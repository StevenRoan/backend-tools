As explained in Data In, Data Out, each document in an index has a type. Every type has its own mapping, or schema definition.

. A mapping defines the fields within a type, the datatype for each field, and how the field should be handled by Elasticsearch


When you index a document that contains a new field—one previously not seen—Elasticsearch will use dynamic mapping to try to guess the field type from the basic datatypes available in JSON, using the following rules:

logstash-msg-audit-prod-2016.01.31