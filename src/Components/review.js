import "../Styles/style_review.css"
import "../Styles/main.css"
function Review(){
    return(
        <div className="container">
            <div className="row">
                <div className="review-person">
                    <div className="img_avatar">
                        <img className="fav_model" src={require('../image/user1.png')} />
                    </div>
                    <div className="info">
                        <h3>Adam Kowalski</h3>
                        <h5>Uczestnik kursu</h5>
                        <p className="more_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec laoreet, felis at ultricies condimentum,
                            est mi auctor est, iaculis varius mauris ipsum eget sem. </p>
                    </div>
                </div>
                <div className="review-person">
                    <div className="img_avatar">
                        <img className="fav_model" src={require('../image/user1.png')} />
                    </div>
                    <div className="info">
                        <h3>Adam Kowalski</h3>
                        <h5>Uczestnik kursu</h5>
                        <p className="more_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec laoreet, felis at ultricies condimentum,
                            est mi auctor est, iaculis varius mauris ipsum eget sem. </p>
                    </div>
                </div>
                <div className="review-person">
                    <div className="img_avatar">
                        <img className="fav_model" src={require('../image/user1.png')} />
                    </div>
                    <div className="info">
                        <h3>Adam Kowalski</h3>
                        <h5>Uczestnik kursu</h5>
                        <p className="more_info">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec laoreet, felis at ultricies condimentum,
                            est mi auctor est, iaculis varius mauris ipsum eget sem. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Review;