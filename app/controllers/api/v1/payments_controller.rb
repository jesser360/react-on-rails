class Api::V1::PaymentsController < Api::V1::BaseController
  def index
    respond_with Payment.all
    @payments = Payment.all
    @payments.each do |payment|
      payment.payer = User.find_by_id(payment.payer_id)
      payment.in_debter = User.find_by_id(payment.in_debter_id)
      payment.item = User.find_by_id(payment.item_id)
      end
  end

  def create
    respond_with :api, :v1,
    @payment = Payment.create(payment_params)
      @user = User.find_by_id(@payment.in_debter_id)
      @user.total_debt += @payment.amount
      @user.save
  end

  def destroy
    respond_with Payment.destroy(params[:id])
  end

  def update
    user = Payment.find(params["id"])
    user.update_attributes(payment_params)
    respond_with payment, json: user
  end

  private
  def payment_params
     params.require(:payment).permit(:item_id, :payer_id, :in_debter_id, :amount, :house_id)
  end
end
