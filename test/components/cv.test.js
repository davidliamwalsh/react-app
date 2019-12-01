import CV from '../../components/CV'

describe('<CV />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <CV />
    )

    expect(component).toMatchSnapshot()
  })
}) 