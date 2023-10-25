import CaixaAzul from "../../components/CaixaAzul";
import CaixaBrancaLink from "../../components/CaixaBrancaLink";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";
import LinhaVert from "../../components/LinhaVert";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const hanseniase3 = () => {
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
                    <InicioVerde unid='ATENÇÃO TERCIÁRIA' ></InicioVerde>
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
                    <SetaAbaixoCurta />
                    <CaixaAzul text='Laboratório' />
                    <SetaAbaixoCurta />
                    <CaixaCinza text={['Realizar exames laboratoriais']} />
                    <SetaAbaixoCurta />
                    <CaixaLaranja text={['Informar resultado ao requisitante']} />
                </div>
                                                    
                <div className="col-6">
                    <SetaAbaixoCurta />
                    <CaixaAzul text='Atenção hospitalar' />
                    <SetaAbaixoCurta />
                    <CaixaCinza text={['- Internação',<br/>,
                                        '- Reabilitação Cirúrgica', <br/>,
                                        '- Cirrugia Reparadora'
                                    ]} />
                    <LinhaVert /><LinhaVert /><LinhaVert /><LinhaVert /><LinhaVert /><LinhaVert /><LinhaVert /><SetaAbaixoCurta />
                </div>


                <div className="col-3">
                    <SetaAbaixoCurta />
                    <CaixaAzul text={['Atenção ambulatorial especializado',<br/>,
                                        '- Receber paciente regulado da atenção primária e/ou secundária'
                                    ]} 
                                />
                    <SetaAbaixoCurta />
                    <CaixaCinza tam='80%' text={['-Avaliação Médica;',<br/>,
                                        '-Requisitar exames,',<br/>,
                                        '-Atendimento pré e pós- operatório;',<br/>,
                                        '-Diagnóstico em menores de 15 anos;',<br/>,
                                        '-Diagnóstico/acompanhamento de reações, neurites e recidiva',<br/>,
                                        '-Diagnosticar e monitorar resistência antimicrobiana.',<br/>
                                    ]} />
                    <LinhaVert />
                    <SetaAbaixoCurta />
                    
                </div>
            </div>
            
            <div className="offset-5 col-8 n-pad">
                    <CaixaLaranja text={[' Retroalimentar as atenções primária e/ou secundária com os procedimentos realizados, bem como eventuais necessidade de continuidade do cuidado']}/>
            </div>
            
          
            <div className="d-flex align-items-end flex-column bd-highlight mb-3 mg-tp">
                <CaixaBrancaLink text="Voltar ao Início" link="/hans0"/>
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

export default hanseniase3;
