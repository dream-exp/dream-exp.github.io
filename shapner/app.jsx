class Translater extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      outputText: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.textShapner = this.textShapner.bind(this);
    this.textClear = this.textClear.bind(this);

    let clipboard = new Clipboard('.copy');
      clipboard.on('success', function(e) {
        console.info('Trigger:', e.trigger);
      });
      clipboard.on('error', function(e) {
        console.error('Trigger:', e.trigger);
      });
  }

  onChangeText(e) {
    this.setState({ inputText: e.target.value });
    this.textShapner();
  }

  textShapner() {
    let text = this.state.inputText.replace(/-\s/g, "");
    text = text.replace(/-\n/g, "")
    text = text.replace(/\n/g, "");
    this.setState({ outputText: text });
    console.log(this.state.outputText);
  }

  textClear() {
    this.setState({
      inputText: '',
      outputText: ''
    });
  }

  render() {
    return (
      <div>
        <textarea placeholder="ここに英文を入力" type="textarea" value={this.state.inputText} onChange={this.onChangeText} />
        <div className="buttons">
          <button className="clear" onClick={this.textClear}>Clear</button>
          <button className="shaping" onClick={this.textShapner}>Shaping!</button>
        <button className="copy" data-clipboard-target=".outputText" onClick={this.textClear}>Copy!</button>
        </div>
        <textarea className="outputText" value={this.state.outputText}/>
      </div>
    );
  }
}

React.render(
    <Translater />,
    document.getElementById('app-container')
);
