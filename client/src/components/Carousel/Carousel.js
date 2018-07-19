import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({start: this.state.start + 1})
        }, 7000)
    }
    state = {
        start: 0
    }
    shutter = (arr, start) => {
        return [start, start + 1, start + 2]
        .map(idx => arr[idx % arr.length])
    }
    render() {
      const props = this.props
      return <div id="imageCarousel" className="carousel slide multi-item-carousel" 
         data-ride="carousel" data-pause="hover">

        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="row">
                    {this.shutter(props.witts, this.state.start).map((witt, index) => (
                        <div 
                        className="col-md-4">
                        <img src={`${witt.filename}`} 
                            alt="First slide" className="image-responsive" onClick={()=> {props.updateCard(witt._id); props.toggleCard()}}></img>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    }

};

export default Carousel;