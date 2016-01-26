# Write in Mongodb


#### Subdocument
sub document manipulation has some limits. The main differences are:
* Update subdocument:
 * Upsert is not working
* Remove subdocument:
 * Use condition only removes all documnet. Use `$pull`
  * `$pull`: [ref](https://docs.mongodb.org/v3.0/reference/operator/update/pull/#pull-array-of-documents)