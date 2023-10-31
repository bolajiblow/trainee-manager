import axios from 'axios';
import { ITrainee } from '../models/trainees.model';

class TraineeService {

    async getTrainees() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const trainees: ITrainee[] = response.data
        return trainees
    }
    async editTrainee(id: number | undefined, data : ITrainee | undefined) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,data)
        const trainees: any = response.data
        return trainees
    }
}
export default new TraineeService();