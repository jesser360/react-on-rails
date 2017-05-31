
var AllUsers = React.createClass({

  handleDeleteUser(id){
    this.props.handleDeleteUser(id);
    console.log('in all users,', id)
  },

  render(){
  var house=this.props.house;
    var users = this.props.users.map((user) => {
      if(user.house_id == house.id){
        return (
          <div key={user.id}>
          <User user={user}
          handleDeleteUser={this.handleDeleteUser.bind(this, user.id)}/>
          </div>
        )
      };
      });


    return(
    <div>
    {users}
    </div>
    )
  }
});
