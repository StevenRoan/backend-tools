var MissionMeta = require('../model/mission-meta');
var curExecuting = false;
var Task = require('../model/task');

function execCb(task, statusObj) {
    statusObj.counter++;
    if (statusObj.counter >= statusObj.taskNumber) {
        return task.emit("endTask");
    }
    console.log(statusObj.counter);
    task.exec();
};

function execUniformly(taskFunc, options) {
    options = options || {};
    var interval = options.interval || 0;
    var taskNumber = options.taskNumber || 1000;
    var name = options.name || "unknown";
    var missionMeta = new MissionMeta(name);
    var task = new Task(taskFunc, missionMeta);
    var statusObj = {
        interval: interval,
        taskNumber: taskNumber,
        counter: 0
    };
    setInterval(execCb, interval, task, statusObj);
};

exports.execUniformly = execUniformly;
