import React, { Component } from 'react';
import Uploader from "../Uploader";
import "./Submit.css";
import API from "../../utils/API";

class Submit extends Component {

  state = {
    url: "",
    description: ""
  }

  saveUrl = (url) => {
    this.setState({ url });
  }

  submitPicture = () => {
    API.savePicture({
      url: this.state.url,
      description: this.state.description,
      user: this.props.userId
    }).then(res => this.setState({ description: "" }));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  resetModal = () => {
    this.setState({ description: "" });
  }

  render() {
    return (
      <div className="modal fade" id="submitPhoto" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Submit a Photo!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <Uploader id="picture" name="file" data-images-only data-clearable onChange={value => this.saveUrl(value)} />
                {this.state.url &&
                  <div className="form-group mt-4">
                    <label htmlFor="pictureDescription">Add a Description</label>
                    <textarea className="form-control" id="pictureDescription" rows="3" name="description" value={this.state.description} onChange={this.handleInputChange} placeholder="Please include any additional information you can provide to help users IdentifyIt!"></textarea>
                  </div>
                }
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.resetModal}>Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.submitPicture}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;