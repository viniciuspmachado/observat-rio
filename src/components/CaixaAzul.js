const CaixaAzul = (props) => {
  const fontStyle = {
    fontFamily:"rawline",
    fontSize: props.tam,
  
  };
  return (
    <div className="d-flex justify-content-center">
        <div className="btn btn-primary disabled  fluxo-radius align-middle align-items-center d-flex justify-content-center min-w-50 flex-column">
            <span style={fontStyle}>{props.text}</span>
        </div>
        
    </div>
    
  );
};

export default CaixaAzul;
