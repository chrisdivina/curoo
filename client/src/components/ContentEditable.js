import React, { Component } from 'react';

class ContentEditable extends Component {

  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isEditable) {
      this.htmlEl.focus();
    }
  }

  emitChange(e) {
   const { onChange } = this.props;

   if (onChange) {
     onChange({
       ...e,
       target: {
         ...e.target,
         value: this.htmlEl.innerHTML
       }
     });
   }

  }

  render() {

    const { tag = 'div', isEditable = false, children, ...props } = this.props;

    // Based on https://github.com/lovasoa/react-contenteditable/blob/master/src/react-contenteditable.js
    return React.createElement(
      tag,
      {
        ...props,
        ref: e => this.htmlEl = e,
        onBlur: this.emitChange,
        contentEditable: isEditable
      },
      children
    );

  }
}

export default ContentEditable;
