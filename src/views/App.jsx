/**
 * @copyright Maichong Software Ltd. 2018 http://maichong.it
 * @date 2018-02-10
 * @author Liang <liang@maichong.it>
 */

// @flow

import React from 'react';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps: Props) {
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>App</div>
    );
  }
}
