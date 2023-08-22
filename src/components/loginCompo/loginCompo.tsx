import * as React from "react";
import ImageCompo from "../imageCompo/imageCompo.tsx";
import "../loginCompo/style-loginCompo.css";


const LoginCompo: React.FC = () => {
    return (
        <>
            <div className="row">
                {/* <div className="col-md-6 image contenedor-imageCompo"> */}
                    <ImageCompo texto="RequestHub"
                    url="src/components/ComponentExample/imageCompo/img/img1.svg" />
                {/* </div> */}
                <div className="col-md-6 contenedor-form-super">
                    <form className="contenedor-form">
                        <label className="login">Login</label>
                        <div className="form-group">
                            <button className="btn-google">
                                <img className="google-icon" src="src/components/ComponentExample/imageCompo/img/buscar.png" alt="google icon" />
                                <p>Login with Gmail</p>
                            </button>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Your password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="olvidaste-recordar">
                            <div className="form-group-olvidaste">
                                <a href="#" className="olvidaste-link">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label">Recordar contraseña</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-login">Login</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default LoginCompo;