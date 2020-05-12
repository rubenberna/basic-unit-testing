import { Types } from 'actions/types'

export const saveComment = (comment) => {
  console.log('action:', comment);
  
  return {
    type: Types.SAVE_COMMENT,
    payload: comment
  }
}