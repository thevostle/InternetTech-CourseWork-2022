import React from "react";

import '../../../style/components/cards/filmCard.scss';

class FilmCard extends React.Component {
    render() {
        return (
            <div class="filmCard">
                <img class="filmCard__image" src={this.props.filmImage}/>
                <div class="filmCard__title">{this.props.filmTitle}</div>
                <div class="filmCard__type">{this.props.filmType}</div>
            </div>);
    }
}

export default FilmCard;