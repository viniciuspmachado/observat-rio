import { Col, Row } from "reactstrap";


import Blog from "../../components/dashboard/Blog";
import bg1 from "../../assets/images/bg/boletim1.png";
import bg2 from "../../assets/images/bg/boletim2.png";

const BlogData = [
  {
    image: bg1,
    title: "Contexto da tuberculose em menores de 15 anos no Piauí, 2011-2021",
    subtitle: "de Melo, Ivone V.",
    description:
      "VOL. 3| Nº4 Out-Dez 2022",
    btnbg: "warning",
    href: "/b_turb"
  },
  {
    image: bg2,
    title: "Morte por Lesões de Trânsito - Piauí",
    subtitle: "Mascarenhas, Márcio D. M., Rodrigues, Malvina T. P., de Sousa, Roniele A.",
    description:
      "Vol. 1, n. 1(jul./set. 2020)",
    btnbg: "warning",
    href: "/b_trans"
  },
  
];

const Boletins = () => {
  return (
    <div>
      {/***Top Cards***/}
      
      {/***Gráficos***/}
      {/* <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
          <LetalidadeChart />
          <ObitosChart />
          <AgravosChart />
          <CompulsoriaChart />
          <AgravosAChart />
          <CompulsoriaAChart />

        </Col>
        
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>

      </Row>
 */}

      {/***Tabela de Projetos ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}


      {/***Blog Cards***/}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
              href={blg.href}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Boletins;
