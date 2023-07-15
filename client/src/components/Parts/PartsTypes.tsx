import React, {useContext} from 'react';
import '../../css/Parts/PartsTypes.css'
import {Context} from "../../index";

interface PartsTypesProps {
    onItemsChange: (newItem: any) => void;
    onItemsNameChange: (itemName: string) => void;
}


const PartsTypes = ({ onItemsChange, onItemsNameChange }: PartsTypesProps) => {
    const {cpuStore} = useContext(Context);
    const {motherboardStore} = useContext(Context);
    const {ramStore} = useContext(Context);
    const {videoCardStore} = useContext(Context);
    const selectCpu = () => {
        cpuStore
            .getCpus()
            .then((res) => {
                if (res && res.data) {
                    onItemsChange(res.data);
                    onItemsNameChange("cpu")
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const selectMotherboard = () => {
        motherboardStore
            .getMotherboards()
            .then((res) => {
                if (res && res.data) {
                    onItemsChange(res.data);
                    onItemsNameChange("motherboard")
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const selectRam = () => {
        ramStore
            .getRams()
            .then((res) => {
                if (res && res.data) {
                    onItemsChange(res.data);
                    onItemsNameChange("ram")
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    const selectVideoCard = () => {
        videoCardStore
            .getVideoCards()
            .then((res) => {
                if (res && res.data) {
                    onItemsChange(res.data);
                    onItemsNameChange("videoCard")
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className={"part-type"}>
            <div className={"part-type-container"}>
                <a onClick={selectCpu}>Процесори</a>
                <a>Кулери</a>
                <a onClick={selectMotherboard}>Материнські плати</a>
                <a onClick={selectVideoCard}>Відеокарти</a>
                <a onClick={selectRam}>Оперативна пам`ять</a>
                <a>SSD накопичувачи</a>
                <a>Жорсткі диски</a>
                <a>Блоки живлення</a>
                <a>Вентилятори</a>
                <a>Корпуси</a>
            </div>
        </div>
    );
};

export default PartsTypes;