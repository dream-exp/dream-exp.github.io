class Credit extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isModalShow: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ isModalShow: !this.state.isModalShow })
    }
    
    render() {
        if (this.state.isModalShow) {
            return(
                <div id="modal">
                    <div>
                        <div>
                            <p className="head">
                                製作者について
                            </p>
                            <p>製作者：<a href="http://dream-exp.net/profile/">片岡 駿之介</a></p>
                            <p>Mail ： dreamexp834@gmail.com</p>
                            <p>twitter : <a href="https://twitter.com/dream_exp">@dream_exp</a></p>
                        </div>
                        <div>
                            <p className="head">
                                投げ銭について
                            </p>
                            <p>Amazonギフトコードによる投げ銭を受け付けております。<br /><a href="https://www.amazon.co.jp/Amazon%E3%82%AE%E3%83%95%E3%83%88%E5%88%B8-E%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%97/dp/BT00DHI8G4">こちらのリンク</a>より、15円以上の任意の金額から送付可能です。<br />受取人のEメールアドレス欄には dreamexp834@gmail.com をご記入ください。
                            </p>
                        </div>
                        <button className="close" onClick={this.handleClick}>閉じる</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="footlink" onClick={this.handleClick}>
                    <p>製作者について | 投げ銭受付中です </p>
                </div>
            );
        }
    }
}
        
React.render(
    <Credit />,
    document.getElementById('credit-container')
);
            