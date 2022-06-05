import "../Styles/style_footer.css"
import "../Styles/main.css"
import { FaInstagram,FaFacebookSquare,FaTiktok,FaYoutubeSquare} from 'react-icons/fa'
function Footer(){
    return (
        <div className="container">
            <div className="row_footer">
                <div className="logo_footer">
                    <img src={require('../image/logo1.png')} alt="logo"/>
                </div>
                <div className="links">
                    <a href="/#"> Strona główna </a>
                    <a href="/#"> Nasze kursy</a>
                    <a href="/#"> Nauczyciele</a>
                    <a href="/#"> Cennik</a>
                    <a className="blue-btn" href="/#" > Dołącz do nas</a>
                </div>
                <div className="media">
                    <FaYoutubeSquare/>
                    <FaInstagram/>
                    <FaFacebookSquare/>
                    <FaTiktok/>
                </div>
            </div>
        </div>
    );
}
export default Footer;