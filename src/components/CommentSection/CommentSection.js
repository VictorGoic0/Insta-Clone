import React, { Component } from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment } from "../../actions";
import PropTypes from "prop-types";

class CommentSection extends Component {
  state = {
    comment: {
      post_id: this.props.post_id,
      user_id: 15,
      text: ""
    }
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        text: e.target.value
      }
    }));
    console.log(this.state);
  };

  addNewComment = (e, comment) => {
    e.preventDefault();
    this.props.addComment(comment);
  };

  render() {
    return (
      <div className="comments">
        {this.props.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <p className="timestamp">10 minutes ago</p>
        <form onSubmit={e => this.addNewComment(e, this.state.comment)}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChanges}
            placeholder="Add a comment..."
            required
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default connect(
  null,
  { addComment }
)(CommentSection);
