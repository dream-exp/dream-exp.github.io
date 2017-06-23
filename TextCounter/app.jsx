class TextCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(e) {
   this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>文字数カウンター</h1>
        <p className="num">現在{this.state.text.length}文字です</p>
        <textarea type="textarea" value={this.state.text} onChange={this.onChangeText} />
        <p >改行・スペースも文字数に含まれます</p>
      </div>
    );
  }
}

React.render(
    <TextCounter />,
    document.getElementById('app-container')
);
