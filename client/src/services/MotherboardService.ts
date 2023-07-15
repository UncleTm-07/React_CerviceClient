import axios from 'axios';
import {IMotherboard} from "../models/IMotherboard";

export default class MotherboardService {
    static async getMotherboards() {
        return axios.get('http://localhost:4020/api/v1/motherboard/', {withCredentials:true})
    }

    static async deleteMotherboard(id: Number) {
        return axios.delete(`http://localhost:4020/api/v1/motherboard/${id}`, {withCredentials:true})
    }

    static async createMotherboards(motherboard: IMotherboard, file: File) {
        const formData = new FormData();
        formData.append('name', motherboard.name);
        formData.append('brand', motherboard.brand);
        formData.append('socket', motherboard.socket);
        formData.append('chipset', motherboard.chipset);
        formData.append('platform', motherboard.platform);
        formData.append('form_factor', motherboard.form_factor);
        formData.append('memory_type', motherboard.memory_type);
        formData.append('number_of_slots', motherboard.number_of_slots.toString());
        formData.append('maximum_volume', motherboard.maximum_volume.toString());
        formData.append('maximum_frequency', motherboard.maximum_frequency.toString());
        formData.append('vga', motherboard.vga.toString());
        formData.append('hdmi', motherboard.hdmi.toString());
        formData.append('dvi', motherboard.dvi.toString());
        formData.append('display_port', motherboard.display_port.toString());
        formData.append('lan', motherboard.lan.toString());
        formData.append('wifi', motherboard.wifi.toString());
        formData.append('bluetooth', motherboard.bluetooth.toString());
        formData.append('m2', motherboard.m2.toString());
        formData.append('sata', motherboard.sata.toString());
        formData.append('raid', motherboard.raid.toString());
        formData.append('price', motherboard.price.toString());
        formData.append('img', file);
        return axios.post('http://localhost:4020/api/v1/motherboard/', formData, {withCredentials: true});
    }
}