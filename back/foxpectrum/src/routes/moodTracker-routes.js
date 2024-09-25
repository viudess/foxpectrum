"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodTrackerRoutes = void 0;
const express_1 = require("express");
const mood_tracker_controller_1 = require("../controllers/mood-tracker.controller");
class MoodTrackerRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.moodTrackerController = new mood_tracker_controller_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').post(this.moodTrackerController.save);
        // this.router.route('/:id').get(this.authController.getCourseDetails);
    }
}
exports.MoodTrackerRoutes = MoodTrackerRoutes;
exports.default = new MoodTrackerRoutes().router;
//# sourceMappingURL=moodTracker-routes.js.map