import { Component } from 'react'

class Slider extends Component {

  componentDidMount () {
    if (document.querySelector("li[data-behavior='slider_item']")) {
      const slides = document.querySelectorAll("li[data-behavior='slider_item']")
      
      const prev = document.querySelector("div[data-behavior='slider_prev']"),
            next = document.querySelector("div[data-behavior='slider_next']")
      
      let currentSlide = 0
      
      function nextSlide () {
        goToSlide(currentSlide + 1)
      }
      
      function prevSlide () {
        goToSlide(currentSlide - 1)
      }
      
      function goToSlide(n){
        slides[currentSlide].className = 'c-slider__item'
        currentSlide = (n + slides.length) % slides.length
        slides[currentSlide].className = 'c-slider__item c-slider__item--current'
      }
      
      next.onclick = function() {
        nextSlide()
      }
      
      prev.onclick = function() {
        prevSlide()
      }  
    }
  }

  render () {
    return <div className="c-slider__container">
      <ul className="c-slider">
        <li data-behavior="slider_item" className="c-slider__item c-slider__item--current">
          <h4><a href="https://davidliamwalsh.github.io/welford-landing-page/" className="c-link">Welford Bouquet</a></h4>
          <img src="/static/welford.png" className="c-slider__item--image" />
        </li>
        <li data-behavior="slider_item" className="c-slider__item">
          <h4><a href="https://davidliamwalsh.github.io/etchasketch/" className="c-link">Etcha Sketch</a></h4>
          <img src="/static/etcha.png" className="c-slider__item--image" />
        </li>
        <li data-behavior="slider_item" className="c-slider__item">
          <h4><a href="#" className="c-link">Blogger</a></h4>
          <img src="/static/blogger.png" className="c-slider__item--image" />
        </li>
        <li data-behavior="slider_item" className="c-slider__item">
          <h4><a href="https://davidliamwalsh.github.io/rockpaperscissors/" className="c-link">Rock Paper Scissors</a></h4>
          <img src="/static/rockpaper.png" className="c-slider__item--image" />
        </li>
        <li data-behavior="slider_item" className="c-slider__item">
          <h4><a href="https://davidliamwalsh.github.io/calculator/" className="c-link">Calculator</a></h4>
          <img src="/static/calculator.png" className="c-slider__item--image" />
        </li>
      </ul>
    <div className="c-controls">
      <div data-behavior="slider_prev" className="c-controls__btn c-controls__btn--prev">
        <button className="o-control__button o-control__button--lefttop" />
        <button className="o-control__button o-control__button--leftbottom" />
      </div>
      <div data-behavior="slider_next" className="c-controls__btn c-controls__btn--next">
        <button className="o-control__button o-control__button--righttop" />
        <button className="o-control__button o-control__button--rightbottom" />
      </div>
    </div>
  </div>
  }
}

export default Slider