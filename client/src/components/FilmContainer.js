import React from "react";


/*
 * для вызова компонента надо будет из бэка вытаскивать json с данными о фильмах, например в таком формате
 * const media = [
 *      {id: 1, title: 'название фильма', image: 'путь к фильму'}
 *      {id: 2, title: 'название фильма', image: 'путь к фильму'}
 *      {id: 3, title: 'название фильма', image: 'путь к фильму'}
 * ]
 * 
 */


function FilmContainer(props) {
    return (
        <div className="filmContainer">
            {props.media.map((film, id) => {
                return <FilmCard film={film} id={film.id} />
            })}
        </div>
    );
}

FilmContainer.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FilmContainer