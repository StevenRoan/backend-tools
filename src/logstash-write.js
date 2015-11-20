
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
var taskFunc = function (callback) {
    // logger.error("test01: [first] [%s]",Date());
    // logger2.error('test logger2');
    var a = {
        name2: "testjsonlog",
        property: "json of json"
    };
    logger.error(a);
    console.log(Date())
};
execUniformly(taskFunc, {
    taskNumber: 100000,
    interval: 80
});