import React from "react";

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.author_id,
      // video_id: this.props.videoId,
      video_id: 3
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createComment(this.state);
  }

  render() {
    return (
      <div className='comments-form-outter'>
        <form className='comments-form'>
          <div className='comments-form-container'>
            <input
              type='text'
              className="comments-form-input"
              value={this.state.body}
              placeholder='Add a public comment...'
              onChange={this.update('body')}
            />
            <button onClick={this.handleSubmit}>Comment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentsForm;
