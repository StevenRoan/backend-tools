var MissionMeta = require('../model/mission-meta');
var curExecuting = false;
var Task = require('../model/task');
var timers = {};

function execCb(task, statusObj, timerKey) {
    statusObj.counter++;
    if (statusObj.counter >= statusObj.taskNumber) {
        clearInterval(timers[timerKey])
        return task.emit("endTask");
    }
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
    var timerKey = new Date().getTime();
    timers[timerKey] = setInterval(execCb, interval, task, statusObj, timerKey);
};

exports.execUniformly = execUniformly;
