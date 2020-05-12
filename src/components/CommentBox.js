import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from 'actions'

const CommentBox = (props) => {
  const [comment, setComment] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.saveComment(comment)
    setComment('')
  }

  return (
    <form data-testid="commentBox" onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea
        aria-label='comment-box'
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default connect(null, actions)(CommentBox)