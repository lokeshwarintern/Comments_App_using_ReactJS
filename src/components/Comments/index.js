import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    textArea: '',
  }

  onChangeInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({textArea: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, textArea} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      textArea,
      time: formatDistanceToNow(new Date()),
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      textArea: '',
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {commentsList, name, textArea} = this.state
    return (
      <div className="bg-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />

          <form className="form-ele" onSubmit={this.addComment}>
            <p className="para-ele">Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              onChange={this.onChangeInput}
              placeholder="Your name"
              className="text-input-ele"
            />
            <textarea
              rows="10"
              cols="20"
              className="text-input-ele"
              value={textArea}
              onChange={this.onChangeTextArea}
              placeholder="Your Comment"
            >
              ffv
            </textarea>
            <button type="submit" className="add-comment-btn">
              Add Comment
            </button>
          </form>
        </div>
        <div>
          <hr className="hr-line" />
          <p>
            <span className="span-comments-count">{commentsList.length}</span>{' '}
            Comments
          </p>
          <ul className="ul-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteComment={this.onDelete}
                clickLikeIcon={this.onClickLike}
                backgroundClassnames={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
