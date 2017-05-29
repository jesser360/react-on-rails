var User = React.createClass({
  getInitialState() {
    return {editableUsers: false}
  },


  render(){
    var name = <h3>{this.props.user.name}</h3>;
    var house = <h4>{this.props.user.house_id}</h4>;
    var total_debt = <h4>{this.props.user.total_debt}</h4>;
    return (
      <div>
      <div className ="row">
      {name}
      </div>
      <div className ="row">
      House number:{house}
      </div>
      <div className ="row">
      Debt owed{total_debt}
      </div>
      <button onClick={this.props.handleDeleteUser}>Delete User</button>
      </div>
    )
  }

});
