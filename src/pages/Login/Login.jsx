import { useState } from "react";
import "./login.css"
import { Link } from "react-router-dom";
import iconKetasoft from "../../assets/iconKetasoft.svg";
import { useForm } from "react-hook-form";
const Login = () => {
    const [remember, setRemember] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (remember) {
            localStorage.setItem("remember",true)
        }
    };
    const changeRemember = () => {
        setRemember(!remember);
    }
    return (
        <section className="contain-login">
            <article className="section-login">
                <img src={iconKetasoft} className="login-icon" alt="Logo Ketasoft" />
                <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" {...register("email", {required: "El correo es obligatorio"})} />
                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="" placeholder="***************" {...register("password", {required: "La contraseña es obligatoria"})} id="password" />
                    {errors.email && <p className="text-error">{errors.password.message}</p>}
                    <div className="login-form__actions">
                        <div className="checkbox">
                            <input type="checkbox" value={remember} onChange={changeRemember}/>
                            <span>Recuerdame</span>
                        </div>
                        <a href="">Olvide mi contraseña</a>
                    </div>

                    <button className="button-login" type="submit">Iniciar Sesión</button>
                    <Link className="login-form-back" to={"/"}>Volver</Link>
                </form>
            </article>
            <article className="login-banner">

            </article>
        </section>
    )
}

export default Login;
