import iconKetasoft from "../assets/iconKetasoft.svg";
import "./login.css"
const Login = () => {
    return (
        <section className="contain-login">
            <article className="section-login">
                <img src={iconKetasoft} className="login-icon" alt="Logo Ketasoft" />
                <form className="login-form">
                    <label htmlFor="">Correo</label>
                    <input type="text" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="" placeholder="***************" id="" />
                    <div className="login-form__actions">
                        <div className="checkbox">
                            <input type="checkbox" name="" id="" />
                            <span> Recuerdame</span>
                        </div>
                        <a href="">Olvide mi contraseña</a>
                    </div>

                    <button className="button-login" type="button">Iniciar Sesión</button>
                    <a className="login-form-back" href="">Volver</a>
                </form>
            </article>
            <article className="login-banner">

            </article>
        </section>
    )
}

export default Login;
