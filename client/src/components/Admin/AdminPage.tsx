import React, {useContext, useState} from 'react';
import AddCpuModal from "./AddCpuModal";
import '../../css/AdminPage/AdminPage.css'
import {ICpu} from "../../models/ICpu";
import {Context} from "../../index";
import AddRamModal from "./AddRamModal";
import {IRam} from "../../models/IRam";
import AddMotherBoardModal from "./AddMotherBoardModal";
import {IMotherboard} from "../../models/IMotherboard";
import AddVideoCardModal from "./AddVideoCardModal";

const AdminPage = () => {
    const [addVisibleCpu, setAddVisibleCpu] = useState<boolean>(false);
    const [addVisibleRam, setAddVisibleRam] = useState<boolean>(false);
    const [addVisibleMotherBoard, setAddVisibleMotherBoard] = useState<boolean>(false);
    const [addVisibleVideoCard, setAddVisibleVideoCard] = useState<boolean>(false);

    const {cpuStore} = useContext(Context);
    const {ramStore} = useContext(Context);
    const {motherboardStore} = useContext(Context);
    const {videoCardStore} = useContext(Context);

    const [items, setItems] = useState<any[]>([]);

    const [selectedItem, setSelectedItem] = useState<string>(""); // Track the selected item

    const selectCpu = () => {
        cpuStore.getCpus()
            .then(res => {
                if (res && res.data) {
                    setItems(res.data);
                    setSelectedItem("cpu");
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    };

    const deleteCpu = (id: Number) => {
        cpuStore.deleteCpu(id)
            .then(res => {
                if (res && res.data) {
                    alert("Об'єкт було видалено!")
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }

    const selectRam = () => {
        ramStore.getRams()
            .then(res => {
                if (res && res.data) {
                    setItems(res.data);
                    setSelectedItem("ram");
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }
    const deleteRam = (id: Number) => {
        ramStore.deleteRam(id)
            .then(res => {
                if (res && res.data) {
                    alert("Об'єкт було видалено!")
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }
    const selectMotherboard = () => {
        motherboardStore.getMotherboards()
            .then(res => {
                if (res && res.data) {
                    setItems(res.data);
                    setSelectedItem("motherboard");
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    };

    const deleteMotherboard = (id: Number) => {
        motherboardStore.deleteMotherboard(id)
            .then(res => {
                if (res && res.data) {
                    alert("Об'єкт було видалено!")
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }
    const selectVideoCard = () => {
        videoCardStore.getVideoCards()
            .then(res => {
                if (res && res.data) {
                    setItems(res.data);
                    setSelectedItem("videoCard");
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }
    const deleteVideoCard = (id: Number) => {
        videoCardStore.deleteVideoCard(id)
            .then(res => {
                if (res && res.data) {
                    alert("Об'єкт було видалено!")
                } else {
                    // Handle the case when `res` or `res.data` is undefined
                    console.error('Invalid response:', res);
                }
            })
            .catch(error => {
                // Handle the error if the promise is rejected
                console.error('Error:', error);
            });
    }
    const selectHdd = () => {

    }


    return (
        <div className={"admin-page"}>
            {/*<h1>Admin Panel</h1>*/}
            <div className={"admin-page-container"}>
                <div className={"admin-page-type-container"}>
                    <div onClick={selectCpu}>Процесори</div>
                    <div onClick={selectRam}>Кулери</div>
                    <div onClick={selectMotherboard}>Материнські плати</div>
                    <div onClick={selectVideoCard}>Відеокарти</div>
                    <div onClick={selectRam}>Оперативна пам'ять</div>
                    <div onClick={selectHdd}>SSD накопичувачи</div>
                    <div onClick={selectHdd}>Жорсткі диски</div>
                    <div onClick={selectRam}>Блоки живлення</div>
                </div>
                <div className={"admin-page-item-container"}>
                    {selectedItem === 'cpu' ?
                        items.map(c => (
                            <div className={"admin-page-item"}>
                                <div className={"admin-page-item-l1"}>
                                    <div className={"admin-page-item-l1-img"}>
                                        <img src={"http://localhost:4020/" + c.img} alt=""/>
                                    </div>
                                    <div className={"admin-page-item-l1-desc"}>
                                        <div className={"admin-page-item-l1-desc-title"}>
                                            {c.name}
                                        </div>
                                        <div className={"admin-page-item-l1-desc-container"}>
                                            <div>
                                                <div>Виробник: {c.brand}</div>
                                                <div>Роз'єм (Socket): {c.socket}</div>
                                                <div>Кількість потоків: {c.number_of_streams}</div>
                                                <div>Частота в режимі TurboBoost: {c.turbo_boost_frequency}</div>
                                                <div>Графічний процесор: {c.graphics}</div>
                                            </div>
                                            <div>
                                                <div>Сімейство процесорів: {c.processor_family}</div>
                                                <div>Кількість ядер: {c.number_of_cores}</div>
                                                <div>Базова тактова частота: {c.basic_frequency}</div>
                                                <div>Обсяг кеш пам'яті 3-го рівня: {c.volume_of_3rd_level} Мб</div>
                                                <div>Ціна: {c.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"admin-page-item-l2"}>
                                    <button>Редагувати</button>
                                    <button onClick={() => {
                                        if (window.confirm('Ви впевнені, що хочете видалити цей об\'єкт?')) {
                                            deleteCpu(c.id);
                                        }
                                    }}>Видалити
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <></>
                    }
                    {selectedItem === 'ram' ?
                        items.map(r => (
                            <div className={"admin-page-item"}>
                                <div className={"admin-page-item-l1"}>
                                    <div className={"admin-page-item-l1-img"}>
                                        <img src={"http://localhost:4020/" + r.img} alt=""/>
                                    </div>
                                    <div className={"admin-page-item-l1-desc"}>
                                        <div className={"admin-page-item-l1-desc-title"}>
                                            {r.name}
                                        </div>
                                        <div className={"admin-page-item-l1-desc-container"}>
                                            <div>
                                                <div>Виробник: {r.brand}</div>
                                                <div>Об'єм пам'яті: {r.memory_capacity} Гб</div>
                                                <div>Тактова частота: {r.clock_frequency}</div>
                                                <div>Кількість планок у комплекті: {r.count} шт</div>
                                            </div>
                                            <div>
                                                <div>Тип пам’яті: {r.type_of_ram}</div>
                                                <div>Схема таймінгів: {r.timing_scheme}</div>
                                                <div>Колір: {r.color}</div>
                                                <div>Підсвічування: {r.illumination}</div>
                                                <div>Ціна: {r.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"admin-page-item-l2"}>
                                    <button>Редагувати</button>
                                    <button onClick={() => {
                                        if (window.confirm('Ви впевнені, що хочете видалити цей об\'єкт?')) {
                                            deleteRam(r.id);
                                        }
                                    }}>Видалити
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <></>
                    }
                    {selectedItem === 'motherboard' ?
                        items.map(m => (
                            <div className={"admin-page-item"}>
                                <div className={"admin-page-item-l1"}>
                                    <div className={"admin-page-item-l1-img"}>
                                        <img src={"http://localhost:4020/" + m.img} alt=""/>
                                    </div>
                                    <div className={"admin-page-item-l1-desc"}>
                                        <div className={"admin-page-item-l1-desc-title"}>
                                            {m.name}
                                        </div>
                                        <div className={"admin-page-item-l1-desc-container"}>
                                            <div>
                                                <div>Виробник: {m.brand}</div>
                                                <div>Роз'єм (Socket): {m.socket}</div>
                                                <div>Чіпсет: {m.chipset}</div>
                                                <div>Платформа: {m.platform}</div>
                                                <div>Форм-фактор: {m.form_factor}</div>
                                                <div>Тип пам'яті: {m.memory_type}</div>
                                                <div>Кількість слотів: {m.number_of_slots} шт</div>
                                                <div>Максимальна частота: {m.maximum_volume}</div>
                                                <div>Максимальний обсяг: {m.maximum_frequency}</div>

                                            </div>
                                            <div>
                                                <div>VGA: {m.vga}</div>
                                                <div>HDMI: {m.hdmi}</div>
                                                <div>DVI: {m.dvi}</div>
                                                <div>DisplayPort: {m.display_port}</div>
                                                <div>LAN: {m.lan}</div>
                                                <div>Wi-Fi: {m.wifi}</div>
                                                <div>Bluetooth: {m.bluetooth}</div>
                                                <div>M.2: {m.m2}</div>
                                                <div>SATA: {m.sata}</div>
                                                <div>RAID: {m.raid}</div>
                                                <div>Ціна: {m.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"admin-page-item-l2"}>
                                    <button>Редагувати</button>
                                    <button onClick={() => {
                                        if (window.confirm('Ви впевнені, що хочете видалити цей об\'єкт?')) {
                                            deleteMotherboard(m.id);
                                        }
                                    }}>Видалити
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <></>
                    }
                    {selectedItem === 'videoCard' ?
                        items.map(v => (
                            <div className={"admin-page-item"}>
                                <div className={"admin-page-item-l1"}>
                                    <div className={"admin-page-item-l1-img"}>
                                        <img src={"http://localhost:4020/" + v.img} alt=""/>
                                    </div>
                                    <div className={"admin-page-item-l1-desc"}>
                                        <div className={"admin-page-item-l1-desc-title"}>
                                            {v.name}
                                        </div>
                                        <div className={"admin-page-item-l1-desc-container"}>
                                            <div>
                                                <div>Виробник: {v.brand}</div>
                                                <div>Об'єм пам'яті: {v.memory_volume} Гб</div>
                                                <div>Розрядність шини: {v.tire_capacity} біт</div>
                                                <div>Модель GPU: {v.model}</div>
                                                <div>Тип пам’ят: {v.memory_type}</div>
                                                <div>Споживана потужність: {v.power_consumption} Вт</div>
                                                <div>Частота пам'яті: {v.memory_frequency}</div>
                                            </div>
                                            <div>
                                                <div>VGA: {v.vga}</div>
                                                <div>HDMI: {v.hdmi}</div>
                                                <div>DVI: {v.dvi}</div>
                                                <div>DisplayPort: {v.display_port}</div>
                                                <div>Довжина відеокарти: {v.video_card_length} мм</div>
                                                <div>Ціна: {v.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"admin-page-item-l2"}>
                                    <button>Редагувати</button>
                                    <button onClick={() => {
                                        if (window.confirm('Ви впевнені, що хочете видалити цей об\'єкт?')) {
                                            deleteVideoCard(v.id);
                                        }
                                    }}>Видалити
                                    </button>
                                </div>
                            </div>
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
            <div>
                {selectedItem === 'cpu' ?
                    <div>
                        <center>
                            <div className={"admin-panel-cpu"}>Додати CPU - <a
                                onClick={() => setAddVisibleCpu(true)} className='btn'>Додати</a></div>
                        </center>
                        <AddCpuModal show={addVisibleCpu} onClose={() => setAddVisibleCpu(false)}/>
                    </div>
                    :
                    <div></div>
                }
                {selectedItem === 'ram' ?
                    <div>
                        <center>
                            <div className={"admin-panel-cpu"}>Додати RAM - <a
                                onClick={() => setAddVisibleRam(true)}
                                className='btn'>Додати</a></div>
                        </center>
                        <AddRamModal show={addVisibleRam} onClose={() => setAddVisibleRam(false)}/>
                    </div>
                    :
                    <div></div>
                }
                {selectedItem === 'motherboard' ?
                    <div>
                        <center>
                            <div className={"admin-panel-cpu"}>Додати MOTHERBOARD - <a
                                onClick={() => setAddVisibleMotherBoard(true)} className='btn'>Додати</a></div>
                        </center>
                        <AddMotherBoardModal show={addVisibleMotherBoard}
                                             onClose={() => setAddVisibleMotherBoard(false)}/>
                    </div>
                    :
                    <div></div>
                }
                {selectedItem === 'videoCard' ?
                    <div>
                        <center>
                            <div className={"admin-panel-cpu"}>Додати VIDEOCARD - <a
                                onClick={() => setAddVisibleVideoCard(true)} className='btn'>Додати</a></div>
                        </center>
                        <AddVideoCardModal show={addVisibleVideoCard}
                                             onClose={() => setAddVisibleVideoCard(false)}/>
                    </div>
                    :
                    <div></div>
                }
            </div>
        </div>
    );
};

export default AdminPage;