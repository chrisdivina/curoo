import React, { Component } from 'react';
import withUser from 'hoc/withUser';

class EditableText extends Component {

  constructor() {
    super();
    this.emitChange = this.emitChange.bind(this);
  }

  emitChange(evt) {
    if (!this.htmlEl) return;
    const { innerHTML } = this.htmlEl;
    const { onChange } = this.props;
    if (onChange) {
      const newEvt = {
        ...evt,
        target: {
          ...evt.target,
          value: innerHTML
        }
      };
      onChange(newEvt);
    }
  }

  render() {

    const {
      tag,
      isLoggedIn,
      children,
      ...props
    } = this.props;
    return React.createElement(
      tag,
      {
        ...props,
        ref: (e) => this.htmlEl = e,
        onBlur: this.emitChange,
        contentEditable: isLoggedIn
      },
      children
    );
  }
}

export default withUser(EditableText);
