import SkillsBar from '../../components/SkillsBar'

describe('<SkillsBar />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SkillsBar />
    )

    expect(component).toMatchSnapshot()
  })
}) 