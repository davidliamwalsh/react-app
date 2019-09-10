import Article  from '../../components/Article'

describe('<Article />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Article />
    )

    expect(component).toMatchSnapshot()
  })
}) 