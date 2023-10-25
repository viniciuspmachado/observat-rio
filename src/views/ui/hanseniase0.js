
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

const hanseniase0 = () => {
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
                    <h1 style={fontStyle}>Pacientes com sinais e sintomas de Hanseníase<i className="fas fa-info-circle align-top"></i></h1>
                        <br/>
                    </div> 
                </div>
                <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
                    <div className="row">
                        <div className="col">
                            <InicioVerde unid="ATENÇÃO PRIMÁRIA" nome="Acolhimento" />
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
                                <CaixaAzul text='Demanda Espontânea'/>
                                <LinhaVert/>
                    </div>

                        <div className="col-3">
                            <SetaAbaixoCurta />
                            <CaixaAzul text={['Encaminhado por ACS']} />
                            <LinhaVert/>
                        </div>

                        
                                                            
                        <div className="col-3">
                            <SetaAbaixoCurta />
                            <CaixaAzul text='Campanhas' />
                            <LinhaVert/>
                           


                        </div>


                        <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <SetaAbaixoCurta/>
                            </div>
                                <CaixaAzul text='Busca Ativa'/>
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
                        
                        <CaixaCinza text={['-Avaliação Médica',<br/>,'-Avaliação dermatoneurológica']} />
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
                                <CaixaBranca text={['Descartado para hanseníase',<sup>*</sup>]}/>
                                <SetaAbaixoCurta/>
                                <CaixaLaranjaLink text={[<br/>,'Investigar outras causas da lesão',<br/>,<br/>]} link='/hans1'/>
                            </div>
                            
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                </div>
                                <CaixaBranca text='Confirmado para Hanseníase'/>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                                    <CaixaLaranjaLink text={['- Classificar PB',<sup>**</sup>,'ou MB',<sup>***</sup>,<br/>,
                                                    '- Requisitar exame baciloscopia 10% dos casos MB;',<br/>,
                                                    '- Examinar contatos durante 5 anos - Notificar;',<br/>,
                                                    '- Avaliargraude incapacidade;',<br/>,
                                                    '- Classificar reação.']} link='/hans1'/>
                                </div>
                                
                            </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4" >
                            <h4 className="legend" style={{"fontSize": "80%"}}>Legenda:</h4>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>ACS:</strong>Agente comunitário de saúde</p>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>PB:</strong>Paucibacilar</p>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>MB:</strong>Multibacilar</p>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><sup>*</sup>Lesões ou áreas de pele com redução de sensibilidade térmica, tátil e/ou dolorosa , assim como comprometimento neural</p>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><sup>**</sup>Lesões de pele localizadas em uma região anatômica e/ou tronco nervoso comprometido</p>
                                <p className="legend mb-0" style={{"fontSize": "80%"}}><sup>***</sup>Lesões de pele localizadas em mais de uma região anatômica e/ou tronco nervoso comprometido</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                        <p className="float-right mt-2">Última atualização: 13 de Abril de 2023</p>
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

export default hanseniase0;
