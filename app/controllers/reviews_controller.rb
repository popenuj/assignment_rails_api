class ReviewsController < ApplicationController
  def index
    @review = Review.new
    @reviews = Review.all
    respond_to do |format|
      format.json
      format.html
    end
  end

  def show
    @review = Review.find_by(id: params[:id])
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    unless @review.save
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
    respond_to :js
  end

  private
    def review_params
      params.require(:review).permit(:title, :review_text, :reviewer_name, :movie_id)
    end
end
