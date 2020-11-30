import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

export const renderSetup = (child) => {
  const history = createMemoryHistory();
  return render(<Router history={history}>{child}</Router>);
};
