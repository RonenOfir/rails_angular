class CustomersController < ApplicationController
  before_action :authenticate_user!

  def index
    @customers = Customer.where('id > 0').all

    respond_to do |f|
      f.html { render :index }
      f.json { render json: @customers }
    end
  end

  def show
    @customer = Customer.find(params[:id])

    respond_to do |f|
      f.json { render json: @customer }
    end
  end

  def create
   cust = Customer.create(name:params[:name], email:params[:email], user_id: @user.id)
    respond_to do |f|
      f.json { render json: cust }
    end
  end

  def update
    @customer = Customer.find(params[:id])

    # @customer.update(quantity_sold: params[:_json] )

    respond_to do |f|
      f.json { render json: @customer }
    end
  end

  private
    def customer_params
      params.require(:customer).permit(:name, :email)
    end
end
