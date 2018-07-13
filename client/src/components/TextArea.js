import React, { Component } from 'react';
import { withUser } from 'hoc';
import TextAreaEditable from 'components/TextAreaEditable';

class Text extends Component {

  constructor() {
    super();
    this.state = { isEditable: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isEditable: !this.state.isEditable });
  }

  render() {

    const {
      tag = 'div',
      isLoggedIn = false,
      children,
      ...props
    } = this.props;

    const { isEditable = false } = this.state;

    return (
      <div>
        <TextAreaEditable
          tag={tag}
          isEditable={isLoggedIn && isEditable}
          onChange={this.toggle}
          {...props}
        >
          {children}
        </TextAreaEditable>
        { isLoggedIn && !isEditable &&
          <span onClick={this.toggle}>Edit</span>
        }
      </div>
    )

  }
}

export default withUser(Text);
