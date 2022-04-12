import React from "react";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import '../../style/components/header.scss';

class Header extends React.Component {
    render() {
        return <div className="header">
            <div class="header__container container">
                <div className="header__logo">
                    <img src="{this.props.mainLogo}" />
                </div>
                <div className="header__linkContainer">
                    <a className="header__link" href="">Главная</a>
                    <a className="header__link" href="">Фильмы</a>
                    <a className="header__link" href="">Сериалы</a>
                    <a className="header__link" href="">Профиль</a>
                </div>
            </div>
        </div>
    }
}

export default Header;