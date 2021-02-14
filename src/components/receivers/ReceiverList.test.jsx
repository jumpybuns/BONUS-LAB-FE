import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReceiverList from './ReceiverList';
import { MemoryRouter } from 'react-router-dom';

describe('ReceiverList component', () => {
  afterEach(() => cleanup());
  it('renders ReceiverList', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ReceiverList
          receivers={[
            {
              id: 1,
              manufacturer: 'McIntosh',
              model: 'MC2205',
              country: 'USA',
              year: '1970',
            },
          ]}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
