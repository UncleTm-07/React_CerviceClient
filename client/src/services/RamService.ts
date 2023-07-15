import axios from 'axios';
import {IRam} from "../models/IRam";

export default class RamService {
    static async getRams() {
        return axios.get('http://localhost:4020/api/v1/ram/', {withCredentials:true})
    }

    static async deleteRam(id: Number) {
        return axios.delete(`http://localhost:4020/api/v1/ram/${id}`, {withCredentials:true})
    }

    static async createRams(ram: IRam, file: File) {
        const formData = new FormData();
        formData.append('name', ram.name);
        formData.append('brand', ram.brand);
        formData.append('memory_capacity', ram.memory_capacity.toString());
        formData.append('clock_frequency', ram.clock_frequency.toString());
        formData.append('count', ram.count.toString());
        formData.append('type_of_ram', ram.type_of_ram);
        formData.append('timing_scheme', ram.timing_scheme);
        formData.append('color', ram.color);
        formData.append('illumination', ram.illumination);
        formData.append('price', ram.price.toString());

        formData.append('img', file);
        return axios.post('http://localhost:4020/api/v1/ram/', formData, {withCredentials: true});
    }
}