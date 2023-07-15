import React, { useState, useEffect } from 'react';
import '../css/NavBar.css';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import {ACCESSORIES_ROUTE, ADMIN_ROUTE, CONFIGURATOR_ROUTE, PARTS_ROUTE, PC_ROUTE} from "../utils/consts";
import logo from '../img/logo-removebg-preview.png';
import shoppingCartIcon from '../img/basket_icon-icons.com_66289.svg';

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
                    <li><a href={PC_ROUTE}>Системні блоки</a></li>
                    <li><a href={ACCESSORIES_ROUTE}>Периферія</a></li>
                    <li><a href={PARTS_ROUTE}>Комплектуючі</a></li>
                    <li><a href={CONFIGURATOR_ROUTE}>Конфігуратор</a></li>
                    <li><a href={PARTS_ROUTE}>Уцінка</a></li>
                    <li><a href={PARTS_ROUTE}>Про сайт</a></li>
                    <li><a href={PARTS_ROUTE}>Контакти</a></li>
                    <li><a href={ADMIN_ROUTE}>Admin-Page</a></li>
                </ul>
            </div>
        </div>
    );
});

export default NavBar;
