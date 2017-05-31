
var AllItems = React.createClass({


  onUpdate(item) {
    this.props.onUpdate(item);
  },

  handleDelete(id){
    this.props.handleDelete(id);
  },

    render() {
    var house = this.props.house
      var items = this.props.items.map((item) => {
      if(item.house_id == house.id){
        return (
          <div key ={item.id}>
          <Item item={item}
              handleDelete={this.handleDelete.bind(this, item.id)}
              handleUpdate={this.onUpdate}
              house={this.props.house}/>
          </div>
        )
      }
   });

    return(
      <div>
      {items}
      </div>
    )
  }
});
