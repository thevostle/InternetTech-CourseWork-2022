/*

Карточка фильма, которая при нажатии ссылается на подробную страницу через id

Параметры:
id - айдишник фильмы в базе данных
filmImage - ссылка на постер
filmTitle - название фильма
filmType - жанр

*/

import React from "react";
import {Link} from "react-router-dom";

import '../../style/components/cards/filmCard.scss';

class FilmCard extends React.Component {
    render() {
        return (
            <div className="filmCard">
                <Link to={`films/${this.props.id}`}>
                    <img className="filmCard__image" src={this.props.filmImage} alt="film"/>
                    <div className="filmCard__title">{this.props.filmTitle}</div>
                    <div className="filmCard__type">{this.props.filmType}</div>
                </Link>
            </div>);
    }
}

export default FilmCard;