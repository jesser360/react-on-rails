var Item = React.createClass({
  getInitialState() {
    return {editable: false}
  },

  handleEdit(){
  var house = this.props.house;
    if(this.state.editable) {
      var name = this.refs.edname.value;
      var description = this.refs.eddes.value;
      var amount = this.refs.edamount.value;
      var id = this.props.item.id;
      var house_id = house.id;
      var item = {id: id, name: name, description: description, amount: amount, house_id: house_id};
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable});
  },

  render() {
    var name = this.state.editable ? <input type ='text' ref='edname' defaultValue={this.props.item.name}/> : <h3>{this.props.item.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='eddes' defaultValue={this.props.item.description}/> : <h4>{this.props.item.description}</h4>;
    var amount  = this.state.editable ? <input type='integer' ref='edamount' defaultValue={this.props.item.amount}/> : <h4>{this.props.item.amount}</h4>;
    return (
      <div>
        {name}
        {description}
        {amount}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Change' : 'Edit'}</button>
      </div>
    )
  }
});
