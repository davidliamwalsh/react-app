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

    let sliderStyle = {
      transform:`translateX(${this.state.activeIndex * -100}%)`,
      transition: '0.2s'
    }

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
        </div>,

        <div className="c-slider__item"> 
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Etcha Sketch</a>
            </Link>
          </h4>
          <img src="/static/etcha-laptop.png" className="c-slider__item--image-laptop" />
        </div>,

        <div className="c-slider__item">
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Blogger</a>
            </Link>
          </h4>
          <img src="/static/blogger-laptop.png" className="c-slider__item--image-laptop" />
        </div>,

        <div className="c-slider__item"> 
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Rock Paper Scissors</a>
            </Link>
          </h4>
          <img src="/static/rockpaper-laptop.png" className="c-slider__item--image-laptop" />
        </div>,
        
        <div className="c-slider__item">
          <h4>
            <Link href="/">
              <a className="c-slider__item--link">Calculator</a>
            </Link>
          </h4>
          <img src="/static/Calculator-laptop.png" className="c-slider__item--image-laptop" />
        </div>,

        ].map((item, index) => {
          let computedClass = index === (this.state.activeIndex) ? 'c-slider__list active' : 'c-slider__list';
          return <li className={computedClass} key={index}>{item}</li>
        })}
      </ul>

      <div className="c-controls">
        <div className="c-controls__btn c-controls__btn--prev" onClick={this.onPrevClick}>
          <button className="o-control__button o-control__button--lefttop" />
          <button className="o-control__button o-control__button--leftbottom" />
        </div>
        <div className="c-controls__btn c-controls__btn--next" onClick={this.onNextClick}>
          <button className="o-control__button o-control__button--righttop" />
          <button className="o-control__button o-control__button--rightbottom" />
        </div>
      </div>
      
    </div>
  }
}

export default Slider