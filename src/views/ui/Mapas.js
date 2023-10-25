import Mundo from "../../components/dashboard/Mundo";
import Brasil from "../../components/dashboard/Brasil";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Col, Row } from "reactstrap";


const Mapas = () => {
  

  return (
    <div>
      
      <Row>
          <Col>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Covid-19 no Mundo</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      Até 2022
                    </CardSubtitle>
                    <Mundo />
                  </CardBody>
                </Card>
          </Col>


          <Col>
            <Card>
                  <CardBody>
                    <CardTitle tag="h5">Incidência de Acidentes de Moto no Brasil</CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                      2023
                    </CardSubtitle>
                    <Brasil />
                  </CardBody>
            </Card>
          </Col>
      </Row>
      
      
      
      
      
    </div>
  );
};

export default Mapas;
