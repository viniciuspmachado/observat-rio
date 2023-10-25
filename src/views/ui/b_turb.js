import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { Col, Row } from "reactstrap";

import bi1 from "../../assets/images/boletins/b1-fig1.png";
import bi2 from "../../assets/images/boletins/b1-fig2.png";
import bi3 from "../../assets/images/boletins/b1-fig3.png";
import bi4 from "../../assets/images/boletins/b1-fig4.png";
import bi5 from "../../assets/images/boletins/b1-fig5.png";
import bi6 from "../../assets/images/boletins/b1-fig6.png";
import bi7 from "../../assets/images/boletins/b1-fig7.png";

const b_turb = () => {
  

  return (
    <div>

      <Row>
                <Col>
                      <Card>
                        <CardBody>
                          <CardTitle tag="h5">Taxa de incidência (por 100.000 habitantes) de tuberculose de todas as formas clínicas em menores de 15 anos no estado Piauí.</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                           <img src={bi1} alt="fig1" width="100%"/> 
                        </CardBody>
                      </Card>
                </Col>


                <Col>
                  <Card>
                        <CardBody>
                          <CardTitle tag="h5">Situação sociodemográfica dos casos de tuberculose por sexo de todas as formas clínicas em menores de 15 anos no estado Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
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
                          <CardTitle tag="h5">Situação sociodemográfica dos casos de tuberculose por raça de todas as formas clínicas em menores de 15 anos no estado Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                          <img src={bi3} alt="fig3" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>


                <Col>
                <Card>
                        <CardBody>
                          <CardTitle tag="h5">Situação sociodemográfica dos casos de tuberculose por faixa etária (todas as formas clínicas) em menores de 15 anos no estado Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                          <img src={bi4} alt="fig4" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>
      </Row>
      
      <Row>
                <Col>
                <Card>
                        <CardBody>
                          <CardTitle tag="h5">Situação de encerramento dos casos de tuberculose em menores de 15 anos no estado Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                          <img src={bi5} alt="fig5" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>


                <Col>
                <Card>
                        <CardBody>
                          <CardTitle tag="h5">Situação de encerramento dos casos de tuberculose em menores de 15 anos no estado Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                          <img src={bi6} alt="fig6" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>
      </Row>

      <Row>
                <Col>
                <Card>
                        <CardBody>
                          <CardTitle tag="h5">Infográfico casos de tuberculose em menores de 15 anos (todas as formas), Piauí</CardTitle>
                          <CardSubtitle className="text-muted" tag="h6">
                          2011 a 2021
                          </CardSubtitle>
                          <img src={bi7} alt="fig7" width="100%"/> 
                        </CardBody>
                  </Card>
                </Col>


      </Row>
      
      
     
    </div>
  );
};

export default b_turb;
