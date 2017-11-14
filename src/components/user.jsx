import React from 'react';
import '../css/reset-form.css';
import '../css/user.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user
    this.state.imgBatch = this.props.user.img
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



  onNameInputChange = (e) => this.setState({name: e.target.value})
  onDescriptionInputChange = (e) => this.setState({description: e.target.value})
  onImgInputChange = (e) => this.setState({imgBatch: e.target.value})

  toggleIsHuman = () => {
    const isHuman= !this.state.isHuman
    this.setState({isHuman})
  }


  render () {
    const { name, description, isHuman, img, isEditing, imgBatch } = this.state
    const { onNameInputChange, onDescriptionInputChange, onImgInputChange,toggleIsHuman } = this
    // Decide to clearly separate the Logic when the component is edit with an if statement.
    // As logic is very different and it's make the code more readable
    // Drawback ui is design twice
      if (isEditing) {
        return (
      <div className={`user-card ${isEditing ? "is-editing": ""} `}
        onClick={this.getClickHandler(() => this.setState({isEditing:true}))}
      >
        <img
          className="user-card-img img-is-editing"
          src={img}>
        </img>
        {isEditing ?
          <input
            className="img-url-input"
            value={imgBatch}
            onChange={onImgInputChange}
          ></input>:""}
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
      </div>)
    } else {
      return(
        <div className="user-card"
            onClick={this.getClickHandler(() => this.setState({isEditing:true}))}
        >
          <img
            className="user-card-img"
            src={img}>
          </img>
          <div className="user-card-content" >

            <input
              className="user-card-name"
              value={name}
              onChange={onNameInputChange}
            ></input>

            <input
              className="user-card-description"
              value={description}
              onChange={onDescriptionInputChange}
              ></input>

            <div
              className="user-card-is-human"
            >
              {isHuman? "✓": "" }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default (User);
