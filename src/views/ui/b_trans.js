import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Col, Row } from "reactstrap";

import bi1 from "../../assets/images/boletins/b2-fig1.png";
import bi2 from "../../assets/images/boletins/b2-fig2.png";
import bi3 from "../../assets/images/boletins/b2-fig3.png";

const IDTNP = () => {
  

  return (
    <div>

      <Row>
                <Col>
                      <Card>
                        <CardBody>
                          <CardTitle tag="h5">Taxa de mortalidade por acidentes de trânsito segundo sexo da vítima e ano do óbito. Piauí.</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2008 a 2018
                          </CardSubtitle>
                           <img src={bi1} alt="fig1" width="100%"/> 
                        </CardBody>
                      </Card>
                </Col>


                <Col>
                  <Card>
                        <CardBody>
                          <CardTitle tag="h5">Taxa de mortalidade por acidentes de trânsito segundo condição da vítima e ano do óbito. Piauí.</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2008 a 2018
                          </CardSubtitle>
                          <img src={bi2} alt="fig2" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>
      </Row>


      <Row>
                <Col>
                <Card>
                        <CardBody>
                          <CardTitle tag="h5">Variação percentual relativa (%) das taxas de mortalidade por acidentes de trânsito segundo tipo de vítima e território de desenvolvimento (TD). Piauí;</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2008 a 2018
                          </CardSubtitle>
                          <img src={bi3} alt="fig3" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>


      </Row>
      
      
     
    </div>
  );
};

export default IDTNP;
