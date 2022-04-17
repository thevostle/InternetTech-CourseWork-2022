import React from "react";

import '../style/components/authComponent.scss';

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
            <div className="authComponent" >
                <button className="authComponent__button authComponent__button_switchModeButton" onClick={this.changeMode.bind(this)}>{this.state.registrate ? "У меня уже есть аккаунт" : "Хочу создать новый аккаунт"}</button>
                <form className="authComponent__form" method="post" action={this.state.registrate ? "http://127.0.0.1:5000/api/registrateUser" : "http://127.0.0.1:5000/api/loginUser"}>
                    <div className="authComponent__inputWrapper">
                        <div className="authComponent__inputDescription">Никнейм</div>
                        <input className="authComponent__input authComponent__input_username" type="text" name="username"></input>
                    </div>
                    <div className={this.state.registrate ? "authComponent__inputWrapper" : "hideOnDesktop"}>
                        <div className="authComponent__inputDescription">Эл. почта</div>
                        <input className="authComponent__input authComponent__input_email" type="email" name="email"></input>
                    </div>
                    <div className="authComponent__inputWrapper authComponent__inputWrapper_last">
                        <div className="authComponent__inputDescription authComponent__inputDescription">Пароль</div>
                        <input className="authComponent__input authComponent__input_password" type="password" name="password"></input>
                    </div>
                    <input className="authComponent__button" type="submit" name={this.state.registrate ? "authRegistration" : "authSignIn"} value={this.state.registrate ? "Зарегистрироваться" : "Войти"}></input>
                </form>
            </div>);
    }
}

export default AuthComponent;
