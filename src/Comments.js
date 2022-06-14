import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import uniqid from 'uniqid'
import {commentCreate} from './redux/actions'
import { commentsReducer } from './redux/commentsReducer';
import SingleComment from './SingleComment'

const Comments = (props) => {
  const [textComment, setTextComment] = useState('')



  const comments = useSelector(state => {
    console.log('redux state', state)
    const  { commentsState } = state
    return commentsReducer.comments
  })
  console.log('comments', comments)

  const dispatch = useDispatch()

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
  }

  return (
    <div  className='card-comments'>
      <form onSubmit={handleSubmit} className='comments-item-create'>
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hidden/>
      </form>
      <SingleComment/>
    </div>
  );
};

export default Comments;
