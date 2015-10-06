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
    if (this.minStartTime == undefined || startTime < minStartTime) {
        this.minStartTime = startTime
    }
    if (this.maxEndtime == undefined || endTime > maxEndtime) {
        this.minStartTime = startTime
    }
    return job;
};

MissionMeta.prototype.getResult = function () {
    this.totalJobs = this.jobs.length;
    this.totalDuration = (this.maxEndtime - this.minStartTime);
    this.averageLatencyInMs = this.totalTimes / this.totalJobs;
}
module.exports = MissionMeta;
