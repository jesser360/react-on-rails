
var AllPayments = React.createClass({

  handleDeletePayment(id){
    this.props.handleDeletePayment(id);
    console.log('going to delete', id)
  },

  render(){
    var house=this.props.house;
      var payments = this.props.payments.map((payment) => {
        if(payment.house_id == house.id){
          return (
            <div key={payment.id} className="border text-center">
            <Payment payment={payment}
            handleDeletePayment={this.handleDeletePayment.bind(this, payment.id)}/>
            </div>
          )
        };
      });

        return(
          <div>
          {payments}
          </div>
        )
    }

});
