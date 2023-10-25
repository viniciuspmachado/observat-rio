import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaBrancaLink from "../../components/CaixaBrancaLink";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";


const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Calazar5 = () => {
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
                <h1 style={fontStyle}>Pacientes com sinais e sintomas sugestivos de Calazar<i className="fas fa-info-circle align-top"></i></h1>
                <br/>
                <h1 style={fontStyle}>Nova Recidiva Após 6 Meses</h1>
                <br/>
            </div>
        </div>
        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                <InicioVerde unid={["Atenção Primária", <br />]}
                            nome={["Nova Recidiva Após 6 Meses"]}
                />
                    
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <span className="vertical-line arrow-bottom">.</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="offset-3 col-6 n-pad">
                    <div className="d-flex justify-content-center">
                    <LinhaHoriz/>
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
                    <CaixaBranca text='Sim'/>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                            <CaixaCinza text="Recidiva Tardia Subsequente"/>                           
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    <CaixaAzul text="Fazer Terapia Combinada para Calazar (ANFB L com SBv ou Pentamidina (P) e Teste de Sensibilidade de Drogas)"/>

                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                        </div>
                    </div>
                    <CaixaBranca text='Infecção pelo HIV'/>
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-3 col-6 n-pad">
                            <div className="d-flex justify-content-center">
                            <LinhaHoriz/>
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
                            <CaixaBranca text='Sim'/>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom ">.</span>
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <CaixaCinza text="Solicitar Contage de Células CD4+ ou CV"/>
                                </div> 
                                
                                                          
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom ">.</span>
                                    </div>
                                    
                                </div>
                                
                                <div className="offset-3 col-6 n-pad">
                                    <div className="d-flex justify-content-center">
                                    <LinhaHoriz/>
                                    </div>
                                </div>
                                
                                <div className="col-6">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <CaixaBranca tam='80%' text='CD4+ menor ou igual 350/mm3 Ou CV Detectável'/>
                                    </div>
                                    
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom blue line-md">.</span>
                                        </div>
                                    </div>
                                    <CaixaAzul tam='60%' text="Aconselhamento e Revisão da TARV"/>

                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom blue line-md">.</span>
                                        </div>
                                    </div>
                                    <CaixaAzul tam='60%' text="Manter Profilaxia Secundária para Calazar a cada 15 Dias"/>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom blue line-md">.</span>
                                        </div>
                                    </div>
                                    <CaixaLaranja tam='80%' text="Acompanhar Função Renal"/>
                                </div>

                                <div className="col-6">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <CaixaBranca tam='80%' text='CD4+ maior que 350/mm3 Ou CV Indetectável'/>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <span className="vertical-line arrow-bottom blue line-md">.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CaixaAzul tam='65%' text="Indicar Esplenectomia"/>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <span className="vertical-line arrow-bottom blue line-md">.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CaixaAzul tam='65%' text="Manter Profilaxia Secundária para Calazar a cada 15 Dias"/>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <span className="vertical-line arrow-bottom blue line-md">.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <CaixaLaranja tam='80%' text="Acompanhar Função Renal"/>
                                    
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
                            
                            <CaixaBranca text='Não'/>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom arrow-before">.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <CaixaCinza text="companhamento Semestralmente no Ambulatório de Calazar por Tempo Inderminado"/>
                            </div> 
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom ">.</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <CaixaAzul text="Indicar Esplenectomia"/>
                                </div>
                                                          
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom ">.</span>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <CaixaAzul text="Manter Profilaxia Secundária para Calazar a cada 15 Dias"/>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom blue line-md">.</span>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <CaixaLaranja text="Acompanhar Função Renal"/>
                                </div>

                                
                                
                                
                                

                               


                            </div>
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
                    <CaixaBranca text='Não'/>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                        <CaixaCinza text="Infecção pelo HIV"/>   
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-center">
                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="offset-3 col-6 n-pad">
                                <div className="d-flex justify-content-center">
                                <LinhaHoriz/>
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
                                <CaixaBranca text='Sim'/>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom">.</span>
                                        </div>
                                    </div>
                                </div>
                                <CaixaLaranja text="Acompanhamento Semestralmente no Ambulatório de Calazar por Tempo Inderminado"/>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom arrow-before">.</span>
                                        </div>
                                    </div>
                                </div>
                                <CaixaBranca text='Não'/>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-center">
                                            <span className="vertical-line arrow-bottom">.</span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className="col-12">
                                    <CaixaLaranja text="Acompanhar Semestralmente no Ambulatório de Calazar Indefinidamente"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    

                </div>

            </div>
            </div>
            <div className="row">
                <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4" >
                    <h4 className="legend" style={{"fontSize": "80%"}}>Legenda:</h4>
                        <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>Manejo inicial:</strong> medidas iniciais no local de primeiro atendimento até o paciente ser encaminhado para receber o tratamento completo em outro ponto assistencial</p>
                        <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>Planejamento terapêutico:</strong> medidas realizadas no ponto assistencial em que não há necessidade de transferência para outro local</p>
                </div>
            </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <CaixaBrancaLink text="Início" link="/Calazar1"/>
                <p className="float-right mt-2">Última atualização: 13 de Junho de 2023</p>
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

export default Calazar5;
