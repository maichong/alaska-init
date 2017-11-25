/**
 * @copyright Maichong Software Ltd. 2017 http://maichong.it
 * @date 2017-03-21
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class LoginWrapper extends React.Component {
  props: {
    children: any
  };

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        <div style={{
          textAlign: 'center',
          marginTop: 30,
          fontSize: 12
        }}
        >Powered By Alaska
        </div>
      </div>
    );
  }
}
