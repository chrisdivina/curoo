import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import withUpload from 'hoc/withUpload';

class ProfilePicture extends Component {

  state = {
    file: null,
    blob: ''
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {

    const { files = [] } = e.target;
    const file = files[0];

    if (file) {

      const reader = new FileReader();
      reader.addEventListener('load',
        () => this.setState({
          file,
          blob: reader.result
        }),
        false
      );

      reader.readAsDataURL(file);

    }

  }

  handleSubmit() {
    const { file } = this.state;
    if (file) {
      this.props.upload(file);
    }
  }



  render() {

    const { blob } = this.state;

    return (

      <div>
        { blob.length > 0 &&
          <img src={blob} />
        }
        <input
          ref={el => this.input = el}
          style={{display: 'none'}}
          type="file"
          name="image"
          onChange={this.handleChange}
        />
        <Button
          color="primary"
          onClick={() => this.input.click()}
        >
            Upload
        </Button>
        <Button
          color="primary"
          onClick={this.handleSubmit}
        >
            Save
        </Button>
      </div>
    );

  }

}

export default withUpload(ProfilePicture);
