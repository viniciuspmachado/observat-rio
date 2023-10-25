import CaixaAzul from "../../components/CaixaAzul";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";



const Asis = () => {
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
                <h1 className="main-title">ASIS e Suas Prioridades Sanitárias<i className="fas fa-info-circle align-top"></i></h1>
            </div> 
        </div>
        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                <InicioVerde unid={["Atenção Primária", <br />]}
                            nome={["ASIS"]}
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
                <div className="offset-1 col-9 n-pad mg-lf">
                    <div className="d-flex justify-content-start">
                        <LinhaHoriz/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-3">
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span>
                    </div>
                    <CaixaCinza text="1o. Levantamento de Dados"/>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <CaixaLaranja text="Rol de Indicadores Selecionados e Validados pelo GCE"/>
                </div>
                                                    
                <div className="col-6">
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span>
                    </div>
                    <CaixaCinza text="2o. Levantamento de Dados"/>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <CaixaLaranja text="Levantar e Fazer a Tabulação Preliminar dos Dados</span>"/>
                </div>
                <div className="col-3">
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span>
                    </div>
                    <CaixaCinza text="3a. Análise< da Informação"/>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Realizar a organização Textual da ASIS"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Identificar os Macroploblemas e suas Evidências"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Priorozação/Hierarquização dos Problemas e Necessidades de Saúde"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Agrupamento de Problemas por Núcleo de Sentidos"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Priorização dos Problemas Conforme Aplicação dos Critérios de Seleção"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaAzul text="Prioridades Sanitárias Definidas"/>
                    </div>
                    <div className="d-flex justify-content-center"><span className="vertical-line arrow-bottom">.</span></div>
                    <div className="d-flex justify-content-center">
                        <CaixaLaranja text="Definição das Diretrizes para PR"/>
                    </div>



                </div>
            </div>

            
            <div className="row">
                <div className="col d-flex align-items-start flex-column bd-highlight mb-3 mt-4">
                    <h4 className="legend">Legenda:</h4>
                        <p className="legend mb-0"><strong>Manejo inicial:</strong> medidas iniciais no local de primeiro atendimento até o paciente ser encaminhado para receber o tratamento completo em outro ponto assistencial</p>
                        <p className="legend mb-0"><strong>Planejamento terapêutico:</strong> medidas realizadas no ponto assistencial em que não há necessidade de transferência para outro local</p>
                </div>
            </div>
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <button id="goBack" className="btn btn-outline-primary float-right" value="Back" onclick="goBack()">voltar</button>
                <p className="float-right mt-2">Última atualização: 30 de Janeiro de 2023</p>
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

export default Asis;
