import { connect, disconnect, model, Schema } from "mongoose";
import { IMoodTracker, moodTrackerSchema } from "../models/moodTracker/IMoodTracker";


export class MoodTrackerRepository {
    private dbname = process.env.DB_NAME ?? 'foxpectrum';

    public async save(moodTracker: IMoodTracker): Promise<any> {
        const MoodTracker = model<IMoodTracker>('MoodTracker', moodTrackerSchema);
        
        const moodTrackerData = new MoodTracker({...moodTracker});
        
        try {
            await connect(`mongodb://localhost:27017/${this.dbname}`);
            return !!(await moodTrackerData.save()).id;
        } catch (error) {
            console.log(error);
        }
    }
}