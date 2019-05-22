"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    } // fix - Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFVyxRQUFBLE1BQU0sR0FBVztJQUMxQixTQUFTLEVBQUUsU0FBUztJQUNwQixtREFBbUQ7SUFDbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ2xCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsc0JBQXNCLEVBQUUsS0FBSztLQUM5QixDQUFDLHNIQUFzSDtDQUN6SCxDQUFBIn0=