var util = require('util');
var EventEmitter = require('events');

function Task(taskFunc, missionMeta) {
    var self = this;
    if (typeof taskFunc !== "function") {
        throw new Error("undefined task");
    }
    this.taskFunc = taskFunc;
    this.missionMeta = missionMeta;
    this.on("endTask", function (){
       self.res = self.missionMeta.getResult();
       console.log(self.res);
    });
};
util.inherits(Task, EventEmitter);

Task.prototype.exec = function () {
    var self = this;
    var startTime = new Date();
    this.taskFunc(function (err, results) {
        var endTime = new Date();
        self.missionMeta.pushTask(startTime, endTime, {
            data: results
        });
    });
};

module.exports = Task;
