import React from 'react';
import '../../css/Designer/DesignerSummary.css'
import pc from '../../img/versum_corps-icon-500x500.png'

const DesignerSummary = () => {
    return (
        <div className={'designer-summary-container'}>
            <div className={"designer-summary-d1"}>
                <img src={pc} alt=""/>
            </div>
            <div className={"designer-summary-d2"}>
                <h3>Пiдсумок змiни конфiгурацiї</h3>
                <div className={"designer-summary-d2-container"}>
                    <div className={"designer-summary-d2-l1"}>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Процесор</div>
                            <div>Процесор не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Кулер</div>
                            <div>Кулер не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Материнська плата</div>
                            <div>Материнську плату не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Оперативна пам’ять</div>
                            <div>Оперативну пам'ять не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Відеокарта</div>
                            <div>Відеокарту не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Накопичувач SSD</div>
                            <div>SSD не встановлено
                            </div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Накопичувач HDD</div>
                            <div>HDD не встановлено</div>
                        </div>
                    </div>
                    <div className={"designer-summary-d2-l1"}>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Wi-Fi адаптер</div>
                            <div>Wi-Fi адаптер не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Блок живлення</div>
                            <div>Блок живлення не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Додаткові кабелі</div>
                            <div>Кабель не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Додаткові вентилятори</div>
                            <div>Вентилятор не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Корпус</div>
                            <div>Корпус не встановлено</div>
                        </div>
                        <div className={"designer-summary-d1-type-container"}>
                            <div className={"designer-summary-type"}>Програмне забезпечення</div>
                            <div>Тестова версія Windows</div>
                        </div>
                    </div>
                </div>
                <div className={"designer-summary-buy-container"}>
                    <div>
                        <h3>0 грн</h3>
                        <div className={'btn-add'}><a>ДОДАТИ У КОШИК</a></div>
                    </div>
                    <div>
                        <h3>від 0 грн/мiс</h3>
                        <div className={'btn-buy-credit'}><a>КУПИТИ В КРЕДИТ</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignerSummary;