import { Link } from "react-router-dom";
/*import { ReactComponent as LogoDark } from "../assets/images/logos/materialpro.svg";*/

const Logo = () => {
  return (
    <Link to="/">
      <img alt="ciaten" src="logociaten.png" width="30%"></img>
      {/*<LogoDark/>*/}
    </Link>
  );
};

export default Logo;
