import React, {ChangeEvent, FC, useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import '../../css/ModalWindow.css'
import {IVideoCard} from "../../models/IVideoCard";

interface ModalProps {
    show: boolean
    onClose: () => void
}

const AddVideoCardModal: FC<ModalProps> = observer(({show, onClose}) => {
    const [videoCard, setVideoCard] = useState<IVideoCard>({} as IVideoCard)
    const [file, setFile] = useState<File | null>(null);
    const {videoCardStore} = useContext(Context);

    const handleSubmit = () => {
        if (file !== null) {
            videoCardStore.createVideoCards(videoCard, file).then(res => {
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
                            Назва:
                            <input
                                type="text"
                                value={videoCard.name}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, "name": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Виробник:
                            <input
                                type="text"
                                value={videoCard.brand}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, "brand": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Модель GPU:
                            <input
                                type="text"
                                value={videoCard.model}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, "model": event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Об'єм пам'яті:
                            <input
                                type="text"
                                value={videoCard.memory_volume}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, "memory_volume": Number(event.target.value)})
                                }
                            />
                        </label>
                        <label>
                            Тип пам’яті:
                            <input
                                type="text"
                                value={videoCard.memory_type}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, memory_type: event.target.value})
                                }
                            />
                        </label>
                        <label>
                            Розрядність шини:
                            <input
                                type="text"
                                value={videoCard.tire_capacity}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, tire_capacity: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Споживана потужність:
                            <input
                                type="text"
                                value={videoCard.power_consumption}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, power_consumption: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Частота пам'яті:
                            <input
                                type="text"
                                value={videoCard.memory_frequency}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, memory_frequency: Number(event.target.value)})
                                }
                            />

                        </label>
                    </div>
                    <div>
                        <label>
                            VGA:
                            <input
                                type="text"
                                value={videoCard.vga}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, vga: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            DVI:
                            <input
                                type="text"
                                value={videoCard.dvi}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, dvi: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            HDMI:
                            <input
                                type="text"
                                value={videoCard.hdmi}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, hdmi: Number(event.target.value)})
                                }
                            />

                        </label>

                        <label>
                            DisplayPort:
                            <input
                                type="text"
                                value={videoCard.display_port}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, display_port: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Довжина відеокарти:
                            <input
                                type="text"
                                value={videoCard.video_card_length}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, video_card_length: Number(event.target.value)})
                                }
                            />

                        </label>
                        <label>
                            Ціна:
                            <input
                                type="text"
                                value={videoCard.price}
                                onChange={(event) =>
                                    setVideoCard({...videoCard, price: Number(event.target.value)})
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

export default AddVideoCardModal;