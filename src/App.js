import React, { Component } from 'react';
import { Form, Button } from 'antd';
import Ueditor from './component/ueditor';
import logo from './logo.svg';
import './App.css';
const FormItem = Form.Item;
class AppForm extends Component {
  handleSubmit(){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        values.content1=this.refs.content1.getVal();
        values.content2=this.refs.content2.getVal();
        console.log(values);
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Form>
          <Ueditor  id="content1" height="500" ref="content1" />
          <Ueditor  id="content2" height="500" ref="content2" />
          <Button type={'primary'} onClick={this.handleSubmit.bind(this)}>保存</Button>
        </Form>
      </div>
    );
  }
}

const App = Form.create()(AppForm);

export default App;
