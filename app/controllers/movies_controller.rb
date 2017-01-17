class MoviesController < ApplicationController

  def index
    @movie = Movie.new
    @movies = Movie.all.limit(15).where("id > ?", (params[:start_id] || 0))
    respond_to do |format|
      format.json
      format.html
    end
  end

  def show
    @movie = Movie.find_by(id: params[:id])
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)
    unless @movie.save
      render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
    end
    redirect_to @movie, format: :json
  end

  private
    def movie_params
      params.require(:movie).permit(:title)
    end
end
