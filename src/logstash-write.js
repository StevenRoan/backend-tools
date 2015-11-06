
var execUniformly = require('./lib/task-executer').execUniformly;
var bunyan = require('bunyan');
var logger = bunyan.createLogger({
    name: "foo",
    streams: [{
        path: "/var/log/logstash/logstash.log"
    }]
})
var taskFunc = function (callback) {
    logger.info("test");
    logger.error("test2 [first] [{'123', '34'}]");
    setTimeout(callback, 0);
};
execUniformly(taskFunc, {
    taskNumber: 100000
});