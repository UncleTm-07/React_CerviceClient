import React, { useState, useEffect } from 'react';
import '../css/NavBar.css';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { PARTS_ROUTE } from "../utils/consts";
import logo from '../img/logo-removebg-preview.png';

const NavBar = observer(() => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <div>
            <div className={`top-navbar ${isScrolled ? 'hidden' : ''}`}>
                <div><img src={logo} alt=""/></div>
            </div>
            <div className={`navbar ${isScrolled ? 'sticky' : ''}`}>
                <ul>
                    <li><a href={PARTS_ROUTE}>Системні блоки</a></li>
                    <li><a href={PARTS_ROUTE}>Периферія</a></li>
                    <li><a href={PARTS_ROUTE}>Комплектуючі</a></li>
                    <li><a href={PARTS_ROUTE}>Конфігуратор</a></li>
                    <li><a href={PARTS_ROUTE}>Уцінка</a></li>
                    <li><a href={PARTS_ROUTE}>Про сайт</a></li>
                    <li><a href={PARTS_ROUTE}>Контакти</a></li>
                </ul>
                <div>
                    {/*<button className="logout-btn" onClick={() => navigate(LOGIN_ROUTE)}>Увійти</button>*/}
                </div>
            </div>
        </div>
    );
});

export default NavBar;
