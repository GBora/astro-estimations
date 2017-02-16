import EstimationTask from './estimation-task.model';
import MinMaxSubTask from '../sub-tasks/min-max-subtask.model';

class MinMaxEstimationTask extends EstimationTask {
    min_hours: number;
    max_hours: number;
    subtasks: Array<MinMaxSubTask>;
    potttential_subtasks: Array<MinMaxSubTask>;
    pottential_min: number;
    pottential_max: number;
    questions: Array<string>;
}

export default MinMaxEstimationTask;