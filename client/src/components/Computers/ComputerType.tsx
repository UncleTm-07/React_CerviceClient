import React, {useState} from 'react';
import '../../css/Computers/ComputerType.css'

const ComputerType = () => {
    const [isCpuOpen, setIsCpuOpen] = useState(false);
    const [isGpuOpen, setIsGpuOpen] = useState(false);

    const toggleCpu = () => {
        setIsCpuOpen(!isCpuOpen);
    };
    const toggleGpu = () => {
        setIsGpuOpen(!isGpuOpen);
    };


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
            <div className={"computer-filters-container"}>
                <div className={"computer-filters-money"}>
                    <div className={"computer-filter-name"}>Ціна</div>
                    <div className={"filter-money-progress"}>
                        <div>Від</div>
                        <input/>
                        <div>До</div>
                        <input/>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Виробник CPU</div>
                    <div className={"filter-size"}>
                        <div>AMD</div>
                        <div>Intel</div>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name-container"}>
                        <button onClick={toggleCpu}>\/</button>
                        <div className={"computer-filter-name"}>Процесор</div>
                    </div>
                    {isCpuOpen && (
                        <div className={"filter-size"}>
                            <div>Athlon 300GE</div>
                            <div>Athlon X4 950</div>
                            <div>Ryzen 3 1200</div>
                            <div>Ryzen 5 3600</div>
                            <div>Ryzen 5 4500</div>
                            <div>Ryzen 7 3700X</div>
                            <div>Core i3 10100F</div>
                            <div>Core i5 10400F</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                            <div>Core i7 12700KF</div>
                        </div>
                    )}
                </div>
                <br/>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Виробник GPU</div>
                    <div className={"filter-size"}>
                        <div>AMD</div>
                        <div>NVIDIA</div>
                        <div>Intel</div>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name-container"}>
                        <button onClick={toggleGpu}>\/</button>
                        <div className={"computer-filter-name"}>Відеокарта</div>
                    </div>
                    {isGpuOpen && (
                        <div className={"filter-size"}>
                            <div>Radeon RX Vega</div>
                            <div>Radeon RX550</div>
                            <div>Radeon RX560</div>
                            <div>GeForce GTX 1660 Super</div>
                            <div>GeForce GTX 1660 Ti</div>
                            <div>GeForce RTX 3050</div>
                            <div>GeForce RTX 3060</div>
                            <div>GeForce RTX 3060 Ti</div>
                            <div>GeForce RTX 3070 Ti</div>
                            <div>GeForce RTX 3080</div>
                            <div>GeForce RTX 4070</div>
                            <div>GeForce RTX 4070Ti</div>
                            <div>GeForce RTX 4080</div>
                            <div>GeForce RTX 4090</div>
                        </div>
                    )}
                </div>
                <br/>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Тип пам'яті</div>
                    <div className={"filter-size"}>
                        <div>DDR4</div>
                        <div>DDR5</div>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Оперативна пам’ять</div>
                    <div className={"filter-size"}>
                        <div>8GB</div>
                        <div>16GB</div>
                        <div>32GB</div>
                        <div>64GB</div>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Колір</div>
                    <div className={"filter-size"}>
                        <div>Білий</div>
                        <div>Чорний</div>
                        <div>Червоний</div>
                        <div>Сірий</div>
                        <div>Рожевий</div>
                    </div>
                </div>
                <div className={"computer-filters-value"}>
                    <div className={"computer-filter-name"}>Накопичувач SSD</div>
                    <div className={"filter-size"}>
                        <div>1TB</div>
                        <div>512GB</div>
                        <div>256GB</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerType;