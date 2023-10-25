import { Link } from "react-router-dom";
const CaixaVermelhaLink = (props) => {
  const fontStyle = {
    fontFamily:"rawline",
    fontSize: props.tam,
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    
  };
  
  return (
    <div className="d-flex justify-content-center">
        {/*<div className="item colorcards samu">*/}
        <div className="item  colorcards-10 hospital">
            <div className="content align-middle align-items-center d-flex justify-content-center">
                  <Link to={props.link} style={fontStyle}>{props.text}</Link>
            </div>
        </div>
        
    </div>
); 
};

export default CaixaVermelhaLink;
/* <span style={{"font-size": "80%;"}}>{props.text}</span> */