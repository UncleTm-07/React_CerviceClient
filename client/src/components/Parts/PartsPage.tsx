import React from 'react';
import '../../css/Parts/PartPage.css'
import PartsTypes from "./PartsTypes";
import PartsItems from "./PartsItems";

const PartsPage = () => {
    return (
        <div className={"part-page"}>
            <PartsTypes/>
            <PartsItems/>
        </div>
    );
};

export default PartsPage;