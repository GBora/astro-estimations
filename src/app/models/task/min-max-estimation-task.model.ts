import EstimationTask from './estimation-task.model';
import MinMaxSubTask from '../sub-tasks/min-max-subtask.model';

class MinMaxEstimationTask extends EstimationTask {
    min_hours: number;
    max_hours: number;
    subtasks: Array<MinMaxSubTask>;
}

export default MinMaxEstimationTask;