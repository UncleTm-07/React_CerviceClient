import React, {ChangeEvent, FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {ICpu} from "../../models/ICpu";
import {Context} from "../../index";
import '../../css/ModalWindow.css'

interface ModalProps {
    show: boolean
    onClose: () => void
}

const AddCpuModal: FC<ModalProps> = observer(({show, onClose}) => {
    const [cpu, setCpu] = useState<ICpu>({} as ICpu)
    const [file, setFile] = useState<File | null>(null);
    const {cpuStore} = useContext(Context);

    const handleSubmit = () => {
        if (file !== null) {
            cpuStore.createCpu(cpu, file).then(res => {
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
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <label>
                    Назву:
                    <input
                        type="text"
                        value={cpu.name}
                        onChange={(event) =>
                            setCpu({...cpu, "name": event.target.value})
                        }
                    />
                </label>
                <label>
                    Виробник:
                    <input
                        type="text"
                        value={cpu.brand}
                        onChange={(event) =>
                            setCpu({...cpu, "brand": event.target.value})
                        }
                    />
                </label>
                <label>
                    Сімейство процесорів:
                    <input
                        type="text"
                        value={cpu.processor_family}
                        onChange={(event) =>
                            setCpu({...cpu, "processor_family": event.target.value})
                        }
                    />
                </label>
                <label>
                    Сокет:
                    <input
                        type="text"
                        value={cpu.socket}
                        onChange={(event) =>
                            setCpu({...cpu, "socket": event.target.value})
                        }
                    />
                </label>
                <label>
                    Кількість ядер:
                    <input
                        type="text"
                        value={cpu.number_of_cores}
                        onChange={(event) =>
                            setCpu({...cpu, number_of_cores: Number(event.target.value)})
                        }
                    />
                </label>
                <label>
                    Кількість потоків:
                    <input
                        type="text"
                        value={cpu.number_of_streams}
                        onChange={(event) =>
                            setCpu({...cpu, number_of_streams: Number(event.target.value)})
                        }
                    />

                </label>
                <label>
                    Об'єм кешу 3 рівня:
                    <input
                        type="text"
                        value={cpu.volume_of_3rd_level}
                        onChange={(event) =>
                            setCpu({...cpu, volume_of_3rd_level: Number(event.target.value)})
                        }
                    />

                </label>
                <label>
                    Базова частота:
                    <input
                        type="number"
                        value={cpu.basic_frequency}
                        onChange={(event) =>
                            setCpu({...cpu, basic_frequency: parseFloat(event.target.value)})
                        }
                    />

                </label>
                <label>
                    Частота в турбобусті:
                    <input
                        type="number"
                        value={cpu.turbo_boost_frequency}
                        onChange={(event) =>
                            setCpu({...cpu, turbo_boost_frequency: parseFloat(event.target.value)})
                        }
                    />

                </label>
                <label>
                    Графічний процесор:
                    <input
                        type="text"
                        value={cpu.graphics}
                        onChange={(event) =>
                            setCpu({...cpu, "graphics": event.target.value})
                        }
                    />

                </label>
                <label>
                    Ціна:
                    <input
                        type="text"
                        value={cpu.price}
                        onChange={(event) =>
                            setCpu({...cpu, price: Number(event.target.value)})
                        }
                    />

                </label>
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

export default AddCpuModal;