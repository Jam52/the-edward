import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import CollapsibleSection from '../CollapsibleSection';

test('CollapsibleSection renders w/ error', () => {
  const { getByTestId } = render(<CollapsibleSection />);
  expect(getByTestId('component-collapsible-section')).toBeInTheDocument();
});

test('displays correct header', () => {
  const header = 'The Concierge';
  const { getByText } = render(<CollapsibleSection header={header} />);
  expect(getByText(header)).toBeInTheDocument();
});

test('children to not be in the dom before arrow is clicked', () => {
  const children = <div>test</div>;
  const { getAllByText } = render(
    <CollapsibleSection>{children}</CollapsibleSection>,
  );
  expect(getAllByText('test')).toHaveLength(0);
});
