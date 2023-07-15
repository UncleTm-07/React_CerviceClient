import React from 'react';

interface DesignerDescProps {
    item: any;
    selectItem: (itemId: number) => void;
}

const DesignerDescCpu = ({ item, selectItem }: DesignerDescProps) => {
    return (
        <div className={"designer-constructor-desc"}>
            <div className={"designer-constructor-desc-name"}>{item.name}</div>
            <div className={"designer-constructor-desc-about"}>Відчуй ефект повного занурення в ігровий процес на
                максимальних налаштуваннях графіки разом з процесорами {item.brand}
            </div>
            <div className={"designer-constructor-desc-text"}>
                <div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Обсяг кеш пам'яті 3-го рівня:</div>
                        <div>{item.volume_of_3rd_level}Mb</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Тактова частота ядра:</div>
                        <div>{item.basic_frequency}({item.turbo_boost_frequency})GHz</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Кількість ядер / потоків:</div>
                        <div>{item.number_of_cores}/{item.number_of_streams}</div>
                    </div>
                    <div>
                        <div className={"designer-constructor-desc-type"}>Інтегроване графічне ядро:</div>
                        <div>{item.graphics}</div>
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