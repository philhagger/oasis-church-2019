import React from 'react';

const style = {
  height: '100vh',
  'font-size': '1.6rem'
};

class TestPage extends React.Component {
  render() {
    return (
      <div style={style} id={this.props.page}>
        This is test {this.props.page}
      </div>
    );
  }
}

export default TestPage;
