import React, {Component, PropTypes} from 'react';
export default class <%= pascalEntityName %>Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions,state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
  }

  render() {
    return (
      <div>
        <h1> <%= pascalEntityName %>Container </h1>
        <h2>当前路由为：{this.props.NOW_LOCATION}</h2>
        {this.props.children}
      </div>
    );
  }
}
