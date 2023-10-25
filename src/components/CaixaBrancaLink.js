import { Link } from "react-router-dom";

const CaixaBrancaLink = (props) => {
  const oStilo = {
    cursor: 'default',
    padding: "0.5rem 2rem",
    borderRadius: "1.5rem",
    fontFamily:"rawline",
    fontSize: props.tam,
    textDecoration: "none",
    
    "&:hover": {
      color: "#fff",
      textDecoration: "underline",
    },
  
  };

  const Nada = {
    all: "unset",
  }

  return (
    <div className="d-flex justify-content-center" >
        <div className="btn btn-outline-primary " style={oStilo}> 
           <Link to={props.link} style={Nada}>{props.text}</Link>
        </div>
    </div>
  );
};

export default CaixaBrancaLink;
