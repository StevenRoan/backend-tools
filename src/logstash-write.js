
var execUniformly = require('./lib/task-executer').execUniformly;
var bunyan = require('bunyan');
var logger = bunyan.createLogger({
    name: "foo",
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
    logger.info("test");
    logger.error("test2 [first] [{'123', '34'}]");
    logger2.error('test logger2');
};
execUniformly(taskFunc, {
    taskNumber: 100000,
    interval: 1000
});