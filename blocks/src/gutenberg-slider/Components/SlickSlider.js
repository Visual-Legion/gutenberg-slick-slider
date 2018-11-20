const {Component} = wp.element;

// import update from 'immutability-helper'
// import Slider from "react-slick";
import { Slide } from './Slide';

export class SlickSlider extends Component {

  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      // numSlides: 0
      slider: []
    }

    this.addSlide = this.addSlide.bind(this);
    this.removeSlide = this.removeSlide.bind(this);
    this.handleSlideChange = this.handleSlideChange.bind(this);

  }

  setStatus(newProps) {

    let props = newProps ? newProps : this.props;

    if (props.slider) {

      // let sliderLength = props.slider.length;

      this.setState({
        // numSlides: sliderLength,
        slider: props.slider
      }, () => {
        // console.log('this.state.slider after set status', this.state.slider);
      });
    }

  }

  componentDidMount() {
    this.setStatus();
  }


  componentWillReceiveProps(newProps) {
    this.setStatus(newProps);
  // console.log('slider components received props');
  }

  addSlide() {

    let number;

    if (event.target.attributes.number) {
      number = event.target.attributes.number.nodeValue;
    }

    if (number) {
      this.setState((prevState) => ({
        slider: [...prevState.slider.slice(0, number), {
          mediaId: '',
          mediaUrl: '',
          mediaAlt: '',
          title: '',
          description: ''
        }, ...prevState.slider.slice(number)]
      }), () => {
        this.props.handleSliderChange(this.state.slider);
      })
    } else {
      this.setState({
        slider: [...this.state.slider, {
          mediaId: '',
          mediaUrl: '',
          mediaAlt: '',
          title: '',
          description: ''
        }]
      }, () => {
        this.props.handleSliderChange(this.state.slider);
      })
    }
  }

  removeSlide() {

    let tempSlider = this.state.slider;
    // console.log('event.target.attributes.number.nodeValue', event.target.attributes.number.nodeValue);
    let number = event.target.attributes.number.nodeValue;
    tempSlider.splice(number, 1);

    this.setState({
      slider: tempSlider
    }, () => {
      this.props.handleSliderChange(this.state.slider);
    })

    // let number = event.target.attributes.number.nodeValue;
    // this.setState((prevState) => ({
    //   slider: [...prevState.slider.slice(0, number), ...prevState.slider.slice(number + 1)]
    // }), () => {
    //   this.props.handleSliderChange(this.state.slider);
    // })

  }

  handleSlideChange(slide) {

    // console.log('handleSlideChange slide', slide);

    let tempSlider = this.state.slider;
    tempSlider[slide.number] = slide;
    this.setState({
      slider: tempSlider
    }, () => {
      this.props.handleSliderChange(this.state.slider);
    })
  }

  render() {

    console.log('rendering slider');
    // var settings = {
    //   dots: true, 
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };

    return (
      <div className="vl_slider__wrapper">
     <div className="vl_slider">
       { this.state.slider.map((slide, index) => {
          return (
            <div className="vl_slider_wrapper">
             <a className="removeSlide" href="#" key={ index } number={ index } onClick={ this.removeSlide }>Remove</a>
             <a className="addSlide" href="#" key={ index } number={ index } onClick={ this.addSlide }>Add</a>
             <Slide handleSlideChange={ this.handleSlideChange } mediaId={ slide.mediaId } mediaUrl={ slide.mediaUrl } mediaAlt={ slide.mediaAlt } title={ slide.title }
               description={ slide.description } key={ index } number={ index } />
           </div>
            );
         }) }
     </div>
     <p><a className="addSlide" href="#" onClick={ this.addSlide }>Add a Child Component</a></p>
   </div>
      );
  }


}

// addSlide() {
//     this.setState({
//       numSlides: this.state.numSlides + 1
//     });
//   }

//   render() {
//     const slides = [];

//     for (var i = 0; i < this.state.numSlides; i += 1) {
//       slides.push(<Slide changeSelectedUser={ this.props.changeSelectedUser } key={ i } number={ i } />);
//     }
//     ;