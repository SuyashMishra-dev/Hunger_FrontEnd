import React, { Component } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [],
    };
  }

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search);
    let id = query.get("id");
    console.log(id);
    this.setState({
      id,
    });
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <div
        style={{
          width: "50%",
          margin: "auto",
          padding: "4rem 1rem",
        }}
      >
        <FilePond
          ref={(ref) => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
          maxFiles={3}
          server={`http://localhost:5000/api/v1/foods/${this.state.id}/photo`}
          oninit={() => this.handleInit()}
          onupdatefiles={(fileItems) => {
            // Set current file objects to this.state
            this.setState({
              files: fileItems.map((fileItem) => fileItem.file),
            });
            setTimeout(() => {
              this.props.history.push("/");
            }, 4000);
          }}
        ></FilePond>
      </div>
    );
  }
}
