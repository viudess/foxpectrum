import { Request, Response, NextFunction } from 'express';
import { MoodTrackerRepository } from '../repositories/moodTracker-repository';
import { IMoodTracker } from '../models/moodTracker/IMoodTracker';

export default class MoodTrackerController {
  constructor() { }

  async save(req: Request, res: Response, next: NextFunction) {
    const moodTrackerRepo = new MoodTrackerRepository();

    try {
        const id = await moodTrackerRepo.save(req.body as IMoodTracker)

        return res.json({id});
      } catch (error) {
        // apiErrorHandler(error, req, res, 'Fetch All Courses failed.');
      }
  }

//   async getCourseDetails(req: Request, res: Response, next: NextFunction) {
//     try {
//       const courseDetails = await CourseRepo.getById(req.params.id);
//       if (courseDetails) {
//         return res.json(courseDetails);
//       } else {
//         res.status(404).send(`Lesson ${req.params.id} not found.`);
//       }
//     } catch (error) {
//       apiErrorHandler(error, req, res, `Course ${req.params.id} is failed.`);
//     }
//   }
}