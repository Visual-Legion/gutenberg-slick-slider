/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./gutenberg-slider/block */ "./blocks/src/gutenberg-slider/block.js");

/***/ }),

/***/ "./blocks/src/gutenberg-slider/block.js":
/*!**********************************************!*\
  !*** ./blocks/src/gutenberg-slider/block.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./style.scss */ "./blocks/src/gutenberg-slider/style.scss");

__webpack_require__(/*! ./editor.scss */ "./blocks/src/gutenberg-slider/editor.scss");

var _SlickSlider = __webpack_require__(/*! ./components/SlickSlider */ "./blocks/src/gutenberg-slider/components/SlickSlider.js");

var _Slide = __webpack_require__(/*! ./components/Slide */ "./blocks/src/gutenberg-slider/components/Slide.js");

// import * as api from './api';
/**
 * BLOCK: main
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    InspectorControls = _wp$blocks.InspectorControls; // Import registerBlockType() from wp.blocks

var Button = wp.components.Button;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('vl-gs/main', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('VL Gutenberg Slider '), // Block title.
	icon: 'admin-plugins', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('VL Gutenberg Slider '), __('Gutenberg Slider ')],
	attributes: {
		title: {
			type: 'string',
			selector: '.vl_gs__title',
			default: ''
		},
		slider: {
			type: 'array',
			default: []
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    slider = _props$attributes.slider,
		    setAttributes = props.setAttributes;

		// let settings_values = {
		// 	api_key
		// }

		// REMOVE FOR PRODUCTION
		// console.log('settings_values.api_key', settings_values.api_key);

		//TODO : if api key return map, else ask to setup api key => <h2>Please enter your google maps api key <a href="/wp-admin/admin.php?page=vl_gs">here</a> before we can load your map.</h2>

		// const handleClick = () => {
		// 	console.log('clicked!');
		// }

		// <button onClick={ handleClick }>
		//      Click me!
		//    </button> 

		var handleSliderChange = function handleSliderChange(slider) {
			setAttributes({
				slider: slider
			});
			console.log('slider', slider);
		};

		return wp.element.createElement(_SlickSlider.SlickSlider, { handleSliderChange: handleSliderChange, slider: slider });
	},

	//<RichText keepPlaceholderOnFocus="true" tagName="h1" className={ "vl_gs__title" } label="Boilerplate title" help="Enter some text" value={ title } name="title"
	//     placeholder="Boilerplate title" onChange={ (content) => setAttributes({
	//                                                	title: content
	//                                                }) } />


	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into post_content.
  *
  * The "save" property must be specified and must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    title = _props$attributes2.title,
		    slider = _props$attributes2.slider,
		    setAttributes = props.setAttributes;

		// const handleClick = () => {
		// 	console.log('clicked!');
		// }

		//    //   <button onClick={ handleClick }>
		//    //   Click me!
		//    // </button>

		var handleSliderChange = function handleSliderChange(slider) {
			setAttributes({
				slider: slider
			});
			console.log('slider', slider);
		};

		return wp.element.createElement(
			'div',
			{ className: 'vl_slider' },
			slider.map(function (slide, index) {
				return wp.element.createElement(
					'div',
					{ className: 'vl_slider_wrapper' },
					wp.element.createElement('img', { src: slide.mediaUrl, alt: slide.mediaAlt })
				);
			})
		);
	}
});

/***/ }),

/***/ "./blocks/src/gutenberg-slider/components/SlickSlider.js":
/*!***************************************************************!*\
  !*** ./blocks/src/gutenberg-slider/components/SlickSlider.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlickSlider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Slide = __webpack_require__(/*! ./Slide */ "./blocks/src/gutenberg-slider/components/Slide.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;

// import update from 'immutability-helper'
// import Slider from "react-slick";

var SlickSlider = exports.SlickSlider = function (_Component) {
  _inherits(SlickSlider, _Component);

  function SlickSlider(props) {
    _classCallCheck(this, SlickSlider);

    var _this = _possibleConstructorReturn(this, (SlickSlider.__proto__ || Object.getPrototypeOf(SlickSlider)).apply(this, arguments));

    _this.props = props;
    _this.state = {
      // numSlides: 0
      slider: []
    };

    _this.addSlide = _this.addSlide.bind(_this);
    _this.removeSlide = _this.removeSlide.bind(_this);
    _this.handleSlideChange = _this.handleSlideChange.bind(_this);

    return _this;
  }

  _createClass(SlickSlider, [{
    key: 'setStatus',
    value: function setStatus(newProps) {

      var props = newProps ? newProps : this.props;

      if (props.slider) {

        // let sliderLength = props.slider.length;

        this.setState({
          // numSlides: sliderLength,
          slider: props.slider
        }, function () {
          // console.log('this.state.slider after set status', this.state.slider);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setStatus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setStatus(newProps);
      // console.log('slider components received props');
    }
  }, {
    key: 'addSlide',
    value: function addSlide() {
      var _this2 = this;

      var number = void 0;

      if (event.target.attributes.number) {
        number = event.target.attributes.number.nodeValue;
      }

      if (number) {
        this.setState(function (prevState) {
          return {
            slider: [].concat(_toConsumableArray(prevState.slider.slice(0, number)), [{
              mediaId: '',
              mediaUrl: '',
              mediaAlt: '',
              title: '',
              description: ''
            }], _toConsumableArray(prevState.slider.slice(number)))
          };
        }, function () {
          _this2.props.handleSliderChange(_this2.state.slider);
        });
      } else {
        this.setState({
          slider: [].concat(_toConsumableArray(this.state.slider), [{
            mediaId: '',
            mediaUrl: '',
            mediaAlt: '',
            title: '',
            description: ''
          }])
        }, function () {
          _this2.props.handleSliderChange(_this2.state.slider);
        });
      }
    }
  }, {
    key: 'removeSlide',
    value: function removeSlide() {
      var _this3 = this;

      var tempSlider = this.state.slider;
      // console.log('event.target.attributes.number.nodeValue', event.target.attributes.number.nodeValue);
      var number = event.target.attributes.number.nodeValue;
      tempSlider.splice(number, 1);

      this.setState({
        slider: tempSlider
      }, function () {
        _this3.props.handleSliderChange(_this3.state.slider);
      });

      // let number = event.target.attributes.number.nodeValue;
      // this.setState((prevState) => ({
      //   slider: [...prevState.slider.slice(0, number), ...prevState.slider.slice(number + 1)]
      // }), () => {
      //   this.props.handleSliderChange(this.state.slider);
      // })
    }
  }, {
    key: 'handleSlideChange',
    value: function handleSlideChange(slide) {
      var _this4 = this;

      // console.log('handleSlideChange slide', slide);

      var tempSlider = this.state.slider;
      tempSlider[slide.number] = slide;
      this.setState({
        slider: tempSlider
      }, function () {
        _this4.props.handleSliderChange(_this4.state.slider);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      console.log('rendering slider');
      // var settings = {
      //   dots: true, 
      //   infinite: true,
      //   speed: 500,
      //   slidesToShow: 1,
      //   slidesToScroll: 1
      // };

      return wp.element.createElement(
        'div',
        { className: 'vl_slider__wrapper' },
        wp.element.createElement(
          'div',
          { className: 'vl_slider' },
          this.state.slider.map(function (slide, index) {
            return wp.element.createElement(
              'div',
              { className: 'vl_slider_wrapper' },
              wp.element.createElement(
                'a',
                { className: 'removeSlide', href: '#', key: index, number: index, onClick: _this5.removeSlide },
                'Remove'
              ),
              wp.element.createElement(
                'a',
                { className: 'addSlide', href: '#', key: index, number: index, onClick: _this5.addSlide },
                'Add'
              ),
              wp.element.createElement(_Slide.Slide, { handleSlideChange: _this5.handleSlideChange, mediaId: slide.mediaId, mediaUrl: slide.mediaUrl, mediaAlt: slide.mediaAlt, title: slide.title,
                description: slide.description, key: index, number: index })
            );
          })
        ),
        wp.element.createElement(
          'p',
          null,
          wp.element.createElement(
            'a',
            { className: 'addSlide', href: '#', onClick: this.addSlide },
            'Add a Child Component'
          )
        )
      );
    }
  }]);

  return SlickSlider;
}(Component);

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

/***/ }),

/***/ "./blocks/src/gutenberg-slider/components/Slide.js":
/*!*********************************************************!*\
  !*** ./blocks/src/gutenberg-slider/components/Slide.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = wp.element.Component;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    BaseControl = _wp$components.BaseControl,
    ColorPalette = _wp$components.ColorPalette;

var Slide = exports.Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide(props) {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).apply(this, arguments));

    _this.props = props;
    _this.state = {
      mediaId: '',
      mediaUrl: '',
      mediaAlt: '',
      title: '',
      description: ''
    };

    _this.handleSlideChange = _this.handleSlideChange.bind(_this);
    _this.getImageButton = _this.getImageButton.bind(_this);
    _this.onMediaSelect = _this.onMediaSelect.bind(_this);

    return _this;
  }

  _createClass(Slide, [{
    key: 'setStatus',
    value: function setStatus(newProps) {

      var props = newProps ? newProps : this.props;

      if (props.mediaId) {
        this.setState({
          mediaId: props.mediaId
        }, function () {
          // console.log('this.state.mediaId after set status', this.state.mediaId);
        });
      }

      if (props.mediaUrl) {
        this.setState({
          mediaUrl: props.mediaUrl
        }, function () {
          // console.log('this.state.mediaUrl after set status', this.state.mediaUrl);
        });
      }

      if (props.mediaAlt) {
        this.setState({
          mediaAlt: props.mediaAlt
        }, function () {
          // console.log('this.state.mediaAlt after set status', this.state.mediaAlt);
        });
      }

      if (props.title) {
        this.setState({
          title: props.title
        }, function () {
          // console.log('this.state.title after set status', this.state.title);
        });
      }

      if (props.description) {
        this.setState({
          description: props.description
        }, function () {
          // console.log('this.state.description after set status', this.state.description);
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setStatus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setStatus(newProps);
    }
  }, {
    key: 'getImageButton',
    value: function getImageButton(openEvent) {
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
        return wp.element.createElement('img', { className: 'vl_slide__image', src: this.state.mediaUrl, alt: this.state.mediaAlt, onClick: openEvent });
      } else if (this.state.mediaUrl) {
        return wp.element.createElement('img', { className: 'vl_slide__image', src: this.state.mediaUrl, alt: 'slide image', onClick: openEvent });
      } else {
        return wp.element.createElement(
          Button,
          { onClick: openEvent, className: 'button button-large' },
          'Pick a slide image'
        );
      }
    }
  }, {
    key: 'onMediaSelect',
    value: function onMediaSelect(media) {
      var _this2 = this;

      // console.log('media selected', media);
      this.setState({
        mediaId: media.id,
        mediaAlt: media.alt,
        mediaUrl: media.url
      }, function () {
        _this2.handleSlideChange();
      });
    }
  }, {
    key: 'handleSlideChange',
    value: function handleSlideChange() {
      this.props.handleSlideChange({
        number: this.props.number,
        mediaId: this.state.mediaId,
        mediaUrl: this.state.mediaUrl,
        mediaAlt: this.state.mediaAlt,
        title: this.state.title,
        description: this.state.description
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return wp.element.createElement(
        'div',
        { className: 'vl_slide' },
        wp.element.createElement(MediaUpload, { onSelect: this.onMediaSelect, value: this.state.mediaId, render: function render(_ref) {
            var open = _ref.open;
            return _this3.getImageButton(open);
          } }),
        wp.element.createElement(
          'div',
          { className: 'vl_slide__content' },
          wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h4', className: "vl_slide__title", label: 'Slide title', help: 'Enter some text', value: this.props.title, name: 'title',
            placeholder: 'Content title', onChange: function onChange(content) {
              return _this3.setState({
                title: content
              }, function () {
                _this3.handleSlideChange();
              });
            } }),
          wp.element.createElement(RichText, { keepPlaceholderOnFocus: 'true', tagName: 'h2', className: "vl_slide__description", label: 'Slide description', help: 'Enter some text', value: this.props.description, name: 'description',
            placeholder: 'Content title', onChange: function onChange(content) {
              return _this3.setState({
                description: content
              }, function () {
                _this3.handleSlideChange();
              });
            } })
        )
      );
    }
  }]);

  return Slide;
}(Component);

// <div className="slide">
//      <img className="slide__image" />
//      <div className="slide__content">
//        <h4></h4>
//        <p></p>
//      </div>
//    </div>

/***/ }),

/***/ "./blocks/src/gutenberg-slider/editor.scss":
/*!*************************************************!*\
  !*** ./blocks/src/gutenberg-slider/editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/gutenberg-slider/style.scss":
/*!************************************************!*\
  !*** ./blocks/src/gutenberg-slider/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ndXRlbmJlcmctc2xpZGVyL2Jsb2NrLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZ3V0ZW5iZXJnLXNsaWRlci9jb21wb25lbnRzL1NsaWNrU2xpZGVyLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZ3V0ZW5iZXJnLXNsaWRlci9jb21wb25lbnRzL1NsaWRlLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvZ3V0ZW5iZXJnLXNsaWRlci9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2d1dGVuYmVyZy1zbGlkZXIvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJ3cCIsImVkaXRvciIsIk1lZGlhVXBsb2FkIiwiUGxhaW5UZXh0IiwiUmljaFRleHQiLCJfXyIsImkxOG4iLCJibG9ja3MiLCJyZWdpc3RlckJsb2NrVHlwZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiQnV0dG9uIiwiY29tcG9uZW50cyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJhdHRyaWJ1dGVzIiwidHlwZSIsInNlbGVjdG9yIiwiZGVmYXVsdCIsInNsaWRlciIsImVkaXQiLCJwcm9wcyIsInNldEF0dHJpYnV0ZXMiLCJoYW5kbGVTbGlkZXJDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwic2F2ZSIsIm1hcCIsInNsaWRlIiwiaW5kZXgiLCJtZWRpYVVybCIsIm1lZGlhQWx0IiwiQ29tcG9uZW50IiwiZWxlbWVudCIsIlNsaWNrU2xpZGVyIiwiYXJndW1lbnRzIiwic3RhdGUiLCJhZGRTbGlkZSIsImJpbmQiLCJyZW1vdmVTbGlkZSIsImhhbmRsZVNsaWRlQ2hhbmdlIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsInNldFN0YXR1cyIsIm51bWJlciIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZVZhbHVlIiwicHJldlN0YXRlIiwic2xpY2UiLCJtZWRpYUlkIiwiZGVzY3JpcHRpb24iLCJ0ZW1wU2xpZGVyIiwic3BsaWNlIiwiQmFzZUNvbnRyb2wiLCJDb2xvclBhbGV0dGUiLCJTbGlkZSIsImdldEltYWdlQnV0dG9uIiwib25NZWRpYVNlbGVjdCIsIm9wZW5FdmVudCIsIm1lZGlhIiwiaWQiLCJhbHQiLCJ1cmwiLCJvcGVuIiwiY29udGVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDhGOzs7Ozs7Ozs7Ozs7OztBQ1FBOztBQUNBOztBQUdBOztBQUNBOztBQUZBO0FBWEE7Ozs7Ozs7QUFPQTtpQkFRMkNBLEdBQUdDLE07SUFBdkNDLFcsY0FBQUEsVztJQUFhQyxTLGNBQUFBLFM7SUFBV0MsUSxjQUFBQSxRO0lBQ3hCQyxFLEdBQU1MLEdBQUdNLEksQ0FBVEQsRSxFQUFlOztpQkFDeUJMLEdBQUdPLE07SUFBM0NDLGlCLGNBQUFBLGlCO0lBQW1CQyxpQixjQUFBQSxpQixFQUFnQzs7SUFDbkRDLE0sR0FBVVYsR0FBR1csVSxDQUFiRCxNOztBQUVQOzs7Ozs7Ozs7Ozs7OztBQWNBRixrQkFBa0IsWUFBbEIsRUFBZ0M7QUFDL0I7QUFDQUksUUFBT1AsR0FBRyxzQkFBSCxDQUZ3QixFQUVJO0FBQ25DUSxPQUFNLGVBSHlCLEVBR1I7QUFDdkJDLFdBQVUsUUFKcUIsRUFJWDtBQUNwQkMsV0FBVSxDQUNUVixHQUFHLHNCQUFILENBRFMsRUFFVEEsR0FBRyxtQkFBSCxDQUZTLENBTHFCO0FBUy9CVyxhQUFZO0FBQ1hKLFNBQU87QUFDTkssU0FBTSxRQURBO0FBRU5DLGFBQVUsZUFGSjtBQUdOQyxZQUFTO0FBSEgsR0FESTtBQU1YQyxVQUFRO0FBQ1BILFNBQU0sT0FEQztBQUVQRSxZQUFTO0FBRkY7QUFORyxFQVRtQjs7QUFzQi9COzs7Ozs7OztBQVFBRSxPQUFNLGNBQVNDLEtBQVQsRUFBZ0I7QUFBQSwwQkFFZ0NBLEtBRmhDLENBRWROLFVBRmM7QUFBQSxNQUVESixLQUZDLHFCQUVEQSxLQUZDO0FBQUEsTUFFTVEsTUFGTixxQkFFTUEsTUFGTjtBQUFBLE1BRWVHLGFBRmYsR0FFZ0NELEtBRmhDLENBRWVDLGFBRmY7O0FBSXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0osTUFBRCxFQUFZO0FBQ3RDRyxpQkFBYztBQUNiSDtBQURhLElBQWQ7QUFHQUssV0FBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JOLE1BQXRCO0FBQ0EsR0FMRDs7QUFPQSxTQUNDLHlCQUFDLHdCQUFELElBQWEsb0JBQXFCSSxrQkFBbEMsRUFBdUQsUUFBU0osTUFBaEUsR0FERDtBQUlBLEVBOUQ4Qjs7QUFnRS9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7QUFRQU8sT0FBTSxjQUFTTCxLQUFULEVBQWdCO0FBQUEsMkJBQ2dDQSxLQURoQyxDQUNkTixVQURjO0FBQUEsTUFDREosS0FEQyxzQkFDREEsS0FEQztBQUFBLE1BQ01RLE1BRE4sc0JBQ01BLE1BRE47QUFBQSxNQUNlRyxhQURmLEdBQ2dDRCxLQURoQyxDQUNlQyxhQURmOztBQUdyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNKLE1BQUQsRUFBWTtBQUN0Q0csaUJBQWM7QUFDYkg7QUFEYSxJQUFkO0FBR0FLLFdBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCTixNQUF0QjtBQUNBLEdBTEQ7O0FBT0EsU0FDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFdBQWY7QUFDSUEsVUFBT1EsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM1QixXQUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsbUJBQWY7QUFDRSx1Q0FBSyxLQUFNRCxNQUFNRSxRQUFqQixFQUE0QixLQUFNRixNQUFNRyxRQUF4QztBQURGLEtBREQ7QUFLQSxJQU5EO0FBREosR0FERDtBQWFBO0FBN0c4QixDQUFoQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7Ozs7Ozs7SUFKT0MsUyxHQUFhakMsR0FBR2tDLE8sQ0FBaEJELFM7O0FBRVA7QUFDQTs7SUFHYUUsVyxXQUFBQSxXOzs7QUFFWCx1QkFBWWIsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJIQUNSYyxTQURROztBQUVqQixVQUFLZCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLZSxLQUFMLEdBQWE7QUFDWDtBQUNBakIsY0FBUTtBQUZHLEtBQWI7O0FBS0EsVUFBS2tCLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRixJQUF2QixPQUF6Qjs7QUFWaUI7QUFZbEI7Ozs7OEJBRVNHLFEsRUFBVTs7QUFFbEIsVUFBSXBCLFFBQVFvQixXQUFXQSxRQUFYLEdBQXNCLEtBQUtwQixLQUF2Qzs7QUFFQSxVQUFJQSxNQUFNRixNQUFWLEVBQWtCOztBQUVoQjs7QUFFQSxhQUFLdUIsUUFBTCxDQUFjO0FBQ1o7QUFDQXZCLGtCQUFRRSxNQUFNRjtBQUZGLFNBQWQsRUFHRyxZQUFNO0FBQ1A7QUFDRCxTQUxEO0FBTUQ7QUFFRjs7O3dDQUVtQjtBQUNsQixXQUFLd0IsU0FBTDtBQUNEOzs7OENBR3lCRixRLEVBQVU7QUFDbEMsV0FBS0UsU0FBTCxDQUFlRixRQUFmO0FBQ0Y7QUFDQzs7OytCQUVVO0FBQUE7O0FBRVQsVUFBSUcsZUFBSjs7QUFFQSxVQUFJQyxNQUFNQyxNQUFOLENBQWEvQixVQUFiLENBQXdCNkIsTUFBNUIsRUFBb0M7QUFDbENBLGlCQUFTQyxNQUFNQyxNQUFOLENBQWEvQixVQUFiLENBQXdCNkIsTUFBeEIsQ0FBK0JHLFNBQXhDO0FBQ0Q7O0FBRUQsVUFBSUgsTUFBSixFQUFZO0FBQ1YsYUFBS0YsUUFBTCxDQUFjLFVBQUNNLFNBQUQ7QUFBQSxpQkFBZ0I7QUFDNUI3QixpREFBWTZCLFVBQVU3QixNQUFWLENBQWlCOEIsS0FBakIsQ0FBdUIsQ0FBdkIsRUFBMEJMLE1BQTFCLENBQVosSUFBK0M7QUFDN0NNLHVCQUFTLEVBRG9DO0FBRTdDcEIsd0JBQVUsRUFGbUM7QUFHN0NDLHdCQUFVLEVBSG1DO0FBSTdDcEIscUJBQU8sRUFKc0M7QUFLN0N3QywyQkFBYTtBQUxnQyxhQUEvQyxzQkFNTUgsVUFBVTdCLE1BQVYsQ0FBaUI4QixLQUFqQixDQUF1QkwsTUFBdkIsQ0FOTjtBQUQ0QixXQUFoQjtBQUFBLFNBQWQsRUFRSSxZQUFNO0FBQ1IsaUJBQUt2QixLQUFMLENBQVdFLGtCQUFYLENBQThCLE9BQUthLEtBQUwsQ0FBV2pCLE1BQXpDO0FBQ0QsU0FWRDtBQVdELE9BWkQsTUFZTztBQUNMLGFBQUt1QixRQUFMLENBQWM7QUFDWnZCLCtDQUFZLEtBQUtpQixLQUFMLENBQVdqQixNQUF2QixJQUErQjtBQUM3QitCLHFCQUFTLEVBRG9CO0FBRTdCcEIsc0JBQVUsRUFGbUI7QUFHN0JDLHNCQUFVLEVBSG1CO0FBSTdCcEIsbUJBQU8sRUFKc0I7QUFLN0J3Qyx5QkFBYTtBQUxnQixXQUEvQjtBQURZLFNBQWQsRUFRRyxZQUFNO0FBQ1AsaUJBQUs5QixLQUFMLENBQVdFLGtCQUFYLENBQThCLE9BQUthLEtBQUwsQ0FBV2pCLE1BQXpDO0FBQ0QsU0FWRDtBQVdEO0FBQ0Y7OztrQ0FFYTtBQUFBOztBQUVaLFVBQUlpQyxhQUFhLEtBQUtoQixLQUFMLENBQVdqQixNQUE1QjtBQUNBO0FBQ0EsVUFBSXlCLFNBQVNDLE1BQU1DLE1BQU4sQ0FBYS9CLFVBQWIsQ0FBd0I2QixNQUF4QixDQUErQkcsU0FBNUM7QUFDQUssaUJBQVdDLE1BQVgsQ0FBa0JULE1BQWxCLEVBQTBCLENBQTFCOztBQUVBLFdBQUtGLFFBQUwsQ0FBYztBQUNadkIsZ0JBQVFpQztBQURJLE9BQWQsRUFFRyxZQUFNO0FBQ1AsZUFBSy9CLEtBQUwsQ0FBV0Usa0JBQVgsQ0FBOEIsT0FBS2EsS0FBTCxDQUFXakIsTUFBekM7QUFDRCxPQUpEOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEOzs7c0NBRWlCUyxLLEVBQU87QUFBQTs7QUFFdkI7O0FBRUEsVUFBSXdCLGFBQWEsS0FBS2hCLEtBQUwsQ0FBV2pCLE1BQTVCO0FBQ0FpQyxpQkFBV3hCLE1BQU1nQixNQUFqQixJQUEyQmhCLEtBQTNCO0FBQ0EsV0FBS2MsUUFBTCxDQUFjO0FBQ1p2QixnQkFBUWlDO0FBREksT0FBZCxFQUVHLFlBQU07QUFDUCxlQUFLL0IsS0FBTCxDQUFXRSxrQkFBWCxDQUE4QixPQUFLYSxLQUFMLENBQVdqQixNQUF6QztBQUNELE9BSkQ7QUFLRDs7OzZCQUVRO0FBQUE7O0FBRVBLLGNBQVFDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNEO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNJLGVBQUtXLEtBQUwsQ0FBV2pCLE1BQVgsQ0FBa0JRLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN2QyxtQkFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxtQkFBZjtBQUNDO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGFBQWIsRUFBMkIsTUFBSyxHQUFoQyxFQUFvQyxLQUFNQSxLQUExQyxFQUFrRCxRQUFTQSxLQUEzRCxFQUFtRSxTQUFVLE9BQUtVLFdBQWxGO0FBQUE7QUFBQSxlQUREO0FBRUM7QUFBQTtBQUFBLGtCQUFHLFdBQVUsVUFBYixFQUF3QixNQUFLLEdBQTdCLEVBQWlDLEtBQU1WLEtBQXZDLEVBQStDLFFBQVNBLEtBQXhELEVBQWdFLFNBQVUsT0FBS1EsUUFBL0U7QUFBQTtBQUFBLGVBRkQ7QUFHQyx1Q0FBQyxZQUFELElBQU8sbUJBQW9CLE9BQUtHLGlCQUFoQyxFQUFvRCxTQUFVWixNQUFNc0IsT0FBcEUsRUFBOEUsVUFBV3RCLE1BQU1FLFFBQS9GLEVBQTBHLFVBQVdGLE1BQU1HLFFBQTNILEVBQXNJLE9BQVFILE1BQU1qQixLQUFwSjtBQUNFLDZCQUFjaUIsTUFBTXVCLFdBRHRCLEVBQ29DLEtBQU10QixLQUQxQyxFQUNrRCxRQUFTQSxLQUQzRDtBQUhELGFBREY7QUFRQSxXQVREO0FBREosU0FEQztBQWFEO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQSxjQUFHLFdBQVUsVUFBYixFQUF3QixNQUFLLEdBQTdCLEVBQWlDLFNBQVUsS0FBS1EsUUFBaEQ7QUFBQTtBQUFBO0FBQUg7QUFiQyxPQURGO0FBaUJEOzs7O0VBOUk4QkwsUzs7QUFtSmpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3JLT0EsUyxHQUFhakMsR0FBR2tDLE8sQ0FBaEJELFM7aUJBQ29DakMsR0FBR0MsTTtJQUF2Q0MsVyxjQUFBQSxXO0lBQWFDLFMsY0FBQUEsUztJQUFXQyxRLGNBQUFBLFE7cUJBQ2FKLEdBQUdXLFU7SUFBeENELE0sa0JBQUFBLE07SUFBUTZDLFcsa0JBQUFBLFc7SUFBYUMsWSxrQkFBQUEsWTs7SUFFZkMsSyxXQUFBQSxLOzs7QUFFWCxpQkFBWW5DLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrR0FDUmMsU0FEUTs7QUFFakIsVUFBS2QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS2UsS0FBTCxHQUFhO0FBQ1hjLGVBQVMsRUFERTtBQUVYcEIsZ0JBQVUsRUFGQztBQUdYQyxnQkFBVSxFQUhDO0FBSVhwQixhQUFPLEVBSkk7QUFLWHdDLG1CQUFhO0FBTEYsS0FBYjs7QUFRQSxVQUFLWCxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkYsSUFBdkIsT0FBekI7QUFDQSxVQUFLbUIsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CbkIsSUFBcEIsT0FBdEI7QUFDQSxVQUFLb0IsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CcEIsSUFBbkIsT0FBckI7O0FBYmlCO0FBZWxCOzs7OzhCQUVTRyxRLEVBQVU7O0FBRWxCLFVBQUlwQixRQUFRb0IsV0FBV0EsUUFBWCxHQUFzQixLQUFLcEIsS0FBdkM7O0FBRUEsVUFBSUEsTUFBTTZCLE9BQVYsRUFBbUI7QUFDakIsYUFBS1IsUUFBTCxDQUFjO0FBQ1pRLG1CQUFTN0IsTUFBTTZCO0FBREgsU0FBZCxFQUVHLFlBQU07QUFDUDtBQUNELFNBSkQ7QUFLRDs7QUFFRCxVQUFJN0IsTUFBTVMsUUFBVixFQUFvQjtBQUNsQixhQUFLWSxRQUFMLENBQWM7QUFDWlosb0JBQVVULE1BQU1TO0FBREosU0FBZCxFQUVHLFlBQU07QUFDUDtBQUNELFNBSkQ7QUFLRDs7QUFFRCxVQUFJVCxNQUFNVSxRQUFWLEVBQW9CO0FBQ2xCLGFBQUtXLFFBQUwsQ0FBYztBQUNaWCxvQkFBVVYsTUFBTVU7QUFESixTQUFkLEVBRUcsWUFBTTtBQUNQO0FBQ0QsU0FKRDtBQUtEOztBQUVELFVBQUlWLE1BQU1WLEtBQVYsRUFBaUI7QUFDZixhQUFLK0IsUUFBTCxDQUFjO0FBQ1ovQixpQkFBT1UsTUFBTVY7QUFERCxTQUFkLEVBRUcsWUFBTTtBQUNQO0FBQ0QsU0FKRDtBQUtEOztBQUVELFVBQUlVLE1BQU04QixXQUFWLEVBQXVCO0FBQ3JCLGFBQUtULFFBQUwsQ0FBYztBQUNaUyx1QkFBYTlCLE1BQU04QjtBQURQLFNBQWQsRUFFRyxZQUFNO0FBQ1A7QUFDRCxTQUpEO0FBS0Q7QUFFRjs7O3dDQUVtQjtBQUNsQixXQUFLUixTQUFMO0FBQ0Q7Ozs4Q0FHeUJGLFEsRUFBVTtBQUNsQyxXQUFLRSxTQUFMLENBQWVGLFFBQWY7QUFDRDs7O21DQUVja0IsUyxFQUFXO0FBQ3hCLFVBQUksS0FBS3ZCLEtBQUwsQ0FBV04sUUFBWCxJQUF1QixLQUFLTSxLQUFMLENBQVdMLFFBQXRDLEVBQWdEO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUNFLGtDQUFLLFdBQVUsaUJBQWYsRUFBaUMsS0FBTSxLQUFLSyxLQUFMLENBQVdOLFFBQWxELEVBQTZELEtBQU0sS0FBS00sS0FBTCxDQUFXTCxRQUE5RSxFQUF5RixTQUFVNEIsU0FBbkcsR0FERjtBQUdELE9BZkQsTUFlTyxJQUFJLEtBQUt2QixLQUFMLENBQVdOLFFBQWYsRUFBeUI7QUFDOUIsZUFDRSxrQ0FBSyxXQUFVLGlCQUFmLEVBQWlDLEtBQU0sS0FBS00sS0FBTCxDQUFXTixRQUFsRCxFQUE2RCxLQUFJLGFBQWpFLEVBQStFLFNBQVU2QixTQUF6RixHQURGO0FBR0QsT0FKTSxNQUlBO0FBQ0wsZUFFRTtBQUFDLGdCQUFEO0FBQUEsWUFBUSxTQUFVQSxTQUFsQixFQUE4QixXQUFVLHFCQUF4QztBQUFBO0FBQUEsU0FGRjtBQU1EO0FBQ0Y7OztrQ0FFYUMsSyxFQUFPO0FBQUE7O0FBQ25CO0FBQ0EsV0FBS2xCLFFBQUwsQ0FBYztBQUNaUSxpQkFBU1UsTUFBTUMsRUFESDtBQUVaOUIsa0JBQVU2QixNQUFNRSxHQUZKO0FBR1poQyxrQkFBVThCLE1BQU1HO0FBSEosT0FBZCxFQUlHLFlBQU07QUFDUCxlQUFLdkIsaUJBQUw7QUFDRCxPQU5EO0FBT0Q7Ozt3Q0FJbUI7QUFDbEIsV0FBS25CLEtBQUwsQ0FBV21CLGlCQUFYLENBQTZCO0FBQzNCSSxnQkFBUSxLQUFLdkIsS0FBTCxDQUFXdUIsTUFEUTtBQUUzQk0saUJBQVMsS0FBS2QsS0FBTCxDQUFXYyxPQUZPO0FBRzNCcEIsa0JBQVUsS0FBS00sS0FBTCxDQUFXTixRQUhNO0FBSTNCQyxrQkFBVSxLQUFLSyxLQUFMLENBQVdMLFFBSk07QUFLM0JwQixlQUFPLEtBQUt5QixLQUFMLENBQVd6QixLQUxTO0FBTTNCd0MscUJBQWEsS0FBS2YsS0FBTCxDQUFXZTtBQU5HLE9BQTdCO0FBUUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0QsaUNBQUMsV0FBRCxJQUFhLFVBQVcsS0FBS08sYUFBN0IsRUFBNkMsT0FBUSxLQUFLdEIsS0FBTCxDQUFXYyxPQUFoRSxFQUEwRSxRQUFTO0FBQUEsZ0JBQUVjLElBQUYsUUFBRUEsSUFBRjtBQUFBLG1CQUFZLE9BQUtQLGNBQUwsQ0FBb0JPLElBQXBCLENBQVo7QUFBQSxXQUFuRixHQURDO0FBRUQ7QUFBQTtBQUFBLFlBQUssV0FBVSxtQkFBZjtBQUNFLG1DQUFDLFFBQUQsSUFBVSx3QkFBdUIsTUFBakMsRUFBd0MsU0FBUSxJQUFoRCxFQUFxRCxXQUFZLGlCQUFqRSxFQUFxRixPQUFNLGFBQTNGLEVBQXlHLE1BQUssaUJBQTlHLEVBQWdJLE9BQVEsS0FBSzNDLEtBQUwsQ0FBV1YsS0FBbkosRUFBMkosTUFBSyxPQUFoSztBQUNFLHlCQUFZLGVBRGQsRUFDOEIsVUFBVyxrQkFBQ3NELE9BQUQ7QUFBQSxxQkFBYSxPQUFLdkIsUUFBTCxDQUFjO0FBQ3pCL0IsdUJBQU9zRDtBQURrQixlQUFkLEVBRVYsWUFBTTtBQUNQLHVCQUFLekIsaUJBQUw7QUFDRCxlQUpZLENBQWI7QUFBQSxhQUR6QyxHQURGO0FBT0UsbUNBQUMsUUFBRCxJQUFVLHdCQUF1QixNQUFqQyxFQUF3QyxTQUFRLElBQWhELEVBQXFELFdBQVksdUJBQWpFLEVBQTJGLE9BQU0sbUJBQWpHLEVBQXFILE1BQUssaUJBQTFILEVBQTRJLE9BQVEsS0FBS25CLEtBQUwsQ0FBVzhCLFdBQS9KLEVBQTZLLE1BQUssYUFBbEw7QUFDRSx5QkFBWSxlQURkLEVBQzhCLFVBQVcsa0JBQUNjLE9BQUQ7QUFBQSxxQkFBYSxPQUFLdkIsUUFBTCxDQUFjO0FBQ3pCUyw2QkFBYWM7QUFEWSxlQUFkLEVBRVYsWUFBTTtBQUNQLHVCQUFLekIsaUJBQUw7QUFDRCxlQUpZLENBQWI7QUFBQSxhQUR6QztBQVBGO0FBRkMsT0FERjtBQW1CRDs7OztFQXBKd0JSLFM7O0FBdUozQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZOzs7Ozs7Ozs7OztBQ2pLQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL2d1dGVuYmVyZy1zbGlkZXIvYmxvY2snO1xuLy8gaW1wb3J0ICcuL3ZsLWdzLWVkaXRvci9ibG9jayc7XG4vLyBpbXBvcnQgJy4vdmwtZ3MtcGFnZS9ibG9jayc7ICIsIi8qKlxuICogQkxPQ0s6IG1haW5cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG4vLyBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgU2xpY2tTbGlkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvU2xpY2tTbGlkZXInO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGUnO1xuXG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge19ffSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3Qge3JlZ2lzdGVyQmxvY2tUeXBlLCBJbnNwZWN0b3JDb250cm9sc30gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB7QnV0dG9ufSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd2bC1ncy9tYWluJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdWTCBHdXRlbmJlcmcgU2xpZGVyICcpLCAvLyBCbG9jayB0aXRsZS5cblx0aWNvbjogJ2FkbWluLXBsdWdpbnMnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG5cdGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG5cdGtleXdvcmRzOiBbXG5cdFx0X18oJ1ZMIEd1dGVuYmVyZyBTbGlkZXIgJyksXG5cdFx0X18oJ0d1dGVuYmVyZyBTbGlkZXIgJylcblx0XSxcblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNlbGVjdG9yOiAnLnZsX2dzX190aXRsZScsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH0sXG5cdFx0c2xpZGVyOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0ZGVmYXVsdDogW11cblx0XHR9XG5cdH0sXG5cblxuXHQvKipcblx0ICogVGhlIGVkaXQgZnVuY3Rpb24gZGVzY3JpYmVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBibG9jayBpbiB0aGUgY29udGV4dCBvZiB0aGUgZWRpdG9yLlxuXHQgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG5cdCAqXG5cdCAqIFRoZSBcImVkaXRcIiBwcm9wZXJ0eSBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cblx0XHRjb25zdCB7YXR0cmlidXRlczoge3RpdGxlLCBzbGlkZXJ9LCBzZXRBdHRyaWJ1dGVzfSA9IHByb3BzO1xuXG5cdFx0Ly8gbGV0IHNldHRpbmdzX3ZhbHVlcyA9IHtcblx0XHQvLyBcdGFwaV9rZXlcblx0XHQvLyB9XG5cblx0XHQvLyBSRU1PVkUgRk9SIFBST0RVQ1RJT05cblx0XHQvLyBjb25zb2xlLmxvZygnc2V0dGluZ3NfdmFsdWVzLmFwaV9rZXknLCBzZXR0aW5nc192YWx1ZXMuYXBpX2tleSk7XG5cblx0XHQvL1RPRE8gOiBpZiBhcGkga2V5IHJldHVybiBtYXAsIGVsc2UgYXNrIHRvIHNldHVwIGFwaSBrZXkgPT4gPGgyPlBsZWFzZSBlbnRlciB5b3VyIGdvb2dsZSBtYXBzIGFwaSBrZXkgPGEgaHJlZj1cIi93cC1hZG1pbi9hZG1pbi5waHA/cGFnZT12bF9nc1wiPmhlcmU8L2E+IGJlZm9yZSB3ZSBjYW4gbG9hZCB5b3VyIG1hcC48L2gyPlxuXG5cdFx0Ly8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZygnY2xpY2tlZCEnKTtcblx0XHQvLyB9XG5cblx0XHQvLyA8YnV0dG9uIG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9PlxuXHRcdC8vICAgICAgQ2xpY2sgbWUhXG5cdFx0Ly8gICAgPC9idXR0b24+IFxuXG5cdFx0Y29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKHNsaWRlcikgPT4ge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNsaWRlclxuXHRcdFx0fSk7XG5cdFx0XHRjb25zb2xlLmxvZygnc2xpZGVyJywgc2xpZGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFNsaWNrU2xpZGVyIGhhbmRsZVNsaWRlckNoYW5nZT17IGhhbmRsZVNsaWRlckNoYW5nZSB9IHNsaWRlcj17IHNsaWRlciB9IC8+XG5cdFx0KVxuXG5cdH0sXG5cblx0Ly88UmljaFRleHQga2VlcFBsYWNlaG9sZGVyT25Gb2N1cz1cInRydWVcIiB0YWdOYW1lPVwiaDFcIiBjbGFzc05hbWU9eyBcInZsX2dzX190aXRsZVwiIH0gbGFiZWw9XCJCb2lsZXJwbGF0ZSB0aXRsZVwiIGhlbHA9XCJFbnRlciBzb21lIHRleHRcIiB2YWx1ZT17IHRpdGxlIH0gbmFtZT1cInRpdGxlXCJcblx0Ly8gICAgIHBsYWNlaG9sZGVyPVwiQm9pbGVycGxhdGUgdGl0bGVcIiBvbkNoYW5nZT17IChjb250ZW50KSA9PiBzZXRBdHRyaWJ1dGVzKHtcblx0Ly8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHRpdGxlOiBjb250ZW50XG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSAvPlxuXG5cblx0LyoqXG5cdCAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG5cdCAqIGludG8gdGhlIGZpbmFsIG1hcmt1cCwgd2hpY2ggaXMgdGhlbiBzZXJpYWxpemVkIGJ5IEd1dGVuYmVyZyBpbnRvIHBvc3RfY29udGVudC5cblx0ICpcblx0ICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG5cdCAqXG5cdCAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cblx0ICovXG5cdHNhdmU6IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0Y29uc3Qge2F0dHJpYnV0ZXM6IHt0aXRsZSwgc2xpZGVyfSwgc2V0QXR0cmlidXRlc30gPSBwcm9wcztcblxuXHRcdC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coJ2NsaWNrZWQhJyk7XG5cdFx0Ly8gfVxuXG5cdFx0Ly8gICAgLy8gICA8YnV0dG9uIG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9PlxuXHRcdC8vICAgIC8vICAgQ2xpY2sgbWUhXG5cdFx0Ly8gICAgLy8gPC9idXR0b24+XG5cblx0XHRjb25zdCBoYW5kbGVTbGlkZXJDaGFuZ2UgPSAoc2xpZGVyKSA9PiB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0c2xpZGVyXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKCdzbGlkZXInLCBzbGlkZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInZsX3NsaWRlclwiPlxuICAgICB7IHNsaWRlci5tYXAoKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgICAgIFx0cmV0dXJuIChcbiAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJ2bF9zbGlkZXJfd3JhcHBlclwiPlxuICAgICAgICAgICA8aW1nIHNyYz17IHNsaWRlLm1lZGlhVXJsIH0gYWx0PXsgc2xpZGUubWVkaWFBbHQgfSAvPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgXHRcdCk7XG4gICAgICAgfSkgfVxuICAgPC9kaXY+XG5cdFx0KVxuXG5cblx0fSxcbn0pO1xuIiwiY29uc3Qge0NvbXBvbmVudH0gPSB3cC5lbGVtZW50O1xuXG4vLyBpbXBvcnQgdXBkYXRlIGZyb20gJ2ltbXV0YWJpbGl0eS1oZWxwZXInXG4vLyBpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tICcuL1NsaWRlJztcblxuZXhwb3J0IGNsYXNzIFNsaWNrU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBudW1TbGlkZXM6IDBcbiAgICAgIHNsaWRlcjogW11cbiAgICB9XG5cbiAgICB0aGlzLmFkZFNsaWRlID0gdGhpcy5hZGRTbGlkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlU2xpZGUgPSB0aGlzLnJlbW92ZVNsaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTbGlkZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2xpZGVDaGFuZ2UuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgc2V0U3RhdHVzKG5ld1Byb3BzKSB7XG5cbiAgICBsZXQgcHJvcHMgPSBuZXdQcm9wcyA/IG5ld1Byb3BzIDogdGhpcy5wcm9wcztcblxuICAgIGlmIChwcm9wcy5zbGlkZXIpIHtcblxuICAgICAgLy8gbGV0IHNsaWRlckxlbmd0aCA9IHByb3BzLnNsaWRlci5sZW5ndGg7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyBudW1TbGlkZXM6IHNsaWRlckxlbmd0aCxcbiAgICAgICAgc2xpZGVyOiBwcm9wcy5zbGlkZXJcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuc2xpZGVyIGFmdGVyIHNldCBzdGF0dXMnLCB0aGlzLnN0YXRlLnNsaWRlcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXR1cyhuZXdQcm9wcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdzbGlkZXIgY29tcG9uZW50cyByZWNlaXZlZCBwcm9wcycpO1xuICB9XG5cbiAgYWRkU2xpZGUoKSB7XG5cbiAgICBsZXQgbnVtYmVyO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm51bWJlcikge1xuICAgICAgbnVtYmVyID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubnVtYmVyLm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgIHNsaWRlcjogWy4uLnByZXZTdGF0ZS5zbGlkZXIuc2xpY2UoMCwgbnVtYmVyKSwge1xuICAgICAgICAgIG1lZGlhSWQ6ICcnLFxuICAgICAgICAgIG1lZGlhVXJsOiAnJyxcbiAgICAgICAgICBtZWRpYUFsdDogJycsXG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJ1xuICAgICAgICB9LCAuLi5wcmV2U3RhdGUuc2xpZGVyLnNsaWNlKG51bWJlcildXG4gICAgICB9KSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLmhhbmRsZVNsaWRlckNoYW5nZSh0aGlzLnN0YXRlLnNsaWRlcik7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2xpZGVyOiBbLi4udGhpcy5zdGF0ZS5zbGlkZXIsIHtcbiAgICAgICAgICBtZWRpYUlkOiAnJyxcbiAgICAgICAgICBtZWRpYVVybDogJycsXG4gICAgICAgICAgbWVkaWFBbHQ6ICcnLFxuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJydcbiAgICAgICAgfV1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTbGlkZXJDaGFuZ2UodGhpcy5zdGF0ZS5zbGlkZXIpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW1vdmVTbGlkZSgpIHtcblxuICAgIGxldCB0ZW1wU2xpZGVyID0gdGhpcy5zdGF0ZS5zbGlkZXI7XG4gICAgLy8gY29uc29sZS5sb2coJ2V2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm51bWJlci5ub2RlVmFsdWUnLCBldmVudC50YXJnZXQuYXR0cmlidXRlcy5udW1iZXIubm9kZVZhbHVlKTtcbiAgICBsZXQgbnVtYmVyID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubnVtYmVyLm5vZGVWYWx1ZTtcbiAgICB0ZW1wU2xpZGVyLnNwbGljZShudW1iZXIsIDEpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzbGlkZXI6IHRlbXBTbGlkZXJcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVNsaWRlckNoYW5nZSh0aGlzLnN0YXRlLnNsaWRlcik7XG4gICAgfSlcblxuICAgIC8vIGxldCBudW1iZXIgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5udW1iZXIubm9kZVZhbHVlO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAvLyAgIHNsaWRlcjogWy4uLnByZXZTdGF0ZS5zbGlkZXIuc2xpY2UoMCwgbnVtYmVyKSwgLi4ucHJldlN0YXRlLnNsaWRlci5zbGljZShudW1iZXIgKyAxKV1cbiAgICAvLyB9KSwgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5wcm9wcy5oYW5kbGVTbGlkZXJDaGFuZ2UodGhpcy5zdGF0ZS5zbGlkZXIpO1xuICAgIC8vIH0pXG5cbiAgfVxuXG4gIGhhbmRsZVNsaWRlQ2hhbmdlKHNsaWRlKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlU2xpZGVDaGFuZ2Ugc2xpZGUnLCBzbGlkZSk7XG5cbiAgICBsZXQgdGVtcFNsaWRlciA9IHRoaXMuc3RhdGUuc2xpZGVyO1xuICAgIHRlbXBTbGlkZXJbc2xpZGUubnVtYmVyXSA9IHNsaWRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2xpZGVyOiB0ZW1wU2xpZGVyXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTbGlkZXJDaGFuZ2UodGhpcy5zdGF0ZS5zbGlkZXIpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zb2xlLmxvZygncmVuZGVyaW5nIHNsaWRlcicpO1xuICAgIC8vIHZhciBzZXR0aW5ncyA9IHtcbiAgICAvLyAgIGRvdHM6IHRydWUsIFxuICAgIC8vICAgaW5maW5pdGU6IHRydWUsXG4gICAgLy8gICBzcGVlZDogNTAwLFxuICAgIC8vICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIC8vICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAvLyB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmxfc2xpZGVyX193cmFwcGVyXCI+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwidmxfc2xpZGVyXCI+XG4gICAgICAgeyB0aGlzLnN0YXRlLnNsaWRlci5tYXAoKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZsX3NsaWRlcl93cmFwcGVyXCI+XG4gICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVtb3ZlU2xpZGVcIiBocmVmPVwiI1wiIGtleT17IGluZGV4IH0gbnVtYmVyPXsgaW5kZXggfSBvbkNsaWNrPXsgdGhpcy5yZW1vdmVTbGlkZSB9PlJlbW92ZTwvYT5cbiAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhZGRTbGlkZVwiIGhyZWY9XCIjXCIga2V5PXsgaW5kZXggfSBudW1iZXI9eyBpbmRleCB9IG9uQ2xpY2s9eyB0aGlzLmFkZFNsaWRlIH0+QWRkPC9hPlxuICAgICAgICAgICAgIDxTbGlkZSBoYW5kbGVTbGlkZUNoYW5nZT17IHRoaXMuaGFuZGxlU2xpZGVDaGFuZ2UgfSBtZWRpYUlkPXsgc2xpZGUubWVkaWFJZCB9IG1lZGlhVXJsPXsgc2xpZGUubWVkaWFVcmwgfSBtZWRpYUFsdD17IHNsaWRlLm1lZGlhQWx0IH0gdGl0bGU9eyBzbGlkZS50aXRsZSB9XG4gICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17IHNsaWRlLmRlc2NyaXB0aW9uIH0ga2V5PXsgaW5kZXggfSBudW1iZXI9eyBpbmRleCB9IC8+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgIH0pIH1cbiAgICAgPC9kaXY+XG4gICAgIDxwPjxhIGNsYXNzTmFtZT1cImFkZFNsaWRlXCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsgdGhpcy5hZGRTbGlkZSB9PkFkZCBhIENoaWxkIENvbXBvbmVudDwvYT48L3A+XG4gICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cblxuXG59XG5cbi8vIGFkZFNsaWRlKCkge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgbnVtU2xpZGVzOiB0aGlzLnN0YXRlLm51bVNsaWRlcyArIDFcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCBzbGlkZXMgPSBbXTtcblxuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5udW1TbGlkZXM7IGkgKz0gMSkge1xuLy8gICAgICAgc2xpZGVzLnB1c2goPFNsaWRlIGNoYW5nZVNlbGVjdGVkVXNlcj17IHRoaXMucHJvcHMuY2hhbmdlU2VsZWN0ZWRVc2VyIH0ga2V5PXsgaSB9IG51bWJlcj17IGkgfSAvPik7XG4vLyAgICAgfVxuLy8gICAgIDsiLCJjb25zdCB7Q29tcG9uZW50fSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7TWVkaWFVcGxvYWQsIFBsYWluVGV4dCwgUmljaFRleHR9ID0gd3AuZWRpdG9yO1xuY29uc3Qge0J1dHRvbiwgQmFzZUNvbnRyb2wsIENvbG9yUGFsZXR0ZX0gPSB3cC5jb21wb25lbnRzO1xuXG5leHBvcnQgY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lZGlhSWQ6ICcnLFxuICAgICAgbWVkaWFVcmw6ICcnLFxuICAgICAgbWVkaWFBbHQ6ICcnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVTbGlkZUNoYW5nZSA9IHRoaXMuaGFuZGxlU2xpZGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEltYWdlQnV0dG9uID0gdGhpcy5nZXRJbWFnZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25NZWRpYVNlbGVjdCA9IHRoaXMub25NZWRpYVNlbGVjdC5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBzZXRTdGF0dXMobmV3UHJvcHMpIHtcblxuICAgIGxldCBwcm9wcyA9IG5ld1Byb3BzID8gbmV3UHJvcHMgOiB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHByb3BzLm1lZGlhSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZWRpYUlkOiBwcm9wcy5tZWRpYUlkXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlLm1lZGlhSWQgYWZ0ZXIgc2V0IHN0YXR1cycsIHRoaXMuc3RhdGUubWVkaWFJZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMubWVkaWFVcmwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZWRpYVVybDogcHJvcHMubWVkaWFVcmxcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuc3RhdGUubWVkaWFVcmwgYWZ0ZXIgc2V0IHN0YXR1cycsIHRoaXMuc3RhdGUubWVkaWFVcmwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm1lZGlhQWx0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVkaWFBbHQ6IHByb3BzLm1lZGlhQWx0XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlLm1lZGlhQWx0IGFmdGVyIHNldCBzdGF0dXMnLCB0aGlzLnN0YXRlLm1lZGlhQWx0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5zdGF0ZS50aXRsZSBhZnRlciBzZXQgc3RhdHVzJywgdGhpcy5zdGF0ZS50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGVzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuZGVzY3JpcHRpb24gYWZ0ZXIgc2V0IHN0YXR1cycsIHRoaXMuc3RhdGUuZGVzY3JpcHRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXR1cygpO1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0dXMobmV3UHJvcHMpO1xuICB9XG5cbiAgZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubWVkaWFVcmwgJiYgdGhpcy5zdGF0ZS5tZWRpYUFsdCkge1xuICAgICAgLy8gICByZXR1cm4gKFxuICAgICAgLy8gICAgIDxCdXR0b24gb25DbGljaz17ICgpID0+IHtcbiAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgIG1lZGlhSWQ6ICcnLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgbWVkaWFBbHQ6ICcnLFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgbWVkaWFVcmw6ICcnXG4gICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAvLyAgICAgICAgICAgICAgIH0gfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCI+XG4gICAgICAvLyAgIFJlbW92ZSBzbGlkZSBpbWFnZVxuICAgICAgLy8gPC9CdXR0b24+XG4gICAgICAvLyAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmxfc2xpZGVfX2ltYWdlXCIgc3JjPXsgdGhpcy5zdGF0ZS5tZWRpYVVybCB9IGFsdD17IHRoaXMuc3RhdGUubWVkaWFBbHQgfSBvbkNsaWNrPXsgb3BlbkV2ZW50IH0gLz5cbiAgICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUubWVkaWFVcmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidmxfc2xpZGVfX2ltYWdlXCIgc3JjPXsgdGhpcy5zdGF0ZS5tZWRpYVVybCB9IGFsdD1cInNsaWRlIGltYWdlXCIgb25DbGljaz17IG9wZW5FdmVudCB9IC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgb3BlbkV2ZW50IH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiPlxuICAgICAgUGljayBhIHNsaWRlIGltYWdlXG4gICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25NZWRpYVNlbGVjdChtZWRpYSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdtZWRpYSBzZWxlY3RlZCcsIG1lZGlhKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1lZGlhSWQ6IG1lZGlhLmlkLFxuICAgICAgbWVkaWFBbHQ6IG1lZGlhLmFsdCxcbiAgICAgIG1lZGlhVXJsOiBtZWRpYS51cmxcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVNsaWRlQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgaGFuZGxlU2xpZGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTbGlkZUNoYW5nZSh7XG4gICAgICBudW1iZXI6IHRoaXMucHJvcHMubnVtYmVyLFxuICAgICAgbWVkaWFJZDogdGhpcy5zdGF0ZS5tZWRpYUlkLFxuICAgICAgbWVkaWFVcmw6IHRoaXMuc3RhdGUubWVkaWFVcmwsXG4gICAgICBtZWRpYUFsdDogdGhpcy5zdGF0ZS5tZWRpYUFsdCxcbiAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuc3RhdGUuZGVzY3JpcHRpb25cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2bF9zbGlkZVwiPlxuICAgICA8TWVkaWFVcGxvYWQgb25TZWxlY3Q9eyB0aGlzLm9uTWVkaWFTZWxlY3QgfSB2YWx1ZT17IHRoaXMuc3RhdGUubWVkaWFJZCB9IHJlbmRlcj17ICh7b3Blbn0pID0+IHRoaXMuZ2V0SW1hZ2VCdXR0b24ob3BlbikgfSAvPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInZsX3NsaWRlX19jb250ZW50XCI+XG4gICAgICAgPFJpY2hUZXh0IGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9XCJ0cnVlXCIgdGFnTmFtZT1cImg0XCIgY2xhc3NOYW1lPXsgXCJ2bF9zbGlkZV9fdGl0bGVcIiB9IGxhYmVsPVwiU2xpZGUgdGl0bGVcIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgdmFsdWU9eyB0aGlzLnByb3BzLnRpdGxlIH0gbmFtZT1cInRpdGxlXCJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudCB0aXRsZVwiIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICAgICAgPFJpY2hUZXh0IGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9XCJ0cnVlXCIgdGFnTmFtZT1cImgyXCIgY2xhc3NOYW1lPXsgXCJ2bF9zbGlkZV9fZGVzY3JpcHRpb25cIiB9IGxhYmVsPVwiU2xpZGUgZGVzY3JpcHRpb25cIiBoZWxwPVwiRW50ZXIgc29tZSB0ZXh0XCIgdmFsdWU9eyB0aGlzLnByb3BzLmRlc2NyaXB0aW9uIH0gbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29udGVudCB0aXRsZVwiIG9uQ2hhbmdlPXsgKGNvbnRlbnQpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVNsaWRlQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB9IC8+XG4gICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cbi8vIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVcIj5cbi8vICAgICAgPGltZyBjbGFzc05hbWU9XCJzbGlkZV9faW1hZ2VcIiAvPlxuLy8gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlX19jb250ZW50XCI+XG4vLyAgICAgICAgPGg0PjwvaDQ+XG4vLyAgICAgICAgPHA+PC9wPlxuLy8gICAgICA8L2Rpdj5cbi8vICAgIDwvZGl2PiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9