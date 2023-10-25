
import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaBrancaLink from "../../components/CaixaBrancaLink";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Chagas4 = () => {
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
                                <h1 style={fontStyle}>Fluxograma de atenção secundária a pacientes com doença de Chagas no estado do Piauí (parte 4)<a href="#a" id="" className="" target="_self" title="Pacientes com sinais e sintomas sugestivos de Calazar"><i className="fas fa-info-circle align-top"></i></a></h1>
                                <br/>
                            </div> 
                        </div>
                        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
                            <div className="row">
                                <div className="col">
                                    <InicioVerde unid='ATENÇÃO SECUNDÁRIA' nome='Confirmação diagnóstica DCC'/>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <SetaAbaixoCurta />
                                </div>
                            </div>

                            <div className="row">
                                <CaixaBranca text='Notificação de caso suspeito de DCA' />
                                <SetaAbaixoCurta />
                                <CaixaCinza text='Exames Sorológicos' />
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
                                    <CaixaAzul text="Dois Testes Reagentes"/>
                                    <SetaAbaixoCurta/>
                                    <CaixaCinza text='Chagas Crônico' />
                                    <SetaAbaixoCurta/>
                                    <CaixaLaranja text='Exames para determinação da forma crônica: ECG e Rx tórax, esôfago e cólon e coinfecção por HIV.'/>
                                </div>
                                                                    
                                <div className="col-6">
                                    <SetaAbaixoCurta/>
                                    <CaixaAzul text='Apenas um método reagente' />
                                    <SetaAbaixoCurta/>
                                    <CaixaCinza text='Repetir sorologia nos dois métodos' />
                                    <SetaAbaixoCurta/>
                                    <CaixaAzul text='Resultado Inconclusivo' />
                                    <SetaAbaixoCurta/>
                                    <CaixaLaranja text={['Retroalimentar os resultados', <br/>,'para atenção primária']} />
                                </div>


                                <div className="col-3">
                                    <SetaAbaixoCurta />
                                    <CaixaLaranja text='Negativo' />
                                </div>
                            </div>

                            
                            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                                <CaixaBrancaLink text='Parte 5' link='/Chagas5'/>
                                <p className="float-right mt-2">Última atualização: 22 de Março de 2023</p>
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

export default Chagas4;
