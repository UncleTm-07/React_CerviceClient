import axios from 'axios';
import {ICpu} from "../models/ICpu";

export default class CpuService {
    static async getCpus() {
        return axios.get('http://localhost:4020/api/v1/cpu/', {withCredentials:true})
    }

    static async deleteCpu(id: Number) {
        return axios.delete(`http://localhost:4020/api/v1/cpu/${id}`, {withCredentials:true})
    }

    static async createCpus(cpu: ICpu, file: File) {
        const formData = new FormData();
        formData.append('name', cpu.name);
        formData.append('brand', cpu.brand);
        formData.append('processor_family', cpu.processor_family);
        formData.append('socket', cpu.socket);
        formData.append('number_of_cores', cpu.number_of_cores.toString());
        formData.append('number_of_streams', cpu.number_of_streams.toString());
        formData.append('volume_of_3rd_level', cpu.volume_of_3rd_level.toString());
        formData.append('basic_frequency', cpu.basic_frequency.toString());
        formData.append('turbo_boost_frequency', cpu.turbo_boost_frequency.toString());
        formData.append('graphics', cpu.graphics);
        formData.append('price', cpu.price.toString());
        formData.append('img', file);
        return axios.post('http://localhost:4020/api/v1/cpu/', formData, {withCredentials: true});
    }
}