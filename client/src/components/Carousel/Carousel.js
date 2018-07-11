import React from "react";
import "./Carousel.css";


const Carousel = () => (

    <div id="imageCarousel" className="carousel slide multi-item-carousel" data-interval="2000" 
         data-ride="carousel" data-pause="hover">

        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://media.self.com/photos/5aeb2496a982843a568c9dab/4:3/w_728,c_limit/extreme-morning-person.jpg" 
                             alt="First slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://s-i.huffpost.com/gen/1308835/images/o-FOX-facebook.jpg" 
                             alt="Second slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="http://cdn3-www.mandatory.com/assets/mandatory/legacy/2016/02/man_file_1064762_1banana.jpg" 
                             alt="Third slide" className="image-responsive"></img>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="row">
                <div className="col-md-4">
                        <img src="https://media.self.com/photos/5aeb2496a982843a568c9dab/4:3/w_728,c_limit/extreme-morning-person.jpg" 
                             alt="First slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://s-i.huffpost.com/gen/1308835/images/o-FOX-facebook.jpg" 
                             alt="Second slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="http://cdn3-www.mandatory.com/assets/mandatory/legacy/2016/02/man_file_1064762_1banana.jpg" 
                             alt="Third slide" className="image-responsive"></img>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <div className="row">
            <div className="col-md-4">
                        <img src="https://media.self.com/photos/5aeb2496a982843a568c9dab/4:3/w_728,c_limit/extreme-morning-person.jpg" 
                             alt="First slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://s-i.huffpost.com/gen/1308835/images/o-FOX-facebook.jpg" 
                             alt="Second slide" className="image-responsive"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="http://cdn3-www.mandatory.com/assets/mandatory/legacy/2016/02/man_file_1064762_1banana.jpg" 
                             alt="Third slide" className="image-responsive"></img>
                    </div>
                </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#imageCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

);

export default Carousel;