import ObitosChart from "../../components/dashboard/ObitosChart";
import LetalidadeChart from "../../components/dashboard/LetalidadeChart";
import AgravosChart from "../../components/dashboard/AgravosAChart";
import AgravosAChart from "../../components/dashboard/AgravosAChart";
import CompulsoriaChart from "../../components/dashboard/CompulsoriaChart";
import CompulsoriaAChart from "../../components/dashboard/CompulsoriaAChart";
import { Card, CardBody } from "reactstrap";
import { Col, Row } from "reactstrap";

const IDTNP = () => {
  

  return (
    <div>

      <Row>
                <Col>
                      <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Covid-19 no Mundo</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            Até 2022
                          </CardSubtitle> */}
                          <LetalidadeChart />
                        </CardBody>
                      </Card>
                </Col>


                <Col>
                  <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Acidentes de Moto no Brasil</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            2023
                          </CardSubtitle> */}
                          <ObitosChart />
                        </CardBody>
                  </Card>
                </Col>
      </Row>

      <Row>
                <Col>
                      <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Covid-19 no Mundo</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            Até 2022
                          </CardSubtitle> */}
                          <AgravosChart />
                        </CardBody>
                      </Card>
                </Col>


                <Col>
                  <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Acidentes de Moto no Brasil</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            2023
                          </CardSubtitle> */}
                          <CompulsoriaChart />
                        </CardBody>
                  </Card>
                </Col>
      </Row>
      
      <Row>
                <Col>
                      <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Covid-19 no Mundo</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            Até 2022
                          </CardSubtitle> */}
                          <AgravosAChart />
                        </CardBody>
                      </Card>
                </Col>


                <Col>
                  <Card>
                        <CardBody>
                          {/* <CardTitle tag="h5">Incidência de Acidentes de Moto no Brasil</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                            2023
                          </CardSubtitle> */}
                          <CompulsoriaAChart />
                        </CardBody>
                  </Card>
                </Col>
      </Row>
      
      
     
    </div>
  );
};

export default IDTNP;
