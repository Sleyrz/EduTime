import "../Styles/style_contact.css"
import "../Styles/main.css"
import {TextField} from "@mui/material";
function Contact(){
    return(
        <div className="container">
            <div className="row">
                <div className="teacher">
                    <img src={require('../image/teacher4.png')} alt="nauczyciel 4" />
                </div>
                <div className="formularz">
                    <form>
                    <div className="h2_contact">Jeśli masz pytania, śmiało do nas napisz</div>
                        <div className="row_1">
                            <div className="form_name">
                                <TextField fullWidth label="Imię" id="fullWidth" />
                            </div>
                            <div className="name_second">
                                <TextField fullWidth label="Nazwisko" id="fullWidth" />
                            </div>
                        </div>
                        <div className="row_1">
                            <TextField fullWidth label="E-mail" id="fullWidth" />
                        </div>
                        <div className="row_1">
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Treść wiadomości"
                                multiline
                                rows={4}
                                variant="outlined"
                            />                        </div>
                        <div className="row_1">
                            <input className="button_submit" type="submit" value="Wyślij"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;