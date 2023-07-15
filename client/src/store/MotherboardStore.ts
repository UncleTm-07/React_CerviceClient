import {IMotherboard} from "../models/IMotherboard";
import {makeAutoObservable} from "mobx";
import MotherboardService from "../services/MotherboardService";


export default class MotherboardStore {
    motherboards = [] as IMotherboard[];

    constructor() {
        makeAutoObservable(this);
    }

    setMotherboards(motherboards: IMotherboard[]) {
        this.motherboards = motherboards;
    }

    async deleteMotherboard(id: Number) {
        try {
            return await MotherboardService.deleteMotherboard(id);
        } catch (e) {
            alert(e);
        }
    }

    async getMotherboards() {
        try {
            return await MotherboardService.getMotherboards();
        } catch (e) {
            alert(e);
        }
    }

    async createMotherboard(motherboard: IMotherboard, file: File)  {
        try {
            const response = await MotherboardService.createMotherboards(motherboard, file);
            return `Материнська плата - ${motherboard.name} була успішно створена!`
        } catch (e) {
            alert(e);
        }
    }
}