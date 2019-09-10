import Navbar from '../../components/Navbar'

describe('<Navbar />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Navbar />
    )

    expect(component).toMatchSnapshot()
  })
}) 