# Broken Indices
* In version `1.6.0`, elasticsearch cannot recover from broken indices.
 * Error Message
     ```
    elasctic search recieved shard failed
     ```
 *Solution
     * Related issue [#8708](https://github.com/elastic/elasticsearch/issues/8708). They claim that elasticsearch fix this problem.
     * Just remove the bad indices.
     * Use lucene tool mentioned in this [article](http://www.jillesvangurp.com/2015/02/18/elasticsearch-failed-shard-recovery/)