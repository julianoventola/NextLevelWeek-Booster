import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Map, TileLayer, Marker } from "react-leaflet";

import "./styles.css";

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      {/* --------------------------- FORM------------------------- */}
      <form>
        <h1>
          Cadasto do
          <br /> ponto de coleta
        </h1>
        {/* --------------------------- DADOS------------------------- */}
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>
        {/* --------------------------- ENDEREÇO------------------------- */}
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-23.6533727, -46.5346456]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-23.6533727, -46.5346456]} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado(UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma cidade</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="number">Número</label>
            <input type="number" min="1" name="number" id="number" />
          </div>
        </fieldset>
        {/* --------------------------- ITENS DE COLETA-------------------- */}
        <fieldset>
          <legend>
            <h2>Ítems de coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
              <span>Óleo de cozinha</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
