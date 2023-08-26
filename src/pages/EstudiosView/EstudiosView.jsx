import "./estudioView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCaretDown,
  faEnvelope,
  faHouse,
  faLocation,
  faPhone,
  faTeletype,
} from "@fortawesome/free-solid-svg-icons";

const EstudiosView = () => {
  return (
    <>
      <main>
        <h1 className="estudios_title">¿Que estudios realizamos?</h1>
        <div className="estudios_container">
          <div className="estudio_card">
            <p>estudio</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>estudio</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>estudio</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>estudio</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className="estudio_card">
            <p>estudio</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className="estudios_solicitaTurno">
          <div className="estudios_solicitaTurno_blue">
            <p className="estudios_solicitaTurno_blue_title">
              SOLICITA TU TURNO
            </p>
            <div>
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <p>Telefono</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <p>email</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocation} />
                <p>Direccion</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <p>Turnos online</p>
              </div>
            </div>
          </div>
          <div className="estudios_solicitaTurno_white">
            <div className="estudios_solicitaTurno_white_cont_title">
              HORARIOS DE ATENCION
            </div>
            <div className="estudios_solicitaTurno_white_div">
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon
                  icon={faTeletype}
                  style={{ fontSize: "100px" }}
                />
                <p>Atencion telefonica</p>
                <p>Lunes a viernes</p>
                <p>00:00 - 00:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atencion sede</p>
                <p>Lunes a viernes</p>
                <p>00:00 - 00:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atencion sede</p>
                <p>Lunes a viernes</p>
                <p>00:00 - 00:00</p>
              </div>
              <div className="estudios_solicitaTurno_white_cont">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: "100px" }} />
                <p>Atencion sede</p>
                <p>Lunes a viernes</p>
                <p>00:00 - 00:00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default EstudiosView;
