import React, {FC} from 'react';
import '../../css/Computers/ComputerType.css'
import FilterComponentPC from "./FilterComponentPC";

const ComputerType: FC = () => {
    return (
        <div className={"computer-filters"}>
            <div className={"computer-type"}>
                <div className={"computer-type-container"}>
                    <a style={{color: "#1FCF6EFF"}}>Всі</a>
                    <a>Gaming Series</a>
                    <a>Brand Series</a>
                    <a>Custom Series</a>
                    <a>Mini Series</a>
                </div>
            </div>
            <div className="computer-filters-container">
                <div className={"computer-filters-money"}>
                    <div className={"computer-filter-name"}>Ціна</div>
                    <div className={"filter-money-progress"}>
                        <div>Від</div>
                        <input/>
                        <div>До</div>
                        <input/>
                    </div>
                </div>
                <FilterComponentPC
                    filterName="Виробник CPU"
                    options={['AMD', 'Intel']}
                />
                <FilterComponentPC
                    filterName="Процесор"
                    options={['Athlon 300GE',
                        'Athlon X4 950',
                        'Ryzen 3 1200',
                        'Ryzen 5 3600',
                        'Ryzen 5 4500',
                        'Ryzen 7 3700X',
                        'Core i3 10100F',
                        'Core i5 10400F',
                        'Core i7 12700KF',
                        'Core i7 12700KF']}
                />
                <FilterComponentPC
                    filterName="Виробник GPU"
                    options={['AMD', 'NVIDIA', 'Intel']}
                />
                <FilterComponentPC
                    filterName="Відеокарта"
                    options={['Radeon RX Vega',
                        'Radeon RX550',
                        'Radeon RX560',
                        'GeForce GTX 1660 Super',
                        'GeForce GTX 1660 Ti',
                        'GeForce RTX 3050',
                        'GeForce RTX 3060',
                        'GeForce RTX 3060 Ti',
                        'GeForce RTX 4070',
                        'GeForce RTX 4070Ti']}
                />
                <FilterComponentPC
                    filterName="Тип пам'яті"
                    options={['DDR4', 'DDR5']}
                />
                <FilterComponentPC
                    filterName="Оперативна пам’ять"
                    options={['8GB', '16GB', '32GB', '64GB']}
                />
                <FilterComponentPC
                    filterName="Колір"
                    options={['Білий', 'Чорний', 'Червоний', 'Сірий', 'Рожевий']}
                />
                <FilterComponentPC
                    filterName="Накопичувач SSD"
                    options={['1TB', '512GB', '256GB']}
                />
            </div>
        </div>
    );
};

export default ComputerType;