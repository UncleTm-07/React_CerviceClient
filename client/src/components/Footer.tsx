import React from 'react';
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <div className={"footer-item"}>
                <div className={"footer-item-type"}>Системні блоки</div>
                <div className={"footer-item-choose"}>
                    <div>Всі</div>
                    <div>Gaming Series</div>
                    <div>Brand Series</div>
                    <div>Custom Series</div>
                    <div>Mini Series</div>
                    <div>Office Series</div>
                    <div>For Today Series</div>
                </div>
            </div>
            <div className={"footer-item"}>
                <div className={"footer-item-type"}>Периферія</div>
                <div className={"footer-item-choose"}>
                    <div>Мережеве обладнання</div>
                    <div>Монітори</div>
                    <div>Миші</div>
                    <div>Поверхні</div>
                    <div>Клавіатури</div>
                    <div>Гарнітури</div>
                    <div>Столи</div>
                    <div>Крісла</div>
                    <div>Різне</div>
                </div>
            </div>
            <div className={"footer-item"}>
                <div className={"footer-item-type"}>Інформація</div>
                <div className={"footer-item-choose"}>
                    <div>Договір публічної оферти</div>
                    <div>Умови гарантії</div>
                    <div>Умови доставки</div>
                    <div>Умови оплати</div>
                    <div>Політика повернення</div>
                    <div>Установчі документи</div>
                    <div>Про компанію</div>
                    <div>Контакти</div>
                </div>
            </div>
            <div className={"footer-item"}>
                <div className={"footer-item-type"}>Контакти</div>
                <div>
                    <div className={"footer-item-little"}>Сервісний центр/Магазин:</div>
                    <div className={"footer-item-info"}>
                        <div>Україна, м. Київ, вул. Олекси</div>
                        <div>Тихого, буд. 49А</div>
                        <div>Пн.-Пт. з 09:00 до 19:00</div>
                        <div>Сб. з 10:00 до 18:00</div>
                    </div>
                    <div className={"footer-item-info-telephone"}>067 459 28 78</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;