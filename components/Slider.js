import { Component } from 'react'
import Link from 'next/link'

class Slider extends Component {

  constructor (props) {
    super (props);
    this.state = {
      activeIndex: 0
    }

    this.onNextClick = this.onNextClick.bind(this)
    this.onPrevClick = this.onPrevClick.bind(this)
  }

  onNextClick() {
    if(this.state.activeIndex < 4){
      this.setState({activeIndex: this.state.activeIndex + 1});
    } else {
      this.setState({activeIndex: 0})
    } 
  }

  onPrevClick() {
    if(this.state.activeIndex > 0) {
      this.setState({activeIndex: this.state.activeIndex - 1});
    } else {
      this.setState({activeIndex: 4})
    }
  }

  render () {

    return <div className="c-slider">

      <ul className='c-slider__container'>
        {[
        <div className="c-slider__item">
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Welford</a>
            </Link>
          </h4>
          <img src="/static/welford-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/welford-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/welford-mobile.png" className="c-slider__item--image-mobile" />
        </div>,

        <div className="c-slider__item"> 
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Etcha Sketch</a>
            </Link>
          </h4>
          <img src="/static/etcha-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/etcha-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/etcha-mobile.png" className="c-slider__item--image-mobile" />
        </div>,

        <div className="c-slider__item">
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Blogger</a>
            </Link>
          </h4>
          <img src="/static/blogger-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/blogger-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/blogger-mobile.png" className="c-slider__item--image-mobile" />
        </div>,

        <div className="c-slider__item"> 
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Rock Paper Scissors</a>
            </Link>
          </h4>
          <img src="/static/rockpaper-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/rockpaper-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/rockpaper-mobile.png" className="c-slider__item--image-mobile" />
        </div>,
        
        <div className="c-slider__item">
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Calculator</a>
            </Link>
          </h4>
          <img src="/static/Calculator-laptop.png" className="c-slider__item--image-laptop" />
          <img src="/static/Calculator-tablet.png" className="c-slider__item--image-tablet" />
          <img src="/static/Calculator-mobile.png" className="c-slider__item--image-mobile" />
        </div>,

        ].map((item, index) => {
          let computedClass = index === (this.state.activeIndex) ? 'c-slider__list active' : 'c-slider__list';
          return <li className={computedClass} key={index}>{item}</li>
        })}

<       div className="c-control">
          <div className="c-control__btn c-control__btn--prev" onClick={this.onPrevClick}>
            <button className="c-control__btn-default c-control__btn--lefttop" />
            <button className="c-control__btn-default c-control__btn--leftbottom" />
          </div>
          <div className="c-control__btn c-control__btn--next" onClick={this.onNextClick}>
            <button className="c-control__btn-default c-control__btn--righttop" />
            <button className="c-control__btn-default c-control__btn--rightbottom" />
          </div>
        </div>
      </ul>
    </div>
  }
}

export default Slider