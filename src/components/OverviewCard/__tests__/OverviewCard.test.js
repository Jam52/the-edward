import OverviewCard from '../OverviewCard';
import { render } from '@testing-library/react';

describe('OverviewCard', () => {
  const props = {
    occupancy: ['6 Adults', '3 Children under 10'],
  };
  let wrapper;
  beforeEach(() => {
    wrapper = render(<OverviewCard {...props} />);
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
