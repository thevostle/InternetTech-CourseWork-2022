import React from "react";

import '../../style/components/authComponent.scss';

class AuthComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {registrate: false};
    }

    // если this.state.registrate == true, показываем форму регистрации, иначе - форму входа
    changeMode(event) {
        this.setState({registrate: !this.state.registrate});
    }

    render() {
        return (
            <div class="authComponent" >
                <button class="authComponent__button authComponent__button_switchModeButton" onClick={this.changeMode.bind(this)}>{this.state.registrate ? "Я уже смешарик" : "Хочу создать новый аккаунт"}</button>
                <form class="authComponent__form" method="post" action={this.state.registrate ? "api для регистрации" : "api для входа"}>
                    <div class="authComponent__inputWrapper">
                        <div class="authComponent__inputDescription">Никнейм</div>
                        <input class="authComponent__input authComponent__input_username" type="text" name="username"></input>
                    </div>
                    <div class={this.state.registrate ? "authComponent__inputWrapper" : "hideOnDesktop"}>
                        <div class="authComponent__inputDescription">Эл. почта</div>
                        <input class="authComponent__input authComponent__input_email" type="email" name="email"></input>
                    </div>
                    <div class="authComponent__inputWrapper authComponent__inputWrapper_last">
                        <div class="authComponent__inputDescription authComponent__inputDescription">Пароль</div>
                        <input class="authComponent__input authComponent__input_password" type="password" name="password"></input>
                    </div>
                    <input class="authComponent__button" type="submit" name={this.state.registrate ? "authRegistration" : "authSignIn"} value={this.state.registrate ? "Зарегистрироваться" : "Войти"}></input>
                </form>
            </div>);
    }
}

export default AuthComponent;
