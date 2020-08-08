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
            <span className="c-skills__container__wrapper--right">85%</span>
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
            <span className="c-skills__container__wrapper--right">45%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--ror">
            RoR
            <span className="c-skills__container__wrapper--right">40%</span>
          </div>
        </div>

        <div className="c-skills__container__wrapper">
          <div className="c-skills__container__wrapper--php">
            PHP
            <span className="c-skills__container__wrapper--right">15%</span>
          </div>
        </div>
      </div>
    </div>
  }
}

export default SkillsBar