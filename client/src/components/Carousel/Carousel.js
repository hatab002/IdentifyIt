import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({start: this.state.start + 1})
        }, 1000000)
    }
    state = {
        start: 0
    }

    // shift = direction => e => {
    //     if (direction === 'left') {

    //     }
    // }

    nextSlide = () => {
        this.setState({start: this.state.start +1})
    }

    prevSlide = () => {
        
        if (this.state.start >= 1) {
        this.setState({start: this.state.start -1})
        }
    }

    shutter = (arr, start) => {
        if (arr.length === 1){
            return [start].map(idx => arr[idx % arr.length])
        } else if(arr.length === 2){
            return [start, start + 1].map(idx => arr[idx % arr.length])
        } else {
            return[start, start + 1, start + 2].map(idx => arr[idx % arr.length])
        }
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
                        className="col-md-4"
                        key={index}>
                        <img src={witt.url} key={witt._id} 
                            alt="First slide" className="image-responsive" onClick={()=> {props.updateCard(witt._id); props.toggleCard()}}></img>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#imageCarousel" role="button" data-slide="prev" onClick={this.prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#imageCarousel" role="button" data-slide="next" onClick={this.nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    }

};

export default Carousel;