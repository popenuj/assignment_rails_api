# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

101.times do |n|
  Movie.create(title: Faker::Hipster.words(3).join(" "), release_date: Faker::Date.between(365.days.ago, 365.days.from_now))
end

movie_ids = Movie.pluck(:id)

movie_ids.each do |id|
  rand(5).times do
    Review.create(reviewer_name: Faker::Hipster.sentence(3), title: Faker::Hipster.words(10).join(" "), review_text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", review_date: Faker::Date.between(365.days.ago, 365.days.from_now), movie_id: id)
  end
end
