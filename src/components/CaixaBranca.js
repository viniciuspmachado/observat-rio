const CaixaBranca = (props) => {
  const semCursor = {
    cursor: 'default',
    padding: "0.675rem 0.95rem",
    borderRadius: "1.5rem",
    fontFamily:"rawline",
    fontSize: props.tam,
    
    "&:hover": {
      color: "#fff",
      backgroundColor: "#007bff",
      borderColor: "#007bff",
    },
  
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="btn btn-outline-primary" style={semCursor}>{props.text}</div>
    </div>
  );
};

export default CaixaBranca;
