//@flow

import React from 'react';

type Props = {};
type State = {};

export default class IndexPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    alert('clicked');
  };

  render() {
    return (
      <div onClick={this.handleClick}>IndexPage</div>
    );
  }
}
