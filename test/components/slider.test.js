import Slider from '../../components/Slider'

describe('<Slider />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Slider />
    )

    expect(component).toMatchSnapshot()
  })
}) 