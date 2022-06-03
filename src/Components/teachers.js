import { FaArrowRight } from 'react-icons/fa'
import "../Styles/style_teacher.css"

function Teachers() {
    return(
        <div className="container">
            <div className="container_1">
                <div className="row">
                    <h1 className="h1_title">Nauczyciele, którzy prowadzą nasz kursy</h1>
            </div>
                <div className="row">
                    <div className="teacher">
                        <img src={require('../image/teacher1.png')} />
                    </div>
                    <div className="teacher">
                        <img src={require('../image/teacher2.png')} />
                    </div>
                    <div className="teacher">
                        <img src={require('../image/teacher3.png')} />
                    </div>
                </div>
                <div className="row">
                    <h1 className="h1_button">Poznaj naszychy innych nauczycieli</h1>
                </div>
                <div className="row">
                    <div className="row background_color_orange">
                        <div>Zapisz się na lekcję próbną</div>
                        <div className="arrow"><FaArrowRight/></div>
                        <div>Zapisz się już teraz</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Teachers;