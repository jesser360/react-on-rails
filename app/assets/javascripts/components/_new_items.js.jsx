
var NewItem = React.createClass({

handleClick() {
  var name = this.refs.name.value;
  var description = this.refs.description.value;
  var amount = this.refs.amount.value;
  var is_paid = false;
  $.ajax({
    url:'/api/v1/items',
    type: 'POST',
    data: {item: {name: name, description: description, amount: amount, is_paid: is_paid} },
    success: (item) => {
      this.props.handleSubmit(item);
    }
  });
},

  render() {
    return (
      <div>
        <div className ="row">
          <input ref ='name' placeholder='enter item name' />
          <input ref='description' placeholder='describe it'/>
        </div>
        <div className ="row">

          <input ref='amount' placeholder='enter amount'/>
          <button onClick={this.handleClick}>Submit</button>
      </div>
      </div>
    )
  }
});
