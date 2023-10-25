
import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";
import LinhaVert from "../../components/LinhaVert";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Leish2 = () => {
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
                            <InicioVerde unid="ATENÇÃO PRIMÁRIA" />
                        </div>
                    </div>
                    
                    

                    <div className="row">
                        <div className="col-12">
                            <SetaAbaixoCurta />
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-1 col-9 n-pad mg-lf">
                            <div className="d-flex justify-content-start">
                                <LinhaHoriz/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        
                    <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <SetaAbaixoCurta/>
                            </div>
                                <CaixaAzul text={[<br/>,'Há suspeita clínica',<br/>,<br/>]}
                                
                                />
                                <LinhaVert/>
                    </div>

                        <div className="col-3">
                            <SetaAbaixoCurta />
                            <CaixaAzul text={['Por demanda espontânea',<br/>,<br/>]} />
                            <LinhaVert/>
                        </div>

                        
                                                            
                        <div className="col-3">
                            <SetaAbaixoCurta />
                            <CaixaAzul text='Realização de campanha e/ou orientação área de risco' />
                            <LinhaVert/>
                           


                        </div>


                        <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <SetaAbaixoCurta/>
                            </div>
                            <CaixaAzul text={['Encaminhado por ACS ou ACE',<br/>,<br/>]} />
                                <LinhaVert/>
                        </div>

                        

                    </div>
                   
                    <div className="row">
                            <div className="offset-1 col-9 n-pad mg-lf">
                                <div className="d-flex justify-content-start">
                                    <LinhaHoriz/>
                                </div>
                            </div>
                        </div>
                        
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="row">
                        
                        <CaixaCinza text={['Classifição Médica']} />
                        <SetaAbaixoCurta />
                        
                    </div>

                    <div className="row">
                        <div className="offset-3 col-6 n-pad">
                                <div className="d-flex justify-content-center">
                                    <LinhaHoriz/>
                                </div>
                        </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                    
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                </div>
                                <CaixaBranca text={['Descarte Clínico']}/>
                                <SetaAbaixoCurta/>
                                <CaixaLaranjaLink text={['Paciente com sinais e sintomas deve pesquisar outras causas da infecção']} link='/Leish3'/>
                            </div>
                            
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                </div>
                                <CaixaBranca text='Diagnóstico Clínico'/>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                                    <CaixaCinza text={['Classificar a forma da LTA: cutânea, mucosa ou mista e solicitar exames laboratoriais']} />
                                    <SetaAbaixoCurta/>

                                    <div className="row">
                                        <div className="offset-3 col-6 n-pad">
                                                <div className="d-flex justify-content-center">
                                                    <LinhaHoriz/>
                                                </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                
                                                    <div className="d-flex justify-content-center">
                                                        <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CaixaBranca text={['Aplicar teste rápido anti-HIV']}/>
                                            <SetaAbaixoCurta/>

                                            <div className="row">
                                                <div className="offset-3 col-6 n-pad">
                                                        <div className="d-flex justify-content-center">
                                                            <LinhaHoriz/>
                                                        </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12">
                                                        
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <CaixaAzul text={['Não Reagente']}/>
                                                    <SetaAbaixoCurta/>
                                                    <CaixaLaranjaLink text='Manter tratamento da LTA' link='/Leish3'/>
                                                </div>

                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-12">
                                                        
                                                            <div className="d-flex justify-content-center">
                                                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <CaixaAzul text={['Reagente']}/>
                                                    <SetaAbaixoCurta/>
                                                    <CaixaLaranjaLink text='Notificar, investigar e regular para atenção especializada em HIV'
                                                         link='/Leish3'
                                                         tam='80%'/>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-12">
                                                
                                                    <div className="d-flex justify-content-center">
                                                        <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <CaixaBranca text={['Notificar, investigar e tratar casos clássicos']}/>
                                            <SetaAbaixoCurta/>
                                            <CaixaLaranjaLink text={['Regular para média ou alta complexidade quando indicado']} link='/Leish3'/>
                                        </div>

                                    </div>

                                </div>
                                
                            </div>
                    </div>


                    <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                        <p className="float-right mt-2">Última atualização: 27 de Junho de 2023</p>
                    </div>
                </section>
                
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

export default Leish2;
