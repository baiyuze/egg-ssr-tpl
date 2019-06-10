import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      test: '我是测试'
    }
  }

  onClick() {
  }

  componentWillMount() {

  }

  render() {

    return <div className='title-name'>
      <h1>
        {this.props.counter}
      </h1>

      <h2>{this.state.test}</h2>
      <button onClick={this.onClick.bind(this)}>点我加1</button>
    </div>
  }
}

export default Counter
