
import { HansDash } from "../../components/dashboard/HansDash";
import { Bubbles } from "../../components/dashboard/Bubbles";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Col, Row } from "reactstrap";

const HansChart = () => {
  

  return (
    <div>
      
      <Row>
          <Col>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Hanseníase por Faixa Etária</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      Até 2022
                    </CardSubtitle>
                    <HansDash />
                  </CardBody>
                </Card>
          </Col>

          <Col>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Hanseníase no Mundo</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      Até 2022
                    </CardSubtitle>
                    <Bubbles />
                  </CardBody>
                </Card>
          </Col>

      </Row>
      
      
      
    </div>
  );
};

export default HansChart;
