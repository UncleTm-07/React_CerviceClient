import {IRam} from "../models/IRam";
import {makeAutoObservable} from "mobx";
import RamService from "../services/RamService";


export default class RamStore {
    rams = [] as IRam[];

    constructor() {
        makeAutoObservable(this);
    }

    setRams(rams: IRam[]) {
        this.rams = rams;
    }

    async deleteRam(id: Number) {
        try {
            return await RamService.deleteRam(id);
        } catch (e) {
            alert(e);
        }
    }

    async getRams() {
        try {
            return await RamService.getRams();
        } catch (e) {
            alert(e);
        }
    }

    async createRams(ram: IRam, file: File)  {
        try {
            const response = await RamService.createRams(ram, file);
            return `RAM - ${ram.name} була успішно створена!`
        } catch (e) {
            alert(e);
        }
    }
}