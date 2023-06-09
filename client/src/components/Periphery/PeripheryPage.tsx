import React from 'react';
import '../../css/Periphery/PeripheryPage.css'
import PeripheryTypes from "./PeripheryTypes";
import PeripheryItems from "./PeripheryItems";

const PeripheryPage = () => {
    return (
        <div className={"periphery-page"}>
            <PeripheryTypes/>
            <PeripheryItems/>
        </div>
    );
};

export default PeripheryPage;