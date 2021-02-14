import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Receiver from './Receiver';

describe('Receiver component', () => {
  afterEach(() => cleanup());
  it('renders Receiver', () => {
    const { asFragment } = render(
      <Receiver
        manufacturer="McIntosh"
        model="MC2205"
        country="USA"
        year="1970"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
