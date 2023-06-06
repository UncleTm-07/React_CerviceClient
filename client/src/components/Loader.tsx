import React, {FC} from 'react';
import '../css/Loader.css';

const Loader: FC = () => {
    return (
        <div className="spinner-box">
            <div className="circle-border">
                <div className="circle-core"></div>
            </div>
        </div>
    );
};

export default Loader;
