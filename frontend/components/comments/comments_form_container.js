import React from "react";
import { connect } from "react-redux";
import CommentsForm from "./comments_form";
import {
  fetchComments,
  createComment,
  deleteComment,
} from "../../actions/comment_actions";

const mSTP = (state) => {
  return {
    errors: state.errors,
    author_id: state.session.currentUser.id
  };
};

const mDTP = (dispatch) => {
  return {
    fetchComments: (userId) => dispatch(fetchComments(userId)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(CommentsForm);
