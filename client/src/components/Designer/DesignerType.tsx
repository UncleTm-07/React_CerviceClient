import React from 'react';
interface DesignerTypeProps {
    motherboard_svg: string
    selectMotherboard: (itemName: string) => void;
}


const DesignerType = ({ motherboard_svg, selectMotherboard }: DesignerTypeProps) => {
    return (
        <div className={"designer-constructor-type-container"}>
            <div><img src={motherboard_svg} alt=""/></div>
            <div onClick={() => selectMotherboard('cpu')}>
                Материнська плата
            </div>
        </div>
    );
};

export default DesignerType;