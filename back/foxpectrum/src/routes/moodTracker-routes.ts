import { Router } from 'express';
import MoodTrackerController from '../controllers/mood-tracker.controller';


export class MoodTrackerRoutes {
  router = Router();
  moodTrackerController = new MoodTrackerController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.route('/').post(this.moodTrackerController.save);
    // this.router.route('/:id').get(this.authController.getCourseDetails);
  }
}
export default new MoodTrackerRoutes().router;