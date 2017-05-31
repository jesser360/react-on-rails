var Payment = React.createClass({

  render(){
    var payer = <h3>{this.props.payment.payer.name}</h3>;
    var debter = <h3>{this.props.payment.in_debter.name}</h3>;
    var amount = <h3>{this.props.payment.amount}</h3>;
    var item = <h3>{this.props.payment.item.name}</h3>;
      return(
        <div>
          <div className="row">
           {debter}
           </div>
          <div className="row">
          Owes {payer}
          </div>
          <div className="row">
          {amount}
          </div>
          <div className="row">
          for buying the {item}
          </div>
          <button onClick={this.props.handleDeletePayment}>Paid?</button>
        </div>
      )
  }
});
