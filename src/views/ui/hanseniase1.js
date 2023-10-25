import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";
import LinhaAbaixoLonga from "../../components/LinhaAbaixoLonga";
import LinhaHorizLarga from "../../components/LinhaHorizLarga";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const hanseniase1 = () => {
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
                    <InicioVerde unid={["Atenção Primária", <br />]}/>
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
                    <CaixaAzul text='Avaliar Grau de incapaciade'/>
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
                            <CaixaCinza text='Grau de incapacidade 1 ou 2'/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <div className="row">
                                <div className="offset-3 col-12 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <LinhaHorizLarga/>
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
                                        <CaixaAzul tam='80%' text='Necessidade de prótese, órtese e/ou pelo menos auxiliares de locomoção'/>
                                        <SetaAbaixoCurta/>
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <CaixaAzul tam='80%' text={[<br/>,'',<br/>,'Necessidade de cirurgia reabilidadora',<br/>,'',<br/>]}/>
                                        <SetaAbaixoCurta/>
                                    </div>
                                    <div className="offset-3 col-6 n-pad">
                                        <div className="d-flex justify-content-center">
                                            <LinhaHoriz/>
                                            
                                        </div>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <SetaAbaixoCurta/>
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
                            <CaixaCinza text='Grau zero - sem incapacidade'/>
                            <div className="col-12">
                                <LinhaAbaixoLonga/>
                                <LinhaAbaixoLonga/>
                            </div>
                            <div className="col-24">
                            <LinhaHorizLarga/>
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
                    <CaixaAzul text='Identificar episódio de reação'/>
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
                            <CaixaBranca text='Ausente'/>
                            <SetaAbaixoCurta/>
                            <CaixaLaranja text="Tratar com PQTU: esquema PB 6 doses; esquema MB 12 doses"/>
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
                                        <CaixaAzul  text='Ausência de Reação'/>
                                        <SetaAbaixoCurta/>
                                        <CaixaLaranja tam="80%" text="-Alta por cura; Orientar reações por alta; -Avaliar grau de incapacidade; - Notificar alta."/>
                                    </div>
                                    
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex justify-content-center">
                                                    <span className="vertical-line arrow-bottom arrow-before">.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <CaixaAzul text='Reação hânsenica ou adversa durante ou após PQTU'/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        {/*<div className="offset-6 col-6 n-pad">
                                                <div className="d-flex justify-content-center">
                                                    <LinhaHorizLarga/>
                                            </div>
                                        </div>*/}
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <LinhaAbaixoLonga/>
                                        <div className="col-12">
                                            <div className="d-flex justify-content-center">
                                                <span className="vertical-line arrow-bottom">.</span>
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
                            <CaixaBranca text='Presente'/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            {/*<div className="offset-1 col-6 n-pad">
                                                <div className="d-flex justify-content-center">
                                                    <LinhaHorizLarga/>
                                                </div>
                            </div>*/}
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <LinhaAbaixoLonga/>
                            <SetaAbaixoCurta/>
                            
                        </div>
                    </div>


                    
               
            </div>
            <CaixaLaranjaLink text={["Regular para atenção sencudária caso com complicação moderada necessidade de prótese, órtese ou meios auxiliares de locomoção",
                                <br/>,'',<br/>,
                                "Regular para atenção terciária caso com complicação grave ou indicação cirúrgica"]} link='/hans2'/> 
              
            </div>
            <div className="row">
                <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4" >
                    <h4 className="legend" style={{"fontSize": "80%"}}>Legenda:</h4>
                        <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>Manejo inicial:</strong> medidas iniciais no local de primeiro atendimento até o paciente ser encaminhado para receber o tratamento completo em outro ponto assistencial</p>
                        <p className="legend mb-0" style={{"fontSize": "80%"}}><strong>Planejamento terapêutico:</strong> medidas realizadas no ponto assistencial em que não há necessidade de transferência para outro local</p>
                </div>
            </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <p className="float-right mt-2">Última atualização: 14 de Junho de 2023</p>
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

export default hanseniase1;
