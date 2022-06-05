import "../Styles/main.css"
import "../Styles/style_logo.css"
function Logo(){
    return(
        <div className="container">
            <div className="row_logo">
                <div className="logo">
                    <img src={require('../image/logo1.png')} alt="logo"/>
                </div>
            </div>
        </div>
    );
}
export default Logo;