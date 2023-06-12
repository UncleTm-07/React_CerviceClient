import React from 'react';
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


const DesignerConstructorItems = () => {
    return (
        <div className={"designer-constructor-container"}>
            <div className={"designer-constructor-type"}>
                <div className={"designer-constructor-type-container"} style={{color: "#1fcf6e"}}>
                    <div><img src={cpu_svg} alt=""/></div>
                    <div>
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
                    <div>
                        Материнська плата
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={ram_svg} alt=""/></div>
                    <div>
                        Оперативна пам’ять
                    </div>
                </div>
                <div className={"designer-constructor-type-container"}>
                    <div><img src={gpu_svg} alt=""/></div>
                    <div>
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
                            <div className={"designer-constructor-items-item-price"}>0  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-selected"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                    <div className={"designer-constructor-items-item-container"}>
                        <img src={intel7} alt=""/>
                        <div>
                            <div className={"designer-constructor-items-item-name"}>Celeron 5905</div>
                            <div className={"designer-constructor-items-item-price"}>+ 1 872  грн</div>
                        </div>
                        <button className={"designer-constructor-items-item-default"}>✔</button>
                    </div>
                </div>
            </div>
            <div className={"designer-constructor-desc"}>
                <div className={"designer-constructor-desc-name"}>Ryzen 9 7800X3D</div>
                <div>Процесори Ryzen – це гарантія стабільності роботи та ваша
                    перевага над суперниками в сучасних іграх!
                </div>
                <div className={"designer-constructor-desc-text"}>
                    <div>
                        <div>
                            <div className={"designer-constructor-desc-type"}>Обсяг кеш пам'яті 3-го рівня:</div>
                            <div>96Mb</div>
                        </div>
                        <div>
                            <div className={"designer-constructor-desc-type"}>Тактова частота ядра:</div>
                            <div>4.2(5.0)GHz</div>
                        </div>
                        <div>
                            <div className={"designer-constructor-desc-type"}>Кількість ядер / потоків:</div>
                            <div>8/16</div>
                        </div>
                        <div>
                            <div className={"designer-constructor-desc-type"}>Інтегроване графічне ядро:</div>
                            <div>Radeon Graphics</div>
                        </div>
                    </div>
                    <div>
                        <img src={intel7} alt=""/>
                    </div>
                </div>
                <div className={"designer-constructor-desc-price"}>+ 22 588 грн</div>
            </div>
        </div>
    );
};

export default DesignerConstructorItems;