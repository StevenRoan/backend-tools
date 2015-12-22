/**
 * Mission Meta record the peformance attributes for benchmarking
 */
function MissionMeta(missionName) {
    this.name = missionName || "unknown";
    this.jobs = [];
    this.minStartTime = undefined;
    this.maxEndtime = undefined;
};
MissionMeta.prototype.pushTask = function (startTime, endTime, options) {
    if (!(startTime instanceof Date && endTime instanceof Date)) {
        throw Error("startTime and endTime are mandatory");
    }
    var job = {
        startTime: startTime,
        endTime: endTime
    };
    if (options.data) {
        job.data = options.data;
    }
    this.jobs.push(job);
    if (this.minStartTime == undefined || startTime < this.minStartTime) {
        this.minStartTime = startTime
    }
    if (this.maxEndtime == undefined || endTime > this.maxEndtime) {
        this.maxEndtime = endTime;
    }
    return job;
};

MissionMeta.prototype.getResult = function () {
    this.totalJobs = this.jobs.length;
    this.totalDuration = (this.maxEndtime.getTime() - this.minStartTime.getTime());
    this.averageLatencyInMs = this.totalDuration / this.totalJobs;
    return {
        totalJobs:this.totalJobs,
        totalDuration: this.totalDuration,
        averageLatencyInMs: this.averageLatencyInMs
    };
}
module.exports = MissionMeta;
