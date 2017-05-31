
var NewUser = React.createClass({

componentDidMount() {
var house = this.props.house;
this.setState({myhouse : house});
console.log('new users cmon',house)
},

  handleClick() {
  var house = this.props.house;
    console.log(house.id, 'in handle click')
    var name = this.refs.name.value;
    var house_id = house.id;
    var total_debt = 0;
    $.ajax({
      url:'/api/v1/users',
      type:'POST',
      data: {user: {name: name, house_id: house_id,
       total_debt: total_debt} },
      success: (user) => {
        this.props.handleSubmitUser(user);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='name' placeholder="enter roomys name" />
        <button onClick={this.handleClick}>Create</button>
      </div>
    )
  }
});
