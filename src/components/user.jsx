import React from 'react';
import '../css/reset-form.css';
import '../css/user.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user
    this.state.imgInput = this.props.user.img
    this.state.isEditing = false
  }

  getClickHandler = (onDblClick) => {
      var timeoutID = null;
      const delay = 250;
      return function (event) {
          if (!timeoutID) {
              timeoutID = setTimeout(function () {
                  timeoutID = null
              }, delay);
          } else {
              onDblClick()
              timeoutID = clearTimeout(timeoutID);
          }
      };
  }

  edit = () => this.setState({isEditing:true})
  submit = () => (null)

  onNameInputChange = (e) => this.setState({name: e.target.value})
  onDescriptionInputChange = (e) => this.setState({description: e.target.value})
  onImgInputChange = (e) => this.setState({imgInput: e.target.value})

  toggleIsHuman = () => {
    const isHuman= !this.state.isHuman
    this.setState({isHuman})
  }


  render () {
    const { name, description, isHuman, isEditing , imgInput} = this.state
    const { img } = this.props.user
    const { onNameInputChange, onDescriptionInputChange, onImgInputChange,toggleIsHuman, edit, submit } = this
    // Decide to clearly separate the Logic when the component is edit with an if statement.
    // As logic is very different and it's make the code more readable
    // Drawback ui is design twice
      if (isEditing) {
        return (
      <div className="user-card is-editing"
      >
        <img
          className="user-card-img img-is-editing"
          src={img}>
        </img>

          <input
            className="img-url-input"
            value={imgInput }
            onChange={onImgInputChange}
          ></input>

          <div className="user-card-content" >
            <input
              className="user-card-name name-is-editing"
              value={name}
              onChange={onNameInputChange}
            ></input>

            <input
              className="user-card-description description-is-editing"
              value={description}
              onChange={onDescriptionInputChange}
              ></input>

            <div
              className="user-card-is-human is-human-is-editing"
              onClick={toggleIsHuman}
            >
              {isHuman? "✓": "" }
          </div>
        </div>
        <div class="btn blue"
         onClick={submit}
        >
          submit
        </div>
      </div>)
    } else {
      return(
        <div className="user-card"
            onClick={this.getClickHandler(edit)}
        >
          <img
            className="user-card-img"
            src={img}>
          </img>

          <div className="user-card-content" >
            <input
              className="user-card-name"
              value={name}
            ></input>

            <input
              className="user-card-description"
              value={description}
              ></input>

            <div
              className="user-card-is-human"
            >
              {isHuman? "✓": "" }
            </div>
          </div>

          <div class="btn blue"
           onClick={edit}
          >edit
          </div>
        </div>
      )
    }
  }
}

export default (User);
