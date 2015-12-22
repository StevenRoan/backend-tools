
var execUniformly = require('./lib/task-executer').execUniformly;
var bunyan = require('bunyan');
var util = require('util');
var logger = bunyan.createLogger({
    name: "foo-test",
    streams: [{
        path: "/var/log/logstash/logstash.log"
    }]
})
var logger2 = bunyan.createLogger({
    name: "foo2",
    streams: [{
        path: "/var/log/logstash/logstash2.log"
    }]
})
// var taskFunc = function (callback) {
//     // logger.error("test01: [first] [%s]",Date());
//     // logger2.error('test logger2');
//     var a = {
//         name2: "testjsonlog",
//         property: "json of json"
//     };
//     logger.error(a);
//     console.log(Date())
    // return callback();
// };
var counter = 0;
var montonoticIncreaseLog = function(callback) {
    var a = {
        mycount: counter,
        time: new Date(new Date().getTime() - 1800000 + counter*1000)
    }
    logger.error(a);
    console.log(a)
    counter += 100;
    return callback();
};

execUniformly(montonoticIncreaseLog, {
    taskNumber: 10,
    interval: 1000
});