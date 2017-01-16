class Movie < ApplicationRecord
  before_create :set_release_date
  has_many :reviews

  private
   def set_release_date
     release_date = Date.today
   end
end
