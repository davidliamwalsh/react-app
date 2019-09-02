import { Component } from 'react'

class SkillsBar extends Component {

  componentDidMount () {
    if (document.querySelector("div[data-behavior='bar_html']")) {
      const html = () => {
        document.querySelector("div[data-behavior='bar_html']").className = "c-skills__container__wrapper--html-active"
      }
      
      const css = () => {
        document.querySelector("div[data-behavior='bar_css']").className = "c-skills__container__wrapper--css-active"
      }
      
      const javascript = () => {
        document.querySelector("div[data-behavior='bar_javascript']").className = "c-skills__container__wrapper--javascript-active"
      }

      const react = () => {
        document.querySelector("div[data-behavior='bar_react']").className = "c-skills__container__wrapper--react-active";
      }

      const ror = () => {
        document.querySelector("div[data-behavior='bar_ror']").className = "c-skills__container__wrapper--ror-active";
      }
      
      setTimeout(html, 2000)
      setTimeout(css, 2200)
      setTimeout(javascript, 2400)
      setTimeout(react, 2600)
      setTimeout(ror, 2800)
    }
  }

  render () {
    return <div className="c-skills">
      <h2 className="c-main__head">My Skills</h2> 
      <hr className="c-main__head-line" />

      <div className="c-skills__container">
        <div className="c-skills__container__wrapper">
          <div data-behavior="bar_html" className="c-skills__container__wrapper--html">
            HTML
            <span className="c-skills__container__wrapper--right">95%</span>
          </div>
        </div>
          
        <div className="c-skills__container__wrapper">
          <div data-behavior="bar_css" className="c-skills__container__wrapper--css">
            CSS
            <span className="c-skills__container__wrapper--right">80%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div data-behavior="bar_javascript" className="c-skills__container__wrapper--javascript">
          <span>JScript</span>
            <span className="c-skills__container__wrapper--right">64%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div data-behavior="bar_react" className="c-skills__container__wrapper--react">
            React
            <span className="c-skills__container__wrapper--right">25%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div data-behavior="bar_ror" className="c-skills__container__wrapper--ror">
            RoR
            <span className="c-skills__container__wrapper--right">50%</span>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SkillsBar