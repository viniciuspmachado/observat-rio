const CaixaLaranja = (props) => {
  const fontStyle = {
    fontFamily:"rawline",
    fontSize: props.tam,
  
  };
  
  return (
    <div className="d-flex justify-content-center">
        
        <div className="item colorcards samu">
            <div className="content align-middle align-items-center d-flex justify-content-center">
                  <span style={fontStyle}>{props.text}</span>
            </div>
        </div>
        
    </div>
);
};

export default CaixaLaranja;
/* <span style={{"font-size": "80%;"}}>{props.text}</span> */