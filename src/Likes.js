import React from 'react';
import { connect } from 'react-redux'

const Likes = (props) => {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>dislike</button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log('mapStateProps', state)
  const { likesReducer } = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log('click')
      const action = { type: 'INCREMENT'}
      dispatch(action)
    },

    onDecrementLikes: () => {
      console.log('click dec')
      const action = { type: 'DECREMENT'}
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
