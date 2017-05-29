
var Body = React.createClass({

  getInitialState(){
    return { items: [], users:[]}
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) =>
      {this.setState({ items: response})
    });
    $.getJSON('/api/v1/users.json', (response) =>
      {this.setState({ users: response})
    });
  },

  handleSubmit(item) {
    var newState=this.state.items.concat(item);
    this.setState({ items: newState })
  },

  handleSubmitUser(user) {
  console.log('making user',user)
    var newState=this.state.users.concat(user);
    this.setState({ users: newState})
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
            <div className ="col-xs-6">
              <h2>Create a new item</h2>
              <NewItem handleSubmit={this.handleSubmit}/>
              <h3>All items</h3>
              <AllItems items={this.state.items} handleDelete={this.handleDelete}  onUpdate={this.handleUpdate}/>
            </div>
            <div className ="col-xs-6">
            <h2>Create a new user</h2>
              <NewUser handleSubmitUser={this.handleSubmitUser}/>
              <AllUsers users={this.state.users} handleDeleteUser={this.handleDeleteUser}/>
            </div>
          </div>
        </div>
     )

   }
});
