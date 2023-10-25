
import CaixaAzul from "../../components/CaixaAzul";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import LinhaVert from "../../components/LinhaVert";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "200%",
  
  };

const Turb2 = () => {
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
                                <h1 style={fontStyle}>Fluxograma da atenção secundária a pacientes com tuberculose no Estado do Piauí.<a href="#a" id="" className="" target="_self" title="Pacientes com sinais e sintomas sugestivos de Calazar"><i className="fas fa-info-circle align-top"></i></a></h1>
                                <br/>
                            </div> 
                        </div>
                        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
                            <div className="row">
                                <div className="col">
                                    <InicioVerde unid='ATENÇÃO SECUNDÁRIA'/>
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
                                        <LinhaHoriz />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <SetaAbaixoCurta/>
                                    <CaixaAzul text={["Atenção Ambulatorial"]}/>
                                    <SetaAbaixoCurta/>
                                    <CaixaCinza text={['- Requisitar baciloscopia;', <br/>, <br/>,
                                                        '- Realizar exames requisitados pela atenção secundária.']}/>
                                    <SetaAbaixoCurta/>
                                    <CaixaLaranjaLink text='Fornecer resultado ao solicitante.' link='/Turb3' />
                                </div>
                                                                    
                                <div className="col-6">
                                    <SetaAbaixoCurta/>
                                    <CaixaAzul text='Atenção Hospitalar' />
                                    <SetaAbaixoCurta/>
                                    <CaixaCinza text={['- Internar e tratar caso de complexidade moderada e efeitos adversos maiores;', <br/>, <br/>,
                                                        '- Regular para referência terciária paciente com qualquer resistência e/ou piora clinica.']} />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <LinhaVert />
                                    <SetaAbaixoCurta />
                                </div>


                                <div className="col-3">
                                    <SetaAbaixoCurta />
                                    <CaixaAzul text='Ambulatório especializado – receber paciente regulado da atenção primária.'/>
                                    <SetaAbaixoCurta />
                                    <CaixaCinza text={['- Avaliação médica ou de enfermagem;',<br/>,
                                                        '- Avaliar casos suspeitos de Tb pulmonar escarro negativo;',<br/>,
                                                        '- Solicitar exames complementares;',<br/>,
                                                        '- Diagnosticar formas de TB extrapulmonar;',<br/>,
                                                        '- Tratar reação e/ou efeitos adversos maiores, ',<br/>,
                                                        '- Tratar casos coinfecção Tb-HIV de classificação de risco moderada;',<br/>,
                                                        '- Decidir sobre prolongamento de 2a fase de tratamento;',<br/>,
                                                        '- Solicitar internação quando indicado.']} 
                                                        tam='80%'/>

                                    <LinhaVert />
                                    <SetaAbaixoCurta />
                                </div>
                                

                            </div>

                            <CaixaLaranjaLink text={['-Contrar-referenciar para atenção primária com procedimentos realizados, bem como eventuais necessidade de continuidade do cuidado;',<br/>,
                            '-Regular para atenção terciária caso com coinfecção grave, multirresistência, Tb meningoencefálica grave, sinais de insuficiência respiratória']} 
                            link='/Turb3'/>
                            
                            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                                <p className="float-right mt-2">Última atualização: 28 de Junho de 2023</p>
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

export default Turb2;
