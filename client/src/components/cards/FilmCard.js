import React from "react";

import '../../style/components/cards/filmCard.scss';

class FilmCard extends React.Component {
    render() {
        return (
            <div className="filmCard">
                <img className="filmCard__image" src={this.props.filmImage} alt="film"/>
                <div className="filmCard__title">{this.props.filmTitle}</div>
                <div className="filmCard__type">{this.props.filmType}</div>
            </div>);
    }
}

export default FilmCard;