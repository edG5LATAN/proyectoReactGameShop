import React from "react";
import "./Footer.css";
import pelea1 from "../../../public/img/gif/pelea.gif";
import pelea2 from "../../../public/img/gif/pelea1.gif";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer_contenedor">
      <div className="footer_contenedor_cajas">
        <div className="footer_cajas">
          <div className="footer_cajas1 footer_caja_iconos">
            <i
              style={{ color: "green" }}
              class="bi bi-whatsapp footer_icono"
            ></i>
            <i
              style={{ color: "blue" }}
              class="bi bi-linkedin footer_icono"
            ></i>
            <i
              style={{ color: "red" }}
              class="bi bi-instagram footer_icono"
            ></i>
            <i
              style={{ color: "blue" }}
              class="bi bi-facebook footer_icono"
            ></i>
          </div>
          <div className="footer_cajas1">
            <h2>Contactanos</h2>
            <form action="" className="footer_cajas1_form">
              <div className="footer_form_imput">
                <label htmlFor="">nombre</label>
                <input type="text" name="" id="" />
              </div>
              <div className="footer_form_imput">
                <label htmlFor="">correo</label>
                <input type="text" name="" id="" />
              </div>
              <div className="footer_form_imput">
                <label htmlFor="">informacion</label>
                <input type="text" name="" id="" />
              </div>
              <button>informacion</button>
            </form>
          </div>
        </div>
        <div className="footer_informacion">
          <div className="footer_informacion_enlaces">
            <h5 onClick={() => navigate("/")}>GAMER SHOP</h5>
            <p onClick={() => navigate("/todos/consolas")}>
              Consolas de escritoio
            </p>
            <p onClick={() => navigate("/todos/accesorio varios")}>
              Accesorios para consolas
            </p>
            <p onClick={() => navigate("/todos/video juegos")}>
              Video juegos varios
            </p>
            <p
              onClick={() => {
                navigate("./todos/catalogo");
              }}
            >
              Catalogo de gameShop
            </p>
            <p onClick={() => {
                navigate("./acercade");
              }}>Acerca de.</p>
          </div>

          <img
            onClick={() => navigate("/")}
            className="footer_informacion_gif1 gift2"
            src={pelea1}
            alt="gamer"
          />
          <img
            onClick={() => navigate("/")}
            className="footer_informacion_gif1 gift1"
            src={pelea2}
            alt="gamer"
          />
        </div>
      </div>
      <p className="footer_firma">EDTecnology.com</p>
    </div>
  );
}

export default Footer;
