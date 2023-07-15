import React from 'react';

interface DesignerDescProps {
    item: any;
    selectItem: (itemId: number) => void;
}

const DesignerDescCpu = ({ item, selectItem }: DesignerDescProps) => {
    return (
        <div className={"designer-constructor-desc"}>
            <div className={"designer-constructor-desc-name"}>{item.name}</div>
            <div className={"designer-constructor-desc-about"}>Завдяки унікальному зовнішньому вигляду та ексклюзивним геймерським функціям, дані материнські плати
                пропонують найкращі ігрові можливості, даючи геймерам те – що їм дійсно потрібно!
            </div>
            <div className={"designer-constructor-desc-text"}>
                <div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Чіпсет:</div>
                        <div>{item.chipset}Mb</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Максимальний об'єм пам'яті:</div>
                        <div>{item.maximum_volume}Gb</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Тип пам'яті:</div>
                        <div>{item.type_of_ram}</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Кількість слотів під пам'ять:</div>
                        <div>{item.number_of_slots}</div>
                    </div>
                </div>
                <div>
                    <img src={"http://localhost:4020/" + item.img} alt=""/>
                </div>
            </div>
            <div className={"designer-constructor-desc-button"}>
                <button onClick={() => {
                    selectItem(item.id)
                }
                }>Обрати
                </button>
            </div>
            <div className={"designer-constructor-desc-price"}>{item.price} грн</div>
        </div>
    );
};

export default DesignerDescCpu;