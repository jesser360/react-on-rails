
var Body = React.createClass({

  getInitialState(){
    return { items: [], users:[], payments: [], house: this.props.house}
  },

  componentDidMount() {
  this.setState({ house : this.props.house});
  house = this.state.house;
  console.log('in body', house);
    $.getJSON('/api/v1/items.json', (response) =>
      {this.setState({ items: response})
    });
    $.getJSON('/api/v1/users.json', (response) =>
      {this.setState({ users: response})
    });
    $.getJSON('/api/v1/payments.json', (response) =>
      {this.setState({ payments: response})
    });
  },

  handleSubmit(item) {
  console.log('making item',item);
    var newState=this.state.items.concat(item);
    this.setState({ items: newState });
  },

  handleSubmitUser(user) {
  console.log('making user',user);
    var newState=this.state.users.concat(user);
    this.setState({ users: newState});
  },

  handleSubmitPayment(payment) {
    console.log('you made new payment',payment, 'here is debter', payment.in_debter);
    var newState=this.state.payments.concat(payment);
    this.setState({ payments: newState});
  },

  handleUpdateUserDebt(newUser) {
  var users=this.state.users.filter((user) => {
  return user.id != newUser.id});
  users.push(newUser);
  this.setState({ users: users});
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type:'DELETE',
      success: () => {
        this.removeItem(id);
      }
    });
  },

  handleDeleteUser(id) {
    $.ajax({
      url: `/api/v1/users/${id}`,
      type:'DELETE',
      success: () => {
        this.removeUser(id);
      }
    });
  },

  handleDeletePayment(id) {
    $.ajax({
      url: `/api/v1/payments/${id}`,
      type:'DELETE',
      success: () => {
        this.removePayment(id);
      }
    });
  },

  removeItem(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });
    this.setState({ items: newItems});
  },

  removeUser(id) {
    var newUsers = this.state.users.filter((user) => {
      return user.id != id;
    });
    this.setState({ users: newUsers});
  },

  removePayment(id) {
    var newPayments = this.state.payments.filter((payment) => {
      return payment.id != id;
    });
    this.setState({ payments: newPayments});
  },

  handleUpdate(item) {
    console.log('new stuff',item)
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: { item: item },
      success: () => {
        this.updateItems(item);
      }
    })
  },

  updateItems(item) {
    var items = this.state.items.filter((i) => {
      return i.id !=item.id });
      items.push(item);
      this.setState({ items :items});
  },


  render() {
      return (
        <div className ="container">
          <div className ="row">
            <div className ="col-xs-4">
              <h2>Create a new item</h2>
              <NewItem handleSubmit={this.handleSubmit} house={this.props.house}/>
              <h3>All items</h3>
              <AllItems items={this.state.items} handleDelete={this.handleDelete}  onUpdate={this.handleUpdate} house={this.props.house}/>
            </div>
            <div className ="col-xs-4">
            <h2>Create a new user</h2>
              <NewUser handleSubmitUser={this.handleSubmitUser} house={this.props.house}/>
              <AllUsers users={this.state.users} handleDeleteUser={this.handleDeleteUser} house={this.props.house}/>
            </div>
            <div className ="col-xs-4">
            <h2>Charge a roomy</h2>
            <NewPayment handleSubmitPayment={this.handleSubmitPayment} handleUpdateUserDebt={this.handleUpdateUserDebt} house={this.props.house}/>
            <AllPayments payments={this.state.payments} handleDeletePayment={this.handleDeletePayment} house={this.props.house}/>
            </div>
          </div>
        </div>
     )

   }
});
