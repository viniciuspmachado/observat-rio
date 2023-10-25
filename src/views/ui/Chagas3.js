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

const Chagas2 = () => {
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
                <h1 style={fontStyle}>Fluxograma de atenção primária a pacientes com doença de Chagas no estado do Piauí<i className="fas fa-info-circle align-top"></i></h1>
                <br/>
            </div> 
        </div> 

        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                    <InicioVerde unid="Atenção Secundária" nome="Confirmação Diagnóstica de DCA" />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SetaAbaixoCurta />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CaixaBranca text="Notificação de caso suspeito de DCA"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SetaAbaixoCurta />
                </div>
            </div>
            <div className="row">
                <div className="col">
                        <CaixaBranca text={["Coleta de amostras de sangue periférico - para testes", <br />,"parasitológicos e sorológicos silmultaneamente"]}/>
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
                    <CaixaAzul text="Realizar exames parasitológicos" />
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
                                    <CaixaCinza text="Resultado Positivo" tam="80%" />
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <CaixaLaranjaLink text="Confirma o caso" link='/chagas4'/>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="col-6">
                            
                            <div className="col-12">
                                <SetaAbaixoCurta />
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <CaixaCinza text="Resultado Negativo" tam="80%" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>

                            <CaixaAzul text="Repetir o exame" />

                            <SetaAbaixoCurta />

                            <div className="row">    
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <LinhaHoriz />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <CaixaBranca text="Resultado Positivo" tam="80%"/>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranjaLink text="Confirma o caso" tam="80%" link='/chagas4'/>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                                              
                                            <div className="col-12">
                                               
                                                    
                                                        <div className="d-flex justify-content-center">
                                                            <CaixaBranca text="Resultado Negativo" tam="80%" />
                                                        </div>   
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranja text="Descartar o caso se os exames sorológicos também forem negativos" tam="80%"/>
                                                </div>
                                            </div>
                                       
                                        
                                    </div>
                                    
                                </div>

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
                    
                    <CaixaAzul text={["Realizar Sorologia",<sup>*</sup>]} />

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
                                    <CaixaCinza text="Detecção de IgM" tam="80%" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            <div className="row">    
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <LinhaHoriz />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                        
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <CaixaBranca text="Reagente" tam="80%"/>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranjaLink text="Confirma o caso" tam="80%" link='/chagas4'/>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                                              
                                            <div className="col-12">
                                               
                                                    
                                                        <div className="d-flex justify-content-center">
                                                            <CaixaBranca text="Não Reagente" tam="80%"/>
                                                        </div>   
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranja text={["Descarta",<br />," o caso ",<sup>b</sup>]} tam="80%"/>
                                                </div>
                                            </div>
                                       
                                        
                                    </div>
                                    
                                </div>

                            </div>
                    
                        </div>

                        <div className="col-6">
                            <div className="col-12">
                                <SetaAbaixoCurta />
                            </div>
                            <div className="row">                        
                                <div className="col-12">
                                    <CaixaCinza text={["Detecção de IgG", <br />,"(coletar duas amostras com intervalo mínimo de 15 dias)"]} tam="80%"/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <LinhaHoriz />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                        <div className="row">                        
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <CaixaBranca text="Soroconversão ou aumento de 2 ou mais títulos" tam="80%"/>
                                                </div>   
                                            </div>
                                            
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranjaLink text="Confirma o caso" tam="80%" link='/chagas4'/>
                                                </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="col-12">
                                            <SetaAbaixoCurta />
                                        </div>
                                                              
                                            <div className="col-12">
                                                        <div className="d-flex justify-content-center">
                                                            <CaixaBranca text="Não reagente ou reagente sem aumento de 2 títulos" tam="80%" />
                                                        </div>   
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <SetaAbaixoCurta />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <CaixaLaranja text="Descarta o caso" tam="80%"/>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>




                    
                    
                </div>

            </div>
        </div>
            <div className="row">
                <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4">
                    <h4 className="legend">Legenda:</h4>
                        <p className="legend mb-0"><strong><sup>*</sup></strong> A confirmação pelo critério sorológico deve ser avaliada criteriosamente levando em consideração o intervalo entre as datas de início de sintomas e coleta ada amostra de sangue, além de evidências clínicas e epidemiológicas.</p>
                        <p className="legend mb-0"><strong><sup>b</sup></strong> Na detecção de IgM – descartar o caso somente após a avaliação da sorologia por IgG. Considerar sororreagente para IgM o título ≥ 1:40 e para IgG ≥ 1:80.</p>
                        <p className="legend mb-0"><strong>Fonte:</strong> Adaptado do Guia de Vigilância em Saúde, 3a edição, 2019</p>
                </div>
            </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <p className="float-right mt-2">Última atualização: 13 de Junho de 2023</p>
            </div>
        
        </section>

      </article>
    </div>

    

  );
};

export default Chagas2;
