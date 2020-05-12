import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('save comment', () => {
  test('has the correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  test('has the correct payload', () => {
    const action = saveComment('new comment')
    expect(action.payload).toEqual('new comment')
  })
})