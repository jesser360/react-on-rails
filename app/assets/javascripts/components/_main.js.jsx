
var Main = React.createClass ({
getInitialState(){
  return {house: []}
},

componentDidMount() {
{this.setState({ house: this.props.house})};
var house = this.props.house;
console.log('hey were in main', house);
},

  render() {
  let house=this.props.house
    return (
      <div>
      <Header/>
      <h1 className ="text-center">{house.id} house Page</h1>
         <Body house={this.props.house}/>
      </div>
      )
     }
  });
