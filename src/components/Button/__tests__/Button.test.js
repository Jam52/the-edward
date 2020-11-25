import Button from '../Button';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const setup = () =>
  render(
    <Router history={history}>
      <Button text="button" to="/" />
    </Router>,
  );

test('renders TheEdward header', () => {
  const { getByTestId } = setup();
  expect(getByTestId('component-button')).toBeInTheDocument();
});
