
import { Col, Row } from "reactstrap";
import {MotoChart} from "../../components/dashboard/MotoChart";
import {Carros} from "../../components/dashboard/Carros";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";


const Transito = () => {
  

  return (
    <div>
      <Row>
          <Col>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Acidentes de Moto no Piauí</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      Por Mês
                    </CardSubtitle>
                    <MotoChart />
                  </CardBody>
                </Card>
          </Col>


          <Col>
            <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Acidentes de Moto no Piauí</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      Por Mês
                    </CardSubtitle>
                    <Carros />
                  </CardBody>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default Transito;
