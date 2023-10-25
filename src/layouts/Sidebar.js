import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
/*import user1 from "../assets/images/users/user4.jpg";*/
/*import probg from "../assets/images/bg/download.jpg";*/
import bedbug from "../assets/images/bedbug.png";
import dashbooard_img from "../assets/images/dashboard.png";
import mosquito from "../assets/images/mosquito.png";
/*import analise from "../assets/images/analise.png";*/
import skin from "../assets/images/skin.png";
import leish from "../assets/images/leish.png";
import pulm from "../assets/images/pulmao.png";
import report from "../assets/images/report.png"


const navigation = [
  {
    title: "Dashboards",
    href: "/starter",
    icon: dashbooard_img,
  },
  {
    title: "Boletins",
    href: "/boletins",
    icon: report,
  }

];

const nav_linhas = [
  {
    title: "Doença de Chagas",
    href: "/chagas1",
    icon: bedbug,
  },
  {
    title: "Calazar",
    href: "/calazar1",
    icon: mosquito,
  },
  {
    title: "Leishmaniose",
    href: "/Leish1",
    icon: leish,
  },
  {
    title: "Hanseníase",
    href: "/hans0",
    icon: skin,
  },
  {
    title: "Tuberculose",
    href: "/turb1",
    icon: pulm,
  }

];

const Sidebar = () => {
 /* const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };*/
  let location = useLocation();

  return (
    <div >
      <div className="d-flex align-items-center"></div>
      {/*}
          <div
            className="profilebg"
            style={{ background: `url(${probg}) no-repeat` }}
          >
            <div className="p-3 d-flex">
              <img src={user1} alt="user" width="50" className="rounded-circle" />
              <Button
                color="white"
                className="ms-auto text-white d-lg-none"
                onClick={() => showMobilemenu()} 
              >
                <i className="bi bi-x"></i>
              </Button>
            </div>
            <div className="bg-dark text-white p-2 opacity-75">Steave Rojer</div>
          </div>
      */}

      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav" style={{"background": "#f9ecb7"}} >

        <Button
            color="warning"
            tag="a"
            target="_blank"
            className="mt-3"
            disabled
          >
          Dados sobre Agravos
          </Button>

            {navigation.map((navi, index) => (
                  <NavItem key={index} className="sidenav-bg">
                      <Link
                        to={navi.href}
                        className={
                          location.pathname === navi.href
                            ? "active nav-link py-3"
                            : "nav-link text-secondary py-3"
                        }
                      >
                        <img alt="icon" src={navi.icon} width={"10%"}></img>
                        <span className="ms-3 d-inline-block">{navi.title}</span>
                      </Link>
                  </NavItem>
             ))}

              <Button
                  color="warning"
                  tag="a"
                  target="_blank"
                  className="mt-3"
                  disabled
                >
                Fluxos de Atenção
                </Button>

            {nav_linhas.map((navi, index) => (
                  <NavItem key={index} className="sidenav-bg">
                      <Link
                        to={navi.href}
                        className={
                          location.pathname === navi.href
                            ? "active nav-link py-3"
                            : "nav-link text-secondary py-3"
                        }
                      >
                        <img alt="icon" src={navi.icon} width={"10%"}></img>
                        <span className="ms-3 d-inline-block">{navi.title}</span>
                      </Link>
                  </NavItem>
             ))}
            
          <Button
            color="ciaten-warning"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://ciaten.org.br"
          >
            Sobre o CIATEN
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
