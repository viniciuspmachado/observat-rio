import { Card, CardBody, CardTitle, CardSubtitle, Table, Badge, Row, Col } from "reactstrap";
import { GraphLines }  from "../../components/dashboard/GraphLines";
import user1 from "../../assets/images/users/u_trans.png";
import user2 from "../../assets/images/users/u_turb.png";
import user3 from "../../assets/images/users/u_hans.png";
import user4 from "../../assets/images/users/u_chagas.png";
import user5 from "../../assets/images/users/u_calazar.jpg";
import user6 from "../../assets/images/users/u_leish.png";


const tableData = [
  {
    avatar: user1,
    name: "Acidentes de Transito",
    email: "Piauí",
    project: "Normal",
    graph: "1",
    badgeColor: "primary",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Tuberculose",
    email: "Piauí",
    project: "Boa",
    badgeColor: "success",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanseníase",
    email: "Nordeste",
    project: "Baixa",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Doença de Chagas",
    email: "Brasil",
    project: "Boa",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Calazar",
    email: "Piauí",
    graph: "1",
    project: "Normal",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user6,
    name: "Leishmaniose",
    email: "Piauí",
    project: "Baixa",
    badgeColor: "success",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const Indicadores = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Indicadores</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Números Absolutos
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Situação</th>

                <th>Status</th>
                <th>Casos</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                    {tdata.graph === "1" ? (
                    <Row><Col sm="9"><Card><CardBody><GraphLines /></CardBody></Card></Col></Row>
                    ) : (<spam></spam>)}
                  </td>
                  <td><h4>  {tdata.badgeColor === "primary" ? (
                    <Badge color="primary">{tdata.project}</Badge>
                    ) : tdata.badgeColor === "success" ? (  
                    <Badge color="success">{tdata.project}</Badge>
                    ) : (<Badge color="warning">{tdata.project}</Badge> )
                  }
                  </h4></td>
                  
                  <td>
                    {tdata.status === "pending" ? (
                    <span className="p-2 d-inline-block ms-2"><i class="bi bi-arrow-up-circle-fill" style={{"color": "red"}}></i></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 d-inline-block ms-2"><i class="bi bi-arrow-down-circle-fill" style={{"color": "green"}}></i></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                </tr>
                
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Indicadores;
