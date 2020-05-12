import React from 'react'
import { render, cleanup, fireEvent } from 'utils/test-utils';
import CommentBox from 'components/CommentBox'

afterEach(cleanup)


// WITHOUT DESCRIBE
const setup = () => {
  const utils = render(<CommentBox/>)
  const textArea = utils.getByLabelText('comment-box')
  const button = utils.container.querySelector('button')
  const form = utils.container.querySelector('form')
  return {
    textArea,
    button,
    form,
    ...utils
  }
}

// // Note: testing library disadvises such tests, where we're testing html elements that may loose its tags, over to one from a user perspective

test('has a text area and a button', () => {
  const { textArea, button } = setup()
  expect(textArea).toBeTruthy()
  expect(button).toBeTruthy()
});

test('should take the text-area value', () => {
  const { textArea } = setup()
  fireEvent.change(textArea, { target: { value: 'hello'}})
  expect(textArea.value).toBe('hello')
})

test('should clear the text area when submitted', () => {
  const { button, textArea } = setup()
  fireEvent.click(button)
  expect(textArea.value).toBe('')
})

test('same as above but with form', () => {
  const { form, textArea } = setup()
  fireEvent.change(textArea, { target: { value: 'hello' } })
  fireEvent.submit(form)
  expect(textArea.value).toBe('')
})


// WITH DESCRIBE
describe('the text area', () => {
  let textArea, form;

  beforeEach(() => {
    const { getByLabelText, container } = render(<CommentBox/>)
    textArea = getByLabelText('comment-box')
    form = container.querySelector('form')
    fireEvent.change(textArea, { target: { value: 'hello' } })
  })

  test('should take the text-area value', () => {    
    expect(textArea.value).toBe('hello')
  })
  test('same as above but with form', () => {
    fireEvent.change(textArea, { target: { value: 'hello' } })
    fireEvent.submit(form)
    expect(textArea.value).toBe('')
  })
})


