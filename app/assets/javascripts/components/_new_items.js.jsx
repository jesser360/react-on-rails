
var NewItem = React.createClass({

handleClick() {
  var house = this.props.house;
  var name = this.refs.name.value;
  var description = this.refs.description.value;
  var amount = this.refs.amount.value;
  var is_paid = false;
  var house_id = house.id;
  var item = {house_id: house_id, name: name,
    description: description, amount: amount,
    is_paid: is_paid};
    console.log('in click', item);
  $.ajax({
    url:'/api/v1/items',
    type: 'POST',
    data: {item},
    success: (item) => {
      this.props.handleSubmit(item);
    }
  });
},

  render() {
    return (
      <div>
          <input ref ='name' placeholder='enter item name' />
          <input ref='description' placeholder='describe it'/>
          <input ref='amount' placeholder='enter amount'/>
          <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
