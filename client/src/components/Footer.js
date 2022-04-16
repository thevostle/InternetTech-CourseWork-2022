import React from "react";

import '../style/components/footer.scss';

class Footer extends React.Component {
    render() {
        return <div className="footer">
            ого, вот это футер
            <div className="footer__linkContainer">
                <a className="footer__link" href="">Главная</a>
                <a className="footer__link" href="">Фильмы</a>
                <a className="footer__link" href="">Сериалы</a>
                <a className="footer__link" href="">Профиль</a>
            </div>
        </div>
    }
}

export default Footer;