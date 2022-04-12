import React from "react";

import '../../style/components/footer.scss';

class Footer extends React.Component {
    render() {
        return <div class="footer">
            ого, вот это футер
            <div class="footer__linkContainer">
                <a class="footer__link" href="">Главная</a>
                <a class="footer__link" href="">Фильмы</a>
                <a class="footer__link" href="">Сериалы</a>
                <a class="footer__link" href="">Профиль</a>
            </div>
        </div>
    }
}

export default Footer;