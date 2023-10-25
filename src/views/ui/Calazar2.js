import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Calazar2 = () => {
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
            </div>
        </div>
        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                    <InicioVerde unid={["Atenção Primária", <br />]}
                                        nome={["Investigar presença FR para morte"]}
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
                    <CaixaBranca text='Pelo menos um FR' />
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <CaixaCinza text={['Procecer Teste Rápido (TR)',<br/>,'Imunicromatográfico']}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    <CaixaBranca text='Infecção por HIV'/>
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
                            <div className="col-12">
                                <CaixaBranca text='Sim'/>  
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
                            <CaixaCinza text={['ANFB 14 Dias+',<br/>,'Terapia anti-retroviral (TARV)']}/>
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom">.</span>
                                    </div>
                            </div>
                            </div>
                                <CaixaLaranjaLink text="Alta Hospitar e encaminhamento para ambulatório de Leishmanioses" link='/calazar3'/>
                            
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom arrow-before">.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                            <CaixaBranca text='Não'/> 
                            </div>
                            
                            
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-center">
                                        <span className="vertical-line arrow-bottom blue line-md">.</span>
                                    </div>
                                </div>
                            </div>
                            <CaixaAzul text={['',<br/>,'Presença de outra',<br/>,'Imunodeficiência',<br/>,'',<br/>]}/>
                           
                            <div className="row">
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
                                        <CaixaBranca text='Sim'/>  
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <SetaAbaixoCurta/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">                        
                                        <div className="col-12">
                                            <CaixaCinza text={['ANFB 14 Dias+']}/>
                                        </div>
                                        
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <SetaAbaixoCurta/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <CaixaLaranjaLink tam="60%" text="Alta Hospitar e encaminhamento para ambulatório de Leishmanioses" link='/calazar3'/>
                                            </div>
                                        
                                    </div>
                                    
                                </div>

                                <div className="col-6">
                                    <div className="col-12">
                                        <SetaAbaixoCurta/>
                                    </div>
                                    <div className="col-12">
                                        <CaixaBranca text='Não'/>   
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                               <SetaAbaixoCurta/>
                                            </div>
                                        </div>
                                    </div>   
                                    <div className="col-12">
                                        <CaixaCinza text='ANFB 7 Dias'/>
                                    </div> 
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <SetaAbaixoCurta/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            
                                        <CaixaLaranjaLink tam="60%" text="Alta Hospitar e encaminhamento para ambulatório de Leishmanioses" link='/calazar3'/>
                                        </div>
                                    </div>
                                
                                    
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            
                            
                           
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
                   
                   <CaixaBranca text="Nenhum FR"/>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom">.</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <CaixaBranca text="Planejamento Terapeutico"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                   <SetaAbaixoCurta/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <CaixaCinza text="Tratar com antimonial pentavalente SBv"/>  
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <span className="vertical-line arrow-bottom arrow-before">.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12">
                    <CaixaLaranjaLink text="Alta Hospitar e encaminhamento para ambulatório de Leishmanioses" link='/calazar3'/>
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

export default Calazar2;
