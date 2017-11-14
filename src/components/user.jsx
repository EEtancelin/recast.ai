import React from 'react';
import '../css/reset-form.css';
import '../css/user.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.state = Object.assign({...this.props.user})
    this.state.imgInput = this.props.user.profile.img
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
  endEdit = () => this.setState({isEditing:false})

  submit = () => {
    this.props.submit(this.userFromState(this.state))
    this.endEdit()
  }

  userFromState = (state) => ({
    name: state.name,
    profile: {desc: state.desc, img: state.imgInput },
    isHuman: state.isHuman,
  })

  onNameInputChange = (e) => this.setState({name: e.target.value})

  onDescriptionInputChange = (e) => {
    var profile = Object.assign(this.state.profile)
    delete profile.desc
    this.setState({profile: {...profile, desc: e.target.value}})
  }

  onImgInputChange = (e) => this.setState({imgInput: e.target.value})

  toggleIsHuman = () => {
    const isHuman= !this.state.isHuman
    this.setState({isHuman})
  }


  render () {
    const {isEditing , imgInput, } = this.state
    const { name, description, isHuman } = this.state
    const { img, desc } = this.state.profile
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
              value={desc}
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
              value={desc}
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
