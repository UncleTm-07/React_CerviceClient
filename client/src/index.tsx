import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CpuStore from "./store/CpuStore";
import RamStore from "./store/RamStore";
import MotherboardStore from "./store/MotherboardStore";
import VideoCardStore from "./store/VideoCardStore";

interface State {
    cpuStore: CpuStore,
    ramStore: RamStore,
    motherboardStore: MotherboardStore,
    videoCardStore: VideoCardStore,
}

export const _cpuStore = new CpuStore();
export const _ramStore = new RamStore();
export const _motherboardStore = new MotherboardStore();
export const _videoCardStore = new VideoCardStore();

export const Context = createContext<State>({
    cpuStore: _cpuStore,
    ramStore: _ramStore,
    motherboardStore: _motherboardStore,
    videoCardStore: _videoCardStore,
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            cpuStore: _cpuStore,
            ramStore: _ramStore,
            motherboardStore: _motherboardStore,
            videoCardStore: _videoCardStore,
        }}>
            <BrowserRouter>
                <NavBar/>
                <App/>
                <Footer/>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);

