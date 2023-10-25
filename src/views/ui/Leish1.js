  /*
import {

  Card
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
 */
import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";
import CaixaVermelhaLink from "../../components/CaixaVermelhaLink";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Leish1 = () => {
  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      
      <script src="../files/actions.js"></script>
      <script defer="defer" src="https://barra.brasil.gov.br/barra_2.0.js?ver=5.2.2" type="text/javascript"></script>
      <script src="/src/assets/scss/files/btn.css" ></script>
      <script src="/src/assets/scss/files/bootstrap.css" ></script>
      
      <article id="upa" className="container" style={{"background": "none"}}>
        
        <div className="row">
            <div className="col">
                <h1 style={fontStyle}>Fluxograma de atenção primária a pacientes com Leishmaniose Tegumentar Americana no estado do Piauí<i className="fas fa-info-circle align-top"></i></h1>
                <br/>
            </div> 
        </div> 

        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                    <InicioVerde unid="Promoção da Saúde" nome="Vigilância Entomológica" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SetaAbaixoCurta />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CaixaBranca text="Levantamento entomológico"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SetaAbaixoCurta />
                </div>
            </div>
            <div className="row">
                <div className="offset-3 col-6 n-pad">
                    <LinhaHoriz />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    <CaixaAzul text="Presença" />
                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <CaixaBranca text="Monitoramento da sazonalidade: meses de alta e baixa densidade"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="offset-3 col-6 n-pad">
                            <div className="d-flex justify-content-center">
                                <LinhaHoriz />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="col-12">
                                <SetaAbaixoCurta />
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <CaixaCinza text="Baixa"/>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <CaixaLaranjaLink text={[<br/>,"Nível de Alerta aos profissionais",<br/>,<br/>]} link='/Leish2'/>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="col-6">
                            
                            <div className="col-12">
                                <SetaAbaixoCurta />
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <CaixaCinza text="Alta"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>

                            <div className="col-12">
                                    <CaixaVermelhaLink text="Nível de Alerta aos profissionais" link='/Leish2'/>
                                </div>

                        </div>

                    </div>

                    
                    
                    <div className="row">
                        <div className="col-6">
                            
                            
                            
                        </div>
                        <div className="col-6">
                            
                            
                            
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    
                    <CaixaAzul text="Ausência" />

                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    <CaixaLaranjaLink text="Arquivar a pesquisa e comunicar o resultado aos profissionais" link='/Leish2'/>
                    
                    
                    

            </div>
        </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <p className="float-right mt-2">Última atualização: 27 de Junho de 2023</p>
            </div>
        
        </section>

      </article>
    </div>

    

  );
};

export default Leish1;
