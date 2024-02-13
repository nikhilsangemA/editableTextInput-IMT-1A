import {Component} from 'react'

import './index.css'

class UserText extends Component {
  state = {userInput: '', initialBtn: true}

  changeUserText = event => {
    this.setState({userInput: event.target.value})
  }

  saveText = () => {
    this.setState({initialBtn: false})
  }

  editText = () => {
    this.setState({initialBtn: true})
  }

  render() {
    const {userInput, initialBtn} = this.state
    return (
      <div className="bgColor">
        <div className="userTextCont">
          <h1>Editable Text Input</h1>
          {initialBtn ? (
            <input
              type="text"
              className="input-edit"
              onChange={this.changeUserText}
              value={userInput}
            />
          ) : (
            <p>{userInput}</p>
          )}
          {initialBtn ? (
            <button type="button" className="btn-save" onClick={this.saveText}>
              Save
            </button>
          ) : (
            <button type="button" className="btn-save" onClick={this.editText}>
              Edit
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default UserText
