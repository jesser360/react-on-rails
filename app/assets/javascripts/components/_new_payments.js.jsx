
var NewPayment = React.createClass({

  handleClick() {
  var house = this.props.house;
  var house_id = house.id;
  var payer_id = this.refs.payer_id.value;
  var in_debter_id = this.refs.in_debter_id.value;
  var item_id = this.refs.item_id.value;
  var amount = this.refs.amount.value;
  var newUser = {house_id: house_id, total_debt: amount};
  var payment = {house_id: house_id, payer_id: payer_id, in_debter_id: in_debter_id, item_id: item_id, amount: amount};
      console.log('clicked', payment);
    $.ajax({
      url:'/api/v1/payments',
      type: 'POST',
      data: {payment},
      success: (payment) => {
        this.props.handleSubmitPayment(payment);
      }
    });
    $.ajax({
      url: `/api/v1/users/${in_debter_id}`,
      type: 'PUT',
      data: {newUser},
      success: (newUser) => {
        this.props.handleUpdateUserDebt(newUser);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref ='payer_id' placeholder='who paid?'/>
        <input ref='in_debter_id' placeholder="who owes money?"/>
        <input ref='amount' placeholder='for how much'/>
        <input ref='item_id' placeholder='for which item'/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
