import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    deleteComment,
    clickLikeIcon,
    backgroundClassnames,
  } = props
  const {id, name, textArea, time, isLiked} = commentDetails

  const onClickCommentDelete = () => {
    deleteComment(id)
  }

  const clickLike = () => {
    clickLikeIcon(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const fontColor = isLiked ? 'change-like-text-color' : null

  const backgroundColor =
    backgroundClassnames[
      Math.ceil(Math.random() * backgroundClassnames.length - 1)
    ]

  return (
    <li>
      <div className="name-des-card">
        <div className={`first-letter-of-name ${backgroundColor}`}>
          <p>{name[0]}</p>
        </div>

        <div className="name-textarea-card">
          <p className="name-ele">
            {name} <span className="time-span-ele"> {time}</span>
          </p>
          <p>{textArea}</p>
        </div>
      </div>

      <div className="like-and-delete-btn-card">
        <div className="like-btn-text-card">
          <button type="button" className="like-btn" onClick={clickLike}>
            <img src={likeImgUrl} alt="like" />
          </button>
          <p className={`like-text ${fontColor}`}>Like</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickCommentDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
