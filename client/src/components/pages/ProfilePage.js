import React from "react";
import AuthComponent from "../AuthComponent";


class ProfilePage extends React.Component {
    render() {
        return (
        <div>
            Кажется, Вы не вошли в аккаунт
            <AuthComponent />
        </div>);
    }
}

export default ProfilePage;