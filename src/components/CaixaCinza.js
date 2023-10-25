

const CaixaCinza = (props) => {
    const fontStyle = {
        fontFamily:"rawline",
        fontSize: props.tam,
        padding: "0.675rem 0.95rem",
      
      };

      const stiloCaixa = {
        background: "#6c757d",
        border: "none",
      }
  
    return (
    
        <div className="d-flex justify-content-center" >
            <div className="btn btn-secondary disabled fluxo-radius align-middle align-items-center d-flex justify-content-center flex-column" style={stiloCaixa}>
                <span style={fontStyle}>{props.text}</span>                              
            </div>    
        </div>    
    
);
};

export default CaixaCinza;
