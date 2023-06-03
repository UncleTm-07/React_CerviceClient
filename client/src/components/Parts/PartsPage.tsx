import React from 'react';
import '../../css/PartPage.css'
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