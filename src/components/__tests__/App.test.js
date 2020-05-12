import React from 'react';
// import ReactDOM from 'react-dom'
import { render, cleanup } from 'utils/test-utils';
import App from 'components/App';

// test('contains comment box', () => {
//   const { getByText } = render(<App />);
//   const textElement = getByText(/Comment Box/i);
//   expect(textElement).toBeInTheDocument();
// });

// it('same as above', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App/>, div);
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// })

afterAll(cleanup)

let container;

beforeEach(() => {
  container = render(<App/>)
})


it('should have comment box', () => {
  expect(container.getByTestId(/commentsList/i)).toBeTruthy()
})

// it('checking if App exists ', () => {
//   expect(container.asFragment(<App />)).toMatchSnapshot()
// }) 

it('gets it', () => {
  expect(container.getByTestId(/commentBox/i)).toBeTruthy()
});

