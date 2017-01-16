class Review < ApplicationRecord
  belongs_to :movie
  before_create :set_review_date

  private
   def set_review_date
     self.review_date = Date.today
   end
end
