import React, {useState} from 'react';
import '../../css/Parts/PartPage.css'
import PartsTypes from "./PartsTypes";
import PartsItems from "./PartsItems";

const PartsPage = () => {
    const [items, setItems] = useState<any[]>([]);
    const [selectItemName, setSelectItemName] = useState<string>("");

    const handleItemsChange = (newItem: any) => {
        setItems(newItem);
    };
    const handleItemsNameChange = (itemName: string) => {
        setSelectItemName(itemName);
    };
    return (
        <div className={"part-page"}>
            <PartsTypes onItemsChange={handleItemsChange} onItemsNameChange={handleItemsNameChange}/>
            <PartsItems items={items} selectItemName={selectItemName}/>
        </div>
    );
};

export default PartsPage;