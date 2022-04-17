/*

TODO заменить '1' в ссылке профиля пользователя на его никнейм

*/

import React from "react";
//import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import '../style/components/header.scss';

class Header extends React.Component {
    render() {
        return <div className="header">
            <div className="header__container container">
                <div className="header__logo">
                    <img src="{this.props.mainLogo}" />
                </div>
                <div className="header__linkContainer">
                    <a className="header__link" href="/">Главная</a>
                    <a className="header__link" href="/films">Фильмы</a>
                    <a className="header__link" href="/films">Сериалы</a>
                    <a className="header__link" href="/1">Профиль</a> 
                </div>
            </div>
        </div>
    }
}

export default Header;