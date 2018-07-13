import React, { Component } from 'react';
import Editor from 'react-md-editor';

class TextAreaEditable extends Component {

  constructor() {
    super();
    this.updateCode = this.updateCode.bind(this);
  }

  updateCode(code) {
    console.log(code);
  }

  render() {

    const { tag = 'div', isEditable = false, children, ...props } = this.props;

    if (isEditable) {
      return React.createElement(
        tag,
        {...props,},
        children
      );
    }

    return <Editor
      value={children}
      onChange={this.updateCode}
    />

  }
}

export default TextAreaEditable;
