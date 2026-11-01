import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
 return (
 <header>
  <div className="d-flex justify-content-center align-items-center mb-3 bg-info">
            <img
                src={logo}
                alt="Logo Tenis Ranking"
                className="img-fluid p-2"
                style={{ maxWidth: "120px", maxHeight: "120px" }}
            />

            <h1 className="display-4 fw-bold mb-0">
                Tenis Ranking 
            </h1>
        </div>

       
 </header>
);
}
export default Header;
