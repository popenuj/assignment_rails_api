class MoviesController < ApplicationController
  def index
    @movie = Movie.new
    @movies = Movie.all
    respond_to do |format|
      format.json
      format.html
    end
  end

  def show
    @movie = Movie.find_by(id: params[:id])
    respond_to do |format|
      format.json
    end
  end

  def create
    @movie = Movie.new(movie_params)
    unless @movie.save
      render json: { errors: @movie.errors.full_messages }, status: :unprocessable_entity
    end
    respond_to do |format|
      format.json { redirect_to @movie}
    end
  end

  private
    def movie_params
      params.require(:movie).permit(:title)
    end
end
