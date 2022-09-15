require "faker"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing the ol' DB"
Product.destroy_all
puts "Destroyed products..."

puts "Seeding 🌱"
5.times do User.create(name: Faker::Name.unique.name , address: Faker::Address.city , phone: Faker::PhoneNumber.phone_number , email: Faker::Internet.email , password_digest: rand(100...999))
end

Product.create(name: "Rocking Horse" , inventory: rand(1..10) , description: "A sturdy toy for young kids.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/2273499/pexels-photo-2273499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Bar Stools" , inventory: rand(1..10) , description: "Great stools for your breakfast bar.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/2829032/pexels-photo-2829032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Wooden Spoon Set" , inventory: rand(1..10) , description: "Great wooden spoons for your non-stick pans.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/326268/pexels-photo-326268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Cafe Set" , inventory: rand(1..10) , description: "A beautiful cafe dining set.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Wooden Bench" , inventory: rand(1..10) , description: "The perfect bench for your garden.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/289445/pexels-photo-289445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Kitchen Island" , inventory: rand(1..10) , description: "Make your kitchen feel dynamic and new!", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/8902122/pexels-photo-8902122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Deluxe Dining Room" , inventory: rand(1..10) , description: "Our most deluxe furniture set.", price: rand(1200.50..10299.99).round(2), image: "https://images.pexels.com/photos/4221396/pexels-photo-4221396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Kitchen Cabinets" , inventory: rand(1..10) , description: "A standard cabinet set for most kitchens.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/3935337/pexels-photo-3935337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Cutting Board" , inventory: rand(1..10) , description: "Simple, handy, easy to clean.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/4197827/pexels-photo-4197827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Lazy Susan" , inventory: rand(1..10) , description: "A functional dining table centerpiece.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/8329339/pexels-photo-8329339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
Product.create(name: "Gary Shiplap" , inventory: rand(1..10) , description: "Gary is a bad worker, please take him.", price: rand(12.50..199.99).round(2), image: "https://images.pexels.com/photos/7203956/pexels-photo-7203956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )


puts "Alrighty, done."