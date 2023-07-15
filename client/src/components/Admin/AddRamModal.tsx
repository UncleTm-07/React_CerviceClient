import React, {ChangeEvent, FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import '../../css/ModalWindow.css'
import {IRam} from "../../models/IRam";

interface ModalProps {
    show: boolean
    onClose: () => void
}

const AddRamModal: FC<ModalProps> = observer(({show, onClose}) => {
    const [ram, setRam] = useState<IRam>({} as IRam)
    const [file, setFile] = useState<File | null>(null);
    const {ramStore} = useContext(Context);

    const handleSubmit = () => {
        if (file !== null) {
            ramStore.createRams(ram, file).then(res => {
                alert(res);
            });
        }else {
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
                    Назва:
                    <input
                        type="text"
                        value={ram.name}
                        onChange={(event) =>
                            setRam({...ram, "name": event.target.value})
                        }
                    />
                </label>
                <label>
                    Виробник:
                    <input
                        type="text"
                        value={ram.brand}
                        onChange={(event) =>
                            setRam({...ram, "brand": event.target.value})
                        }
                    />
                </label>
                <label>
                    Об'єм пам'яті:
                    <input
                        type="text"
                        value={ram.memory_capacity}
                        onChange={(event) =>
                            setRam({...ram, "memory_capacity":  Number(event.target.value)})
                        }
                    />
                </label>
                <label>
                    Тактова частота:
                    <input
                        type="text"
                        value={ram.clock_frequency}
                        onChange={(event) =>
                            setRam({...ram, "clock_frequency":  Number(event.target.value)})
                        }
                    />
                </label>
                <label>
                    Кількість планок:
                    <input
                        type="text"
                        value={ram.count}
                        onChange={(event) =>
                            setRam({...ram, count: Number(event.target.value)})
                        }
                    />
                </label>
                <label>
                    Тип пам’яті:
                    <input
                        type="text"
                        value={ram.type_of_ram}
                        onChange={(event) =>
                            setRam({...ram, type_of_ram: event.target.value})
                        }
                    />

                </label>
                <label>
                    Схема таймінгів:
                    <input
                        type="text"
                        value={ram.timing_scheme}
                        onChange={(event) =>
                            setRam({...ram, timing_scheme: event.target.value})
                        }
                    />

                </label>
                <label>
                    Колір:
                    <input
                        type="text"
                        value={ram.color}
                        onChange={(event) =>
                            setRam({...ram, color: event.target.value})
                        }
                    />

                </label>
                <label>
                    Підсвітка:
                    <input
                        type="text"
                        value={ram.illumination}
                        onChange={(event) =>
                            setRam({...ram, illumination: event.target.value})
                        }
                    />

                </label>
                <label>
                    Ціна:
                    <input
                        type="text"
                        value={ram.price}
                        onChange={(event) =>
                            setRam({...ram, price: Number(event.target.value)})
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

export default AddRamModal;