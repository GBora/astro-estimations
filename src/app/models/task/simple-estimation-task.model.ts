import EstimationTask from './estimation-task.model';
import SimpleSubTask from '../sub-tasks/simple-sub-task';


class SimpleEstimationTask extends EstimationTask {
    totalHours: number;
    subtasks: Array<SimpleSubTask>;
    updateHours() {
        this.totalHours = 0;
        this.subtasks.forEach((st) => {
            this.totalHours += st.hours;
        });
    }
}

export default SimpleEstimationTask;
