import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaBrancaLink from "../../components/CaixaBrancaLink";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Leish3 = () => {
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
                        <h1 style={fontStyle}>Fluxograma de atenção secundária a pacientes com Leishmaniose Tegumentar Americana no estado do Piauí<i className="fas fa-info-circle align-top"></i></h1>
                        <br/>
                    </div> 
                </div>
                <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
                    <div className="row">
                        <div className="col">
                            <InicioVerde unid={["Unidade de Atenção Secudária", <br />]}
                            />
                            
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12">
                           <SetaAbaixoCurta />
                           <CaixaCinza text='Paciente regulado da atenção básica' />
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
                            
                            <CaixaAzul text="Paciente com coinfecção LTA e HIV" />
                            <SetaAbaixoCurta />
                            <CaixaBranca text='Exames Complementares'/>
                            <SetaAbaixoCurta />
                            <CaixaAzul text="Exame direto, histopatológico, parasitológico indireto, diagnóstico molecular" />
                            <SetaAbaixoCurta />
                            <CaixaAzul text="Tratar conforme protocolo, sempre precedido de avaliação eletrocardiográfica, hepática, pancreática e renal, quando indicado" />
                            <SetaAbaixoCurta />

                            

                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>
                            
                            <CaixaAzul text="Paciente com LTA mucosa, cutânea ou mista" />
                            <SetaAbaixoCurta />
                            <CaixaBranca text='Exames Complementares'/>
                            <SetaAbaixoCurta />
                            <CaixaAzul text="Diagnóstico diferencial , parasitologia e histopatológico, quando indicado, PCR" />
                            <SetaAbaixoCurta />
                            <CaixaAzul text={["Tratar sempre precedido de avaliação eletrocardiográfica. hepática, pancreática e renal, quando indicado.", <br/>,<br/> ]}/>
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
                        <div className="col-12">
                            <SetaAbaixoCurta />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <CaixaLaranjaLink text='Contrarreferenciar casos clássicos para tratamento/seguimento na 
                                                    atenção primária e regular para atenção terciária a paciente com 
                                                    quadro grave que requer tratamento de alta complexidade, conforme protocolos' 
                                                    link='/Leish4'
                            />
                        </div>
                    </div>
                    
                </section>
                <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                    <CaixaBrancaLink text="Voltar ao Início" link="/Leish1"/>
                    <p className="float-right mt-2">Última atualização: 27 de Junho de 2023</p>
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

export default Leish3;
