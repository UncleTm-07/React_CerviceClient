import React from 'react';
import ComputerType from "./ComputerType";
import ComputerItems from "./ComputerItems";
import '../../css/Computers/ComputerPage.css'

const ComputerPage = () => {
    return (
        <div className={"pc-page"}>
            <ComputerType/>
            <ComputerItems/>
        </div>
    );
};

export default ComputerPage;