Current version working for ruby lang and gemfiles is .ruby-version's file one.

*ruby-3.0.2*

in !/IBM-SKILLBOARD/backend-dashboard

**bundle install** 


will automatically update and install all necessary gems for an api app with Rails

initial test for connectivity in cmd

**rails s**


## Basics of models for initial setup of rails
There are **5** models according to database's initial setup.
```ruby
#1 which has Category-> id, name
class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.integer :category_id
      t.string :category_name

#2 which has Certificate -> name, category, type and industry's compatibility
class CreateCertificates < ActiveRecord::Migration[7.0]
  def change
    create_table :certificates do |t|
      t.string :certificate_name
      t.text :certificate_category
      t.text :certificate_type
      t.float :certificate_industry_compatibility

#3 which has a Team -> team's area, team's manager
class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :team_area
      t.string :team_manager

#4 which has an Employee -> name, id and position
class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :employee_id
      t.string :position

#5 which has the main user -> name, email, id and position
class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :user_name
      t.text :user_email
      t.string :user_id
      t.string :user_position
```
Too lazy to add the other missing collections to the models cuz if it's wrong I'm gonna be sad, so for now we are adding just five out of ten.

Now, we directioned every table to a route, a nested route.
```ruby
Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do #simple versioner
        resources :categories
        resources :certificates
        resources :teams
        resources :employees
        resources :users
      
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
```
Every time we want to access each table's index then we type *i.e.* **https://localhost:3000/api/v1/categories**