# Quries

### Concept
#### Aggregate Pipeline
* $ can be special operator, or get the value of field
  *`$<field name>` the value of that field, or `$sum` as example
  * e.g. `$group:{"_id": "$title", mylength:{$sum:1}}`

Complete Example
```
db.getCollection('records').aggregate([{$match:{scope:'ok'}},{$unwind: "$mySubDoc"},{$group: {"_id":"$myId",mylength:{$sum:1}}},{$sort:{mylength:-1}}])
```





* query: about conditions in sub-documents
```
//highlights is an array
// Following three lines are equivalent
db.getCollection('records').find({$where: "this.highlights!=undefined && this.highlights.length > 0"})
db.getCollection('records').find('highlights.0':{$exists:true}})
    //db.getCollection('records').find({$nor: [{highlights: {$exists: false}}, {highlights: {$size: 0}} ]})
}
```

* query: about computing matrics of sub-documents
 * [get total subdocuments length](http://stackoverflow.com/questions/14668757/get-total-of-sub-documents-in-a-collection)
 * [get total subdocuments length2](http://stackoverflow.com/questions/25713473/mongodb-count-sub-document-and-list-totals)
```

```
