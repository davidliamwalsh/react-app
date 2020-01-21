import { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll';

class Slider extends Component {

  constructor (props) {
    super (props);
    this.state = {
      activeIndex: 0
    }

    this.onNextClick = this.onNextClick.bind(this)
    this.onPrevClick = this.onPrevClick.bind(this)
  }

  onNextClick () {
    if(this.state.activeIndex < 4){
      this.setState({activeIndex: this.state.activeIndex + 1});
    } else {
      this.setState({activeIndex: 0})
    } 
  }

  onPrevClick () {
    if(this.state.activeIndex > 0) {
      this.setState({activeIndex: this.state.activeIndex - 1});
    } else {
      this.setState({activeIndex: 4})
    }
  }

  sliderData () {
    return [
      <ScrollAnimation duration={1} animateIn="fadeIn">
        <div className="c-slider__item">
          <h4>
            <a href="https://davidliamwalsh.github.io/welford/" className="c-slider__item--link">Welford</a>
          </h4>
          <img src="/static/welford-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/welford-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/welford-mobile.png" className="c-slider__item--image-mobile" />
        </div>
      </ScrollAnimation>,

      <ScrollAnimation duration={1} animateIn="fadeIn">
        <div className="c-slider__item"> 
          <h4>
            <a href="https://davidliamwalsh.github.io/etchasketch/" className="c-slider__item--link">Etcha Sketch</a>
          </h4>
          <img src="/static/etcha-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/etcha-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/etcha-mobile.png" className="c-slider__item--image-mobile" />
      </div>
      </ScrollAnimation>,

      <ScrollAnimation duration={1} animateIn="fadeIn">
        <div className="c-slider__item">
          <h4>
            <a href="https://davidwalsh-blogger.herokuapp.com/" className="c-slider__item--link">Blogger</a>
          </h4>
          <img src="/static/blogger-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/blogger-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/blogger-mobile.png" className="c-slider__item--image-mobile" />
      </div>
      </ScrollAnimation>,

      <ScrollAnimation duration={1} animateIn="fadeIn">
        <div className="c-slider__item"> 
          <h4>
            <a href="https://davidliamwalsh.github.io/rockpaperscissors/" className="c-slider__item--link">Rock Paper Scissors</a>
          </h4>
          <img src="/static/rockpaper-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/rockpaper-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/rockpaper-mobile.png" className="c-slider__item--image-mobile" />
        </div>
      </ScrollAnimation>,

      <ScrollAnimation duration={1} animateIn="fadeIn">
        <div className="c-slider__item">
          <h4>
            <a href="https://davidliamwalsh.github.io/calculator/" className="c-slider__item--link">Calculator</a>
          </h4>
          <img src="/static/calculator-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/calculator-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/calculator-mobile.png" className="c-slider__item--image-mobile" />
      </div>
      </ScrollAnimation>,

    ].map((item, index) => {
      let computedClass = index === (this.state.activeIndex) ? 'c-slider__list active' : 'c-slider__list';
      return <li className={computedClass} key={index}>{item}</li>
    })
  }

  controlData () {
    return <div className="c-control">
      <div className="c-control__btn c-control__btn--prev" onClick={this.onPrevClick}>
        <button className="c-control__btn-default c-control__btn--lefttop" />
        <button className="c-control__btn-default c-control__btn--leftbottom" />
      </div>
      <div className="c-control__btn c-control__btn--next" onClick={this.onNextClick}>
        <button className="c-control__btn-default c-control__btn--righttop" />
        <button className="c-control__btn-default c-control__btn--rightbottom" />
      </div>
    </div>
  }

  render () {

    return <div className="c-slider__outer">
      <ul className='c-slider__container'>
        {this.sliderData()}
      </ul>
      {this.controlData()}
    </div>
  }
}

export default Slider