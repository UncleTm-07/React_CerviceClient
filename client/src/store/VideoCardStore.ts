import {IRam} from "../models/IRam";
import {makeAutoObservable} from "mobx";
import VideoCardService from "../services/VideoCardService";
import {IVideoCard} from "../models/IVideoCard";


export default class RamStore {
    rams = [] as IRam[];

    constructor() {
        makeAutoObservable(this);
    }

    setRams(rams: IRam[]) {
        this.rams = rams;
    }

    async deleteVideoCard(id: Number) {
        try {
            return await VideoCardService.deleteVideoCard(id);
        } catch (e) {
            alert(e);
        }
    }

    async getVideoCards() {
        try {
            return await VideoCardService.getVideoCards();
        } catch (e) {
            alert(e);
        }
    }

    async createVideoCards(videoCard: IVideoCard, file: File)  {
        try {
            const response = await VideoCardService.createVideoCards(videoCard, file);
            return `VideoCard - ${videoCard.name} була успішно створена!`
        } catch (e) {
            alert(e);
        }
    }
}