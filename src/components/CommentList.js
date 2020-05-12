import React from 'react'
import { connect } from 'react-redux'

const CommentList = ({ comments }) => {
  console.log(comments);
  
  const renderComments = () => {    
    return comments.map((comment, i) =>
      <li key={i}>{comment}</li>
    )
  }

  return (
    <div data-testid="commentsList">
      <ul>
        {renderComments()}
      </ul>
    </div>
  )
}

const mapStateToProps = ({comments}) => {  
  return {
    comments
  }
}

export default connect(mapStateToProps)(CommentList)