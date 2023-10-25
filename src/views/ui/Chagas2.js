
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
                            <SetaAbaixoCurta />
                            <CaixaAzul text={['Há suspeita clínica',<br />, 'Habitar em domicílio com barbeiro infectado']} />
                        </div>
                                                            
                        <div className="col-6">
                            <SetaAbaixoCurta />
                            <CaixaAzul text='Demanda espontânea (campanha, orientação área de risco) etc.' />
                           <SetaAbaixoCurta/>
                            <CaixaCinza text='Avaliação médica com classificação de risco'/>

                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta/>
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
                                    
                                    <div className="col">
                                        <CaixaBranca text='Suspeita de caso crônico (DCC)' />
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <SetaAbaixoCurta/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <CaixaAzul text={["Requisitar exame",<br/>, "sorológico",<br/>,"coletar material",<br/>, "e enviar ao laboratório"]}/>
                                        
                                    </div>
                                    <SetaAbaixoCurta/>
                                </div>

                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <SetaAbaixoCurta/>
                                        </div>
                                    </div>
                                    
                                    <div className="col">
                                        <CaixaBranca text='Suspeita de caso agudo (DCA)'/>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <SetaAbaixoCurta/>
                                        </div>
                                    </div>
                                    <CaixaAzul text='Requisitar exame parasitológico e sorológico, coletar mateial e enviar ao laboratório'/>
                                    <SetaAbaixoCurta/>
                                </div>
                                
                            </div>

                            <div className="row">
                                <div className="offset-3 col-6 n-pad">
                                    <div className="d-flex justify-content-center">
                                       <LinhaHoriz/>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className="col-3">
                            <div className="d-flex justify-content-center">
                                <SetaAbaixoCurta/>
                            </div>
                                <CaixaAzul text={[' Procedente de triagem e reagente para T. cruzi em bancos de sangue',
                                                <br/>,
                                                'Gestante, puérperas , nutrizes e RN de área endêmica/vulnerável',
                                                <br/>,
                                                'Vínculo epidemiológico'
                                            ]}
                                />
                        </div>
                        
                    </div>
                    
                        
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="row">
                        <CaixaCinza text='Resultados' />
                        <SetaAbaixoCurta />
                        <div className="offset-1 col-9 n-pad mg-lf">
                            
                            <div className="d-flex justify-content-start">
                               <LinhaHoriz/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                            <div className="col">
                                <CaixaBranca text='Não Reagente'/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <SetaAbaixoCurta/>
                            </div>
                            <CaixaLaranja text={['Encerrar o caso, arquivamento das informações e pesquisar outras causas de infecção.',
                                                <br/>,
                                                'Informar ao paciente']} 
                            
                            
                            />
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                            <div className="col">
                                <CaixaBranca text='Inconclusivo'/>
                            </div>
                            <SetaAbaixoCurta />
                            <CaixaLaranjaLink text='Avaliação clínica e tratamento dos sinais e sintomas e/ou pesquisar outras causas de infecção' link="/chagas3"/>
                        </div>

                        <div className="col-3">
                            <SetaAbaixoCurta />
                            <div className="col">
                                <CaixaBranca text='Reagente'/>
                            </div>
                            <SetaAbaixoCurta />
                            
                            <CaixaLaranjaLink text={['Avaliar os casos com resultados reagentes;',
                                                <br/ >,
                                                '',
                                                <br/>,
                                                ' Notificar/investigar e tratar resultado positivo de exame parasitológico como DCA;',
                                                <br/ >,
                                                '',
                                                <br/>,
                                                'Para caso com exame sorológico reagente e/ou indeterminado, notificar/investigar como DCC, tratar casos com complicações leves e fazer seguimento do paciente;',
                                                <br/ >,
                                                '',
                                                <br/>,
                                                ' Referenciar casos para atenção terciária do órgão afetado;',
                                                <br/ >,
                                                '',
                                                <br/>,
                                                'Se gestante com formas clínicas sintomáticas, encaminhar para referência de pré-natal de alto risco'
                                        ]}
                                        link="/chagas3"/>
                            
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

export default Chagas2;
