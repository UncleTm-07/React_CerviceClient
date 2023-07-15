import React from 'react';
import '../../css/Parts/PartsItems.css'

const PartsItems = ({ items, selectItemName }: { items: any[], selectItemName: string}) => {
    return (
        <div className={"part-items"}>
            <div className={"part-items-count"}>
                {selectItemName === 'cpu' ?
                    <div>Процесори <span>{items.length} товарів</span></div>
                    :
                    <></>
                }
                {selectItemName === 'ram' ?
                    <div>Оперативна пам'ять <span>{items.length} товарів</span></div>
                    :
                    <></>
                }
                {selectItemName === 'motherboard' ?
                    <div>Материнські плати <span>{items.length} товарів</span></div>
                    :
                    <></>
                }
                {selectItemName === 'videoCard' ?
                    <div>Відеокарти <span>{items.length} товарів</span></div>
                    :
                    <></>
                }
            </div>
            <div className={"part-items-container"}>
                {items.map((item) => (
                    <div className={"part-item"} key={item.id}>
                        <div>
                            <img src={"http://localhost:4020/" + item.img} alt=""/>
                        </div>
                        <div className={"part-item-description"}>
                            {item.name}
                        </div>
                        <div className={"part-item-type"}>
                            {selectItemName === 'cpu' ?
                                <a href="">Процесори</a>
                                :
                                <></>
                            }
                            {selectItemName === 'motherboard' ?
                                <a href="">Материнські плати</a>
                                :
                                <></>
                            }
                            {selectItemName === 'ram' ?
                                <a href="">Оперативна пам'ять</a>
                                :
                                <></>
                            }
                            {selectItemName === 'videoCard' ?
                                <a href="">Відеокарта</a>
                                :
                                <></>
                            }
                        </div>
                        <div className={"part-item-price"}>
                            {item.price} грн
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PartsItems;