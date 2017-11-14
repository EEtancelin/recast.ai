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
    return (
      <div className={`user-card ${isEditing ? "is-editing": ""} `}
        onClick={this.getClickHandler(() => this.setState({isEditing:true}))}
      >
          <img
            className={`user-card-img ${isEditing ? "img-is-editing": ""} `}
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
              className={`user-card-name ${isEditing ? "name-is-editing": ""} `}
              value={name}
              onChange={onNameInputChange}
            ></input>

            <input
              className={`user-card-description ${isEditing ? "description-is-editing": ""} `}
              value={description}
              onChange={onDescriptionInputChange}
              ></input>

            <div
              className={`user-card-is-human ${isEditing ? "is-human-is-editing": ""} `}
              onClick={toggleIsHuman}
            >
              {isHuman? "✓": "" }
            </div>
          </div>
      </div>
    );
  }
}

export default (User);
