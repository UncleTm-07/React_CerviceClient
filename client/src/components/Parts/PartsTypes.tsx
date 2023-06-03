import React from 'react';
import '../../css/PartsTypes.css'

const PartsTypes = () => {
    return (
        <div className={"part-type"}>
            <div className={"part-type-container"}>
                <a>Процесори</a>
                <a>Кулери</a>
                <a>Материнські плати</a>
                <a>Відеокарти</a>
                <a>Оперативна пам`ять</a>
                <a>SSD накопичувачи</a>
                <a>Жорсткі диски</a>
                <a>Блоки живлення</a>
                <a>Вентилятори</a>
                <a>Корпуси</a>
            </div>
        </div>
    );
};

export default PartsTypes;