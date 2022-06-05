import { FaArrowRight } from 'react-icons/fa'
import "../Styles/style_teacher.css"
import "../Styles/main.css"

function Teachers() {
    return(
        <div className="container">
            <div className="container_1">
                <div className="row">
                    <h1 className="h1_title">Nauczyciele, którzy prowadzą nasz kursy</h1>
            </div>
                <div className="row">
                    <div className="teacher">
                        <img src={require('../image/teacher1.png')} alt="nauczyciel 1" />
                    </div>
                    <div className="teacher">
                        <img src={require('../image/teacher2.png')} alt="nauczyciel 2" />
                    </div>
                    <div className="teacher">
                        <img src={require('../image/teacher3.png')} alt="nauczyciel 3b"/>
                    </div>
                </div>
                <div className="row">
                    <h1 className="h1_button">Poznaj naszychy innych nauczycieli</h1>
                </div>
                <div className="row">
                    <div className="row background_color_orange">
                        <div className="white_word">Zapisz się na lekcję próbną</div>
                        <div className="arrow"><FaArrowRight/></div>
                        <div className="blue_button_uppercase">Zapisz się już teraz</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Teachers;