import { Link } from "react-router-dom";
const fontStyle = {
  fontFamily:"rawline"


};


const InicioVerde = (props) => {
  return (
      <div>
          <h3 className="target green"><i className="fas fa-map-marker-alt lg"></i>Você esta em: <strong> Unidade de {props.unid}</strong></h3>
          <div className="d-flex justify-content-center mg-tp">
              <div className="item green colorcards" style={fontStyle}>
              <Link to={props.link}>
                      <div className="content">
                          <i className="fas fa-map-marker-alt "></i>
                          <p className=""><strong>{props.unid}</strong> {props.nome}</p>
                      </div>
                </Link>
              </div>
          </div>

      </div>
  );
};

export default InicioVerde;
