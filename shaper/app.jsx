class Translater extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      outputText: '',
      translateUrl: 'https://translate.google.co.jp'
    };

    this.onChangeText = this.onChangeText.bind(this);
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
    this.setState({ outputText: e.target.value.replace(/-\s/g, "").replace(/-\n/g, "").replace(/\n/g, " ") })
    this.setState({ translateUrl: "https://translate.google.co.jp/?hl=ja#en/ja/" + e.target.value.replace(/-\s/g, "").replace(/-\n/g, "").replace(/\n/g, " ") })
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
        <button className="clear" onClick={this.textClear}><img src="cross.png" /></button>
        <textarea placeholder="ここに英文を入力" type="textarea" value={this.state.inputText} onChange={this.onChangeText}/>
        <div id="button_wrapper">
          <button className="translate"><a href={this.state.translateUrl}>Google翻訳で翻訳する</a></button>
          <button className="copy" data-clipboard-target=".outputText" onClick={this.textClear}>Copy!</button>
        </div>
        <textarea placeholder="ここに整形後のテキストが出力されます" className="outputText" value={this.state.outputText}/>
      </div>
    );
  }
}

React.render(
    <Translater />,
    document.getElementById('app-container')
);
