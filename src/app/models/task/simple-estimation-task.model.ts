import EstimationTask from './estimation-task.model';
import SimpleSubTask from '../sub-tasks/simple-sub-task';


class SimpleEstimationTask extends EstimationTask {
    total_hours: number;
    subtasks: Array<SimpleSubTask>;
}

export default SimpleEstimationTask;
