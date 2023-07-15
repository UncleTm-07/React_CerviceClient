import React, {useContext, useState} from 'react';
import '../../css/Designer/DesignerConstructor.css'
import cpu_svg from "../../img/pc_svg/icon-cpu-grey.svg"
import motherboard_svg from "../../img/pc_svg/motherboard-svgrepo-com.svg"
import gpu_svg from "../../img/pc_svg/icon-gpu-grey.svg"
import ram_svg from "../../img/pc_svg/icon-ram-grey.svg"
import ssd_svg from "../../img/pc_svg/icons8-ssd-card-64.png"
import hdd_svg from "../../img/pc_svg/icon-hdd-grey.svg"
import power_svg from "../../img/pc_svg/icons8-power-supply-96.png"
import fan_svg from "../../img/pc_svg/icons8-fan-100.png"
import fan_two_svg from "../../img/pc_svg/icons8-fan-64.png"
import case_svg from "../../img/pc_svg/icons8-computer-case-62.png"
import program_svg from "../../img/pc_svg/icons8-windows-10-150.png"
import intel7 from "../../img/intel-core-i7-10700f-2948ghz-s1200-box.png"
import cpu_default from "../../img/icon-defualt/icons8-cpu-96.png"
import {Context} from "../../index";
import {IComputer} from "../../models/IComputer";
import DesignerDescCpu from "./DesignerDescCpu";
import DesignerDescMotherboard from "./DesignerDescMotherboard";

const DesignerConstructorItems = () => {
    const [items, setItems] = useState<any[]>([]);
    const [computer, setComputer] = useState<IComputer>({} as IComputer);
    const [item, setItem] = useState<any>({});
    const [selectItemName, setSelectItemName] = useState<string>("");

    const handleItemsChange = (newItem: any) => {
        setItems(newItem);
    };
    const handleItemsNameChange = (itemName: string) => {
        setSelectItemName(itemName);
    };

    const selectItem = (itemId: number) => {
        if (selectItemName === 'cpu'){
            computer.cpuId = itemId;
        }else if (selectItemName === 'motherboard'){
            computer.motherboardId = itemId;
        }
        setComputer(computer)
        console.log(computer)
    };

    const {cpuStore} = useContext(Context);
    const {motherboardStore} = useContext(Context);
    const {ramStore} = useContext(Context);
    const {videoCardStore} = useContext(Context);
    const selectCpu = () => {
        cpuStore
            .getCpus()
            .then((res) => {
                if (res && res.data) {
                    handleItemsChange(res.data);
                    handleItemsNameChange("cpu")
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
                    handleItemsChange(res.data);
                    handleItemsNameChange("motherboard")
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
                    handleItemsChange(res.data);
                    handleItemsNameChange("ram")
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
                    handleItemsChange(res.data);
                    handleItemsNameChange("videoCard")
                } else {
                    console.error('Invalid response:', res);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className={"designer-constructor-container"}>
            <div className={"designer-constructor-type"}>
                <div className={"designer-constructor-type-container"} style={{color: "#1fcf6e"}}>
                    <div><img src={cpu_svg} alt=""/></div>
                    <div onClick={selectCpu}>
                        Процесор
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={fan_svg} alt=""/></div>
                    <div>
                        Кулер
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={motherboard_svg} alt=""/></div>
                    <div onClick={selectMotherboard}>
                        Материнська плата
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={ram_svg} alt=""/></div>
                    <div onClick={selectRam}>
                        Оперативна пам’ять
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={gpu_svg} alt=""/></div>
                    <div onClick={selectVideoCard}>
                        Відеокарта
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={ssd_svg} alt=""/></div>
                    <div>
                        Накопичувач SSD
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={hdd_svg} alt=""/></div>
                    <div>
                        Накопичувач HDD
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={power_svg} alt=""/></div>
                    <div>
                        Блок живлення
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={fan_two_svg} alt=""/></div>
                    <div>
                        Додаткові вентилятори
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={case_svg} alt=""/></div>
                    <div>
                        Корпус
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={program_svg} alt=""/></div>
                    <div>
                        Програмне забезпечення
                    </div>
                </div>
            </div>
            <div className={"designer-constructor-items"}>
                <div className={"designer-constructor-items-brand"}>
                    <button className={"designer-constructor-items-brand-selected"}>Intel</button>
                    <button className={"designer-constructor-items-brand-default"}>AMD</button>
                </div>
                <div className={"designer-constructor-items-item"}>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={cpu_default} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Процесор не встановлено</div>
                            <div className={"designer-constructor-items-item-price"}>0 грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-selected"}>✔</button>
                    </div>
                    {items.map(item => (
                        <div className={"designer-constructor-items-item-container"} key={item.id}>
                            <img src={"http://localhost:4020/" + item.img} alt=""/>
                            <div>
                                <div onClick={() => setItem(item)}
                                     className={"designer-constructor-items-item-name"}>{item.name}</div>
                                <div className={"designer-constructor-items-item-price"}>{item.price} грн</div>
                            </div>
                            <button className={"designer-constructor-items-item-default"}>✔</button>
                        </div>
                    ))}
                </div>
            </div>
            {selectItemName === 'cpu' &&  Object.keys(item).length > 0 && item.constructor === Object ?
                <DesignerDescCpu item={item} selectItem={selectItem}/>
                :
                selectItemName === 'motherboard' &&  Object.keys(item).length > 0 && item.constructor === Object ?
                    <DesignerDescMotherboard item={item} selectItem={selectItem}/>
                    :
                    <></>

            }
        </div>
    );
};

export default DesignerConstructorItems;