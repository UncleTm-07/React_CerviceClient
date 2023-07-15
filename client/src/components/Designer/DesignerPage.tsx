import React, {useState} from 'react';
import DesignerSummary from "./DesignerSummary";
import DesignerConstructorItems from "./DesignerConstructorItems";
import '../../css/Designer/DesignerPage.css'

const DesignerPage = () => {
    return (
        <div className={"designer-page-constructor"}>
            <div className={"designer-page-constructor-name"}><h2>Створи свою мрію</h2></div>
            <DesignerConstructorItems/>
            <DesignerSummary/>
        </div>
    );
};

export default DesignerPage;