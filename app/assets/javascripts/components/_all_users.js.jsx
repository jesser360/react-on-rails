
var AllUsers = React.createClass({

  handleDeleteUser(id){
    this.props.handleDeleteUser(id);
    console.log('in all users,', id)
  },

  render(){
    var users = this.props.users.map((user) => {
      return (
        <div key={user.id}>
        <User user={user}
        handleDeleteUser={this.handleDeleteUser.bind(this, user.id)}/>
        </div>
      )
    });

    return(
    <div>
    {users}
    </div>
    )
  }
});
