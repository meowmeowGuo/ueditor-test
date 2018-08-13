/**
 * Created by GuoMiaomiao on 2018/4/18.
 */
import React from 'react';
// import UE from '../ueditor/ueditor.all';
const UE = window.UE;
// let editor=null;
class Ueditor extends React.Component {
  static defaultProps = {
    config: {},
  }

  constructor(props){
    super(props);
    this.state = {
      content:'',
      editor:'',
    };
  }

  componentDidMount(){
    this.initEditor()
  }

  componentWillUnmount() {
    // 组件卸载后，清除放入库的id
    UE.delEditor(this.props.id);
  }

  initEditor() {
    /*初始化编辑器*/
    const { id, config } = this.props;
    const ueEditor = UE.getEditor(this.props.id, config);
    const self = this;

    ueEditor.ready((ueditor) => {
      if (!ueditor) {
        UE.delEditor(id);
        self.initEditor();
      }
    });
    let editor = ueEditor;
    this.setState({editor});
  }
  getVal(){
    /*获取编辑器内容函数*/
    let {editor} = this.state;
    let content = editor.getContent();
    return content;
  }
  render(){
    let { content,id } = this.props;
    return (
      <div >
        <textarea id={id}
                  defaultValue={content}
                  onChange={this.getVal}/>
      </div>
    )
  }
}
export default Ueditor;
