import OverviewCard from '../OverviewCard';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

const setup = (props) =>
  render(
    <Router history={history}>
      <OverviewCard {...props} />
    </Router>,
  );

describe('OverviewCard', () => {
  const props = {
    occupancy: ['6 Adults', '3 Children under 10'],
    to: '/',
    altImg: '/',
    roomName: 'house',
    overview: 'alskna',
    rate: '267',
    img: '/ajnsd',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = setup(props);
  });

  const renderData = [
    'component-overview-card',
    'image',
    'room-name',
    'overview',
    'occupancy',
    'rate',
  ];

  describe.each(renderData)('When rendering', (component) => {
    test(`${renderData.id} renders correct text`, () => {
      expect(wrapper.getByTestId(component)).toBeInTheDocument();
    });
  });

  test('renders occupancy list', () => {
    expect(wrapper.getByText(props.occupancy[1])).toBeInTheDocument();
  });
});
