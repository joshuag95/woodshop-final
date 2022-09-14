require "faker"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding 🌱"
5.times do User.create(name: Faker::Name.unique.name , address: Faker::Address.city , phone: Faker::PhoneNumber.phone_number , email: Faker::Internet.email )
end

10.times do Product.create(name: Faker::House.furniture , inventory: rand(1..10) , description: Faker::Marketing.buzzwords, price: rand(12.50..199.99).round(2), image: "placeholder.gif" )
end