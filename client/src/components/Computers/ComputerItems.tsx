import React, {useState} from 'react';
import pc from "../../img/121776469.webp";
import pc_front from "../../img/121776563.webp";
import '../../css/Computers/ComputerItems.css'
import cpu_svg from "../../img/pc_svg/icon-cpu-grey.svg"
import countOfCors_svg from "../../img/pc_svg/icon-cpu-grey.svg"
import gpu_svg from "../../img/pc_svg/icon-gpu-grey.svg"
import ram_svg from "../../img/pc_svg/icon-ram-grey.svg"
import hdd_svg from "../../img/pc_svg/icon-hdd-grey.svg"

const ComputerItems = () => {
    return (
        <div className={"computer-items"}>
            <div className={"computer-items-count"}>
                Ігрові комп'ютери 491 товар
            </div>
            <div className={"computer-items-container"}>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
                <div className={"computer-item"}>
                    <img src={pc} alt=""/>
                    <div className={"computer-item-description"}>
                        Процессор Intel Core i5 12400F 2.5GHz 18MB, Alder Lake, 65W, S1700) Box (BX8071512400F)
                    </div>
                    <div className={"computer-item-type"}>
                        <a href="">Gaming Series</a>
                    </div>
                    <div className={"computer-item-characteristics"}>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={cpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Процесор
                                </div>
                                <div>
                                    Ryzen 7 5800X3D
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={countOfCors_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Кількість ядер / потоків
                                </div>
                                <div>
                                    8/16
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={gpu_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Відеокарта
                                </div>
                                <div>
                                    RTX4080 16GB MSI VENTUS 3X OC
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Тип пам'яті
                                </div>
                                <div>
                                    DDR4
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={ram_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Оперативна пам’ять
                                </div>
                                <div>
                                    32Gb (2x16)
                                </div>
                            </div>
                        </div>
                        <div className={"computer-item-characteristics-container"}>
                            <div><img src={hdd_svg} alt=""/></div>
                            <div>
                                <div className={"computer-item-characteristics-type"}>
                                    Накопичувач
                                </div>
                                <div>
                                    SSD 2Tb
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"computer-item-price"}>
                        7 112 грн
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerItems;