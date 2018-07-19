import React, { Component } from 'react';
import Uploader from "../Uploader";
import "./Submit.css";
import API from "../../utils/API";

class Submit extends Component {

  state = {
    url: ""
  }

  saveUrl = (url) => {
    this.setState({url});
  }

  submitPicture = () => {
    API.savePicture({
      url: this.state.url,
      user: "5b46afd6bd8c5f194cb62df5" // TODO: NEED TO PASS USER ID FROM PROPS/STATE
    }).then(res => console.log(res));
  }

  render() {
    return (
      <div className="modal fade" id="submitPhoto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Submit a Photo!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Uploader id="picture" name="file" data-images-only onChange={value => this.saveUrl(value)} />
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.submitPicture}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Submit;