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
import CaixaLaranja from "../../components/CaixaLaranja";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Chagas1 = () => {
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
                        <h1 style={fontStyle}>Fluxograma de promoção à saúde (vigilância entomológica) relativamente à doença de Chagas no estado do Piauí<i className="fas fa-info-circle align-top"></i></h1>
                        <br/>
                    </div> 
                </div>
                <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
                    <div className="row">
                        <div className="col">
                            <InicioVerde unid={["Unidade de Atenção Primária", <br />]}
                                        nome={["PROMOÇÃO DA SAÚDE",<br />,"Vigilância Entomológica"]}
                            />
                            
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
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom arrow-before">.</span>
                                    </div>
                                </div>
                            </div>
                            <CaixaAzul text="Município com presença de barbeiro domiciliado" />
                            
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>

                            

                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            
                            <CaixaAzul text={["Município sem presença de barbeiro domiciliado"]} />
                            
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            
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
                        <div className="col-12">
                            <SetaAbaixoCurta />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CaixaBranca text='Barbeiro Capturado' />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>
                    <CaixaAzul text={['Enviar para laboratório de entomologia e aplicar', <br/>,'inseticida no domicílio onde foi capturado']} />
                    

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
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            <CaixaBranca text='Barbeiro Vivo' />
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            <CaixaCinza text='Examinar presença de T.cruzi' />
                            
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            
                            <CaixaBranca text='Barbeiro Morto'/>
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            <CaixaCinza text='Classificar gênero/espécie; tentar re-hidratar p/examinar'/>
                            <div className="row">
                                <div className="col-12">
                                   <SetaAbaixoCurta />
                                </div>
                            </div>

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
                        <div className="col-12">
                            <SetaAbaixoCurta />
                            <CaixaCinza text='Resultado' />
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
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-center">
                                <CaixaBranca text='Positivo'/>
                            </div>
                            <SetaAbaixoCurta />

                            <div className="d-flex justify-content-center">
                                <CaixaLaranjaLink text={['Referenciar habitantes do domicílio', <br/>,'para seguimento na atenção primária']} link="/chagas2"/>
                            </div>
                            
                            
                        </div>

                        <div className="col-6">
                            <SetaAbaixoCurta/>
                            <CaixaBranca text='Negativo' />
                            <SetaAbaixoCurta/>
                            <CaixaLaranja text="Encerrar a ocorrência e dar conhecimento à família e aos profissionais de saúde" />                            
                        </div>
                    </div>
                    
                    
                </section>
                <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                    <p className="float-right mt-2">Última atualização: 26 de Maio de 2023</p>
                </div>
                
                <div className="modal fade" id="Prevencao" tabindex="-1" role="dialog" aria-labelledby="Prevencao" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="encaminhamentoHASCronicaTitle">Prevenção Secundária</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="fas fa-times"></i></span>
                </button>
            </div>
            <div className="modal-body">
                <p>A prevenção secundária está contemplada no planejamento terapêutico da HAS Crônica. </p>
                <p>A inclusão do item nesta imagem tem fins didáticos para facilitar a visualização/entendimento do itinerário do paciente.</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Entendi</button>
            </div>
        </div>            </div>
                </div>
            </article>
    </div>

    

  );
};

export default Chagas1;
