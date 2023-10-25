import { Col, Row } from "reactstrap";
import Indicadores from "../components/dashboard/Indicadores";


import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/idtnp.jpg";
import bg2 from "../assets/images/bg/hans.jpg";
import bg3 from "../assets/images/bg/moto.jpg";
import bg4 from "../assets/images/bg/map.png";

const BlogData = [
  {
    image: bg1,
    title: "Dados sobre Agravos IDNTP",
    subtitle: "2 comentários, 1 Like",
    description:
      "Dados de Incidência e Mortalidade de Agravos Segundo do IDNTP.",
    btnbg: "warning",
    href: "/idtnp"
  },
  {
    image: bg2,
    title: "Agravos de Hanseníase",
    subtitle: "2 comentários, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "warning",
    href: "/hanschart"
  },
  {
    image: bg3,
    title: "Agravos de Acidente de Trânsito.",
    subtitle: "2 comentários, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "warning",
    href: "/transito"
  },
  {
    image: bg4,
    title: "Dados Geoprocessados",
    subtitle: "2 comentários, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "warning",
    href: "/mapas"
  },
];

const Starter = () => {
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

      <Row>
        <Col lg="12">
          <Indicadores />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
