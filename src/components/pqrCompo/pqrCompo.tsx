import * as React from "react";
import ImageCompo from "../imageCompo/imageCompo.tsx";
import "./style-pqrCompo.css";

interface Props {
	empresa: string;
  }

  const PQRCompo: React.FC<Props> = ({ empresa }) => {
    return (
        <>
            <div className="row">
                    <ImageCompo texto="RequestHub"
                    url="src/components/ComponentExample/imageCompo/img/pqr.svg"/>
                <div className="col-md-6 contenedor-form-super">
                    <form className="contenedor-form">
                        <div className="form-group">
                            <label className="pqr">PQR</label>
                        </div>
                        <div className="form-group llenar-pqr">
                            <small id="llenarPQR" className="form-text text-muted">Estas a punto de llenar una pqr para la empresa {empresa}</small>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" className="form-control" id="exampleInputLastName1"/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="tel" placeholder="Phone" className="form-control" id="exampleInputPhone1"/>
                        </div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Type of PQR</option>
                                <option>Opción 1</option>
                                <option>Opción 2</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" className="form-control" id="exampleInputPhone1"/>
                        </div>
                        <div className="mb-3 form-group">
                            <label>Your message</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="Describe..." required></textarea>
                        </div>
                        <button type="submit" className="btn ">Enviar PQR</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PQRCompo;