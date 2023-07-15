import axios from 'axios';
import {IVideoCard} from "../models/IVideoCard";

export default class VideoCardService {
    static async getVideoCards() {
        return axios.get('http://localhost:4020/api/v1/videocard/', {withCredentials:true})
    }

    static async deleteVideoCard(id: Number) {
        return axios.delete(`http://localhost:4020/api/v1/videocard/${id}`, {withCredentials:true})
    }

    static async createVideoCards(videoCard: IVideoCard, file: File) {
        const formData = new FormData();
        formData.append('name', videoCard.name);
        formData.append('brand', videoCard.brand);
        formData.append('model', videoCard.model);
        formData.append('memory_volume', videoCard.memory_volume.toString());
        formData.append('tire_capacity', videoCard.tire_capacity.toString());
        formData.append('memory_type', videoCard.memory_type.toString());
        formData.append('power_consumption', videoCard.power_consumption.toString());
        formData.append('memory_frequency', videoCard.memory_frequency.toString());
        formData.append('vga', videoCard.vga.toString());
        formData.append('hdmi', videoCard.hdmi.toString());
        formData.append('dvi', videoCard.dvi.toString());
        formData.append('display_port', videoCard.display_port.toString());
        formData.append('video_card_length', videoCard.video_card_length.toString());
        formData.append('price', videoCard.price.toString());

        formData.append('img', file);
        return axios.post('http://localhost:4020/api/v1/videocard/', formData, {withCredentials: true});
    }
}