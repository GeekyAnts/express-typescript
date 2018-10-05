"use strict";
/**
 * Job registry class
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    constructor() {
        //
    }
    dispatch(_class, ..._args) {
        let job = [];
        job['class'] = _class;
        job['args'] = _args;
    }
    handle() {
        //
    }
    init(_jobName = 'default') {
        console.log('This process will be check every second!', _jobName);
    }
}
exports.default = new Job;
//# sourceMappingURL=index.js.map