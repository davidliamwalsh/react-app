import { Component } from 'react'

class SkillsBar extends Component {

  render () {
    return <div className="c-skills">
      <h2 className="c-main__head">My Skills</h2> 
      <hr className="c-main__head-line" />

      <div className="c-skills__container">
        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--html">
            HTML
            <span className="c-skills__container__wrapper--right">95%</span>
          </div>
        </div>
          
        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--css">
            CSS
            <span className="c-skills__container__wrapper--right">80%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--javascript">
          <span>JScript</span>
            <span className="c-skills__container__wrapper--right">64%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--react">
            React
            <span className="c-skills__container__wrapper--right">25%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--ror">
            RoR
            <span className="c-skills__container__wrapper--right">50%</span>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SkillsBar