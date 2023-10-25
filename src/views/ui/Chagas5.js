import CaixaAzul from "../../components/CaixaAzul";
import CaixaBranca from "../../components/CaixaBranca";
import CaixaCinza from "../../components/CaixaCinza";
import CaixaLaranja from "../../components/CaixaLaranja";
import CaixaLaranjaLink from "../../components/CaixaLaranjaLink";
import InicioVerde from "../../components/InicioVerde";
import LinhaHoriz from "../../components/LinhaHoriz";
import SetaAbaixoCurta from "../../components/SetaAbaixoCurta";
import LinhaVert from "../../components/LinhaVert";

const fontStyle = {
    fontFamily:"rawline",
    fontSize: "230%",
  
  };

const Chagas5 = () => {
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
                <h1 style={fontStyle}>Fluxograma de atenção terciária a pacientes com doença de Chagas no estado do Piauí<a href="#a" id="" className="" target="_self" title="Pacientes com sinais e sintomas sugestivos de Calazar"><i className="fas fa-info-circle align-top"></i></a></h1>
                <br />
            </div> 
        </div>
        <section className="d-none d-block d-sm-none d-md-block d-lg-block d-xl-block mg-bm">
            <div className="row">
                <div className="col">
                    <InicioVerde nome='ESPECIALIZADA' unid='ATENÇÃO TERCIÁRIA' ></InicioVerde>
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
                    <CaixaAzul text='Digestiva' />
                    <SetaAbaixoCurta />
                    <CaixaLaranja text='Assistir casos com quadro clínico grave que requeira atenção terciária e contrarreferenciar casos leves para seguimento na atenção primária' />
                </div>
                                                    
                <div className="col-6">
                    <SetaAbaixoCurta />
                    <CaixaAzul text='Cardiaca' />
                    <SetaAbaixoCurta />
                    <CaixaCinza text='Tratar síndromes clínicas conforme diretrizes e promover recomendações de reabilitação cardíaca' />
                    <LinhaVert /><LinhaVert /><LinhaVert /><LinhaVert />
                </div>


                <div className="col-3">
                    <SetaAbaixoCurta />
                    <CaixaAzul text='Coinfecção/HIV' />
                    <SetaAbaixoCurta />
                    <CaixaLaranja text='Tratar em estabelecimento especializado em HIV  ' />
                </div>
                
            </div>
            
            <SetaAbaixoCurta />
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
                    <div className="col">
                        <CaixaBranca text='ICC' />
                    </div>
                    <SetaAbaixoCurta />
                    <CaixaLaranjaLink text='Tratar conforme diretriz específica' link='/chagas6'/>
                </div>

                <div className="col-3">
                    <SetaAbaixoCurta />
                    <CaixaBranca text='Taquiarritmias' />
                    <SetaAbaixoCurta />
                    <CaixaLaranjaLink text='Avaliação de antiarrítmicos e cardiodesfibriladores conforme diretrizes' link='/chagas6' />
                </div>

                <div className="col-3">
                    <SetaAbaixoCurta />
                    <CaixaBranca text='Bradiarritmias' />
                    <SetaAbaixoCurta />
                    <CaixaLaranjaLink text='Indicação de marcapasso conforme diretrizes' link='/chagas6' />
                </div>

                <div className="col-3">
                    <SetaAbaixoCurta />
                    <CaixaBranca text='Tromboembolismo' />
                    <SetaAbaixoCurta />
                    <CaixaLaranjaLink text='Seguir profilaxia (anticoagulante) conforme diretrizes' link='/chagas6' />
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

export default Chagas5;
