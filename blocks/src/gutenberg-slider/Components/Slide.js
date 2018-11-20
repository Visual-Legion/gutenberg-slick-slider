const {Component} = wp.element;
const {MediaUpload, PlainText, RichText} = wp.editor;
const {Button, BaseControl, ColorPalette} = wp.components;

export class Slide extends Component {

  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      mediaId: '',
      mediaUrl: '',
      mediaAlt: '',
      title: '',
      description: ''
    }

    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.getImageButton = this.getImageButton.bind(this);
    this.onMediaSelect = this.onMediaSelect.bind(this);

  }

  setStatus(newProps) {

    let props = newProps ? newProps : this.props;

    if (props.mediaId) {
      this.setState({
        mediaId: props.mediaId
      }, () => {
        // console.log('this.state.mediaId after set status', this.state.mediaId);
      });
    }

    if (props.mediaUrl) {
      this.setState({
        mediaUrl: props.mediaUrl
      }, () => {
        // console.log('this.state.mediaUrl after set status', this.state.mediaUrl);
      });
    }

    if (props.mediaAlt) {
      this.setState({
        mediaAlt: props.mediaAlt
      }, () => {
        // console.log('this.state.mediaAlt after set status', this.state.mediaAlt);
      });
    }

    if (props.title) {
      this.setState({
        title: props.title
      }, () => {
        // console.log('this.state.title after set status', this.state.title);
      });
    }

    if (props.description) {
      this.setState({
        description: props.description
      }, () => {
        // console.log('this.state.description after set status', this.state.description);
      });
    }

  }

  componentDidMount() {
    this.setStatus();
  }


  componentWillReceiveProps(newProps) {
    this.setStatus(newProps);
  }

  getImageButton(openEvent) {
    if (this.state.mediaUrl && this.state.mediaAlt) {
      //   return (
      //     <Button onClick={ () => {
      //                 this.setState({
      //                   mediaId: '',
      //                   mediaAlt: '',
      //                   mediaUrl: ''
      //                 });
      //               } } className="button button-large">
      //   Remove slide image
      // </Button>
      //     );
      return (
        <img className="vl_slide__image" src={ this.state.mediaUrl } alt={ this.state.mediaAlt } onClick={ openEvent } />
        );
    } else if (this.state.mediaUrl) {
      return (
        <img className="vl_slide__image" src={ this.state.mediaUrl } alt="slide image" onClick={ openEvent } />
        );
    } else {
      return (

        <Button onClick={ openEvent } className="button button-large">
      Pick a slide image
    </Button>
        );
    }
  }

  onMediaSelect(media) {
    // console.log('media selected', media);
    this.setState({
      mediaId: media.id,
      mediaAlt: media.alt,
      mediaUrl: media.url
    }, () => {
      this.handleSlideChange();
    });
  }



  handleSlideChange() {
    this.props.handleSlideChange({
      number: this.props.number,
      mediaId: this.state.mediaId,
      mediaUrl: this.state.mediaUrl,
      mediaAlt: this.state.mediaAlt,
      title: this.state.title,
      description: this.state.description
    });
  }

  render() {
    return (
      <div className="vl_slide">
     <MediaUpload onSelect={ this.onMediaSelect } value={ this.state.mediaId } render={ ({open}) => this.getImageButton(open) } />
     <div className="vl_slide__content">
       <RichText keepPlaceholderOnFocus="true" tagName="h4" className={ "vl_slide__title" } label="Slide title" help="Enter some text" value={ this.props.title } name="title"
         placeholder="Content title" onChange={ (content) => this.setState({
                                                  title: content
                                                }, () => {
                                                  this.handleSlideChange();
                                                }) } />
       <RichText keepPlaceholderOnFocus="true" tagName="h2" className={ "vl_slide__description" } label="Slide description" help="Enter some text" value={ this.props.description } name="description"
         placeholder="Content title" onChange={ (content) => this.setState({
                                                  description: content
                                                }, () => {
                                                  this.handleSlideChange();
                                                }) } />
     </div>
   </div>
      );
  }
}

// <div className="slide">
//      <img className="slide__image" />
//      <div className="slide__content">
//        <h4></h4>
//        <p></p>
//      </div>
//    </div>