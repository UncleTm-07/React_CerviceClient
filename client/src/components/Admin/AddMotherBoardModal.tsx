import React, {ChangeEvent, FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {IMotherboard} from "../../models/IMotherboard";
import {Context} from "../../index";
import '../../css/ModalWindow.css'

interface ModalProps {
    show: boolean
    onClose: () => void
}

const AddMotherBoardModal: FC<ModalProps> = observer(({show, onClose}) => {
    const [motherboard, setMotherboard] = useState<IMotherboard>({} as IMotherboard)
    const [file, setFile] = useState<File | null>(null);
    const {motherboardStore} = useContext(Context);

    const handleSubmit = () => {
        if (file !== null) {
            motherboardStore.createMotherboard(motherboard, file).then(res => {
                alert(res);
            });
        } else {
            alert('Будь ласка, оберіть файл');
            return;
        }

    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile || null);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content-v2">
                <span className="close" onClick={onClose}>&times;</span>
                <div className={"modal-content-container"}>
                    <div>
                        <label>
                            Назву:
                            <input
                                type="text"
                                value={motherboard.name}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "name": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Виробник:
                            <input
                                type="text"
                                value={motherboard.brand}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "brand": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Роз'єм (Socket):
                            <input
                                type="text"
                                value={motherboard.socket}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "socket": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Чіпсет:
                            <input
                                type="text"
                                value={motherboard.chipset}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "chipset": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Платформа:
                            <input
                                type="text"
                                value={motherboard.platform}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "platform": event.target.value})
                                }
                            />

                        </label>
                        <label>
                            Форм-фактор:
                            <input
                                type="text"
                                value={motherboard.form_factor}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "form_factor": event.target.value})
                                }
                            />

                        </label>
                        <label>
                            Тип пам'яті:
                            <input
                                type="text"
                                value={motherboard.memory_type}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, "memory_type": event.target.value})
                                }
                            />

                        </label>
                        <label>
                            Кількість слотів:
                            <input
                                type="text"
                                value={motherboard.number_of_slots}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, number_of_slots: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Максимальний обсяг:
                            <input
                                type="text"
                                value={motherboard.maximum_volume}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, maximum_volume: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Максимальна частота:
                            <input
                                type="text"
                                value={motherboard.maximum_frequency}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, maximum_frequency: Number(event.target.value)})
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            VGA:
                            <input
                                type="text"
                                value={motherboard.vga}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, vga: Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            HDMI:
                            <input
                                type="text"
                                value={motherboard.hdmi}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, hdmi: Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            DVI:
                            <input
                                type="text"
                                value={motherboard.dvi}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, dvi: Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            DisplayPort:
                            <input
                                type="text"
                                value={motherboard.display_port}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, display_port: Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            LAN:
                            <input
                                type="text"
                                value={motherboard.lan}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, lan: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Wi-Fi:
                            <input
                                type="text"
                                value={motherboard.wifi}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, wifi: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Bluetooth:
                            <input
                                type="text"
                                value={motherboard.bluetooth}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, bluetooth: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            SATA:
                            <input
                                type="text"
                                value={motherboard.m2}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, m2: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            M.2:
                            <input
                                type="text"
                                value={motherboard.sata}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, sata: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            RAID:
                            <input
                                type="text"
                                value={motherboard.raid}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, raid: Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            Ціна:
                            <input
                                type="text"
                                value={motherboard.price}
                                onChange={(event) =>
                                    setMotherboard({...motherboard, price: Number(event.target.value)})
                                }
                            />

                        </label>
                    </div>
                </div>

                <label>
                    Зображення:
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </label>
                <button type="submit" onClick={handleSubmit}>Додати</button>
            </div>
        </div>
    );
});

export default AddMotherBoardModal;