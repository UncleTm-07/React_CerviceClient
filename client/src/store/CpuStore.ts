import {ICpu} from "../models/ICpu";
import {makeAutoObservable} from "mobx";
import CpuService from "../services/CpuService";


export default class CpuStore {
    cpus = [] as ICpu[];

    constructor() {
        makeAutoObservable(this);
    }

    setCpus(cpus: ICpu[]) {
        this.cpus = cpus;
    }

    async deleteCpu(id: Number) {
        try {
            return await CpuService.deleteCpu(id);
        } catch (e) {
            alert(e);
        }
    }

    async getCpus() {
        try {
            return await CpuService.getCpus();
        } catch (e) {
            alert(e);
        }
    }

    async createCpu(cpu: ICpu, file: File)  {
        try {
            const response = await CpuService.createCpus(cpu, file);
            return `Прицесор ${cpu.name} був успішно створений!`
        } catch (e) {
            alert(e);
        }
    }
}