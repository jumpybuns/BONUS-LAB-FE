import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import receiverAPIResponse from '../fixtures/receivers.json';
import ReceiverPage from './ReceiverPage';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://radiant-plains-82409.herokuapp.com/api/v1/receivers',
    (req, res, ctx) => {
      return res(ctx.json(receiverAPIResponse));
    }
  )
);

describe('All Receivers Container Test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders All Receivers', async () => {
    render(
      <MemoryRouter>
        <ReceiverPage />
      </MemoryRouter>
    );
    screen.getAllByAltText('loading');

    const listOfReceivers = await screen.findByTestId('Receivers');

    return waitFor(() => {
      expect(listOfReceivers).not.toBeEmptyDOMElement();
    });
  });
});
