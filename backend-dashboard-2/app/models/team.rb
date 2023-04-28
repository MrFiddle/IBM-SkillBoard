class Team
  include Mongoid::Document
  include Mongoid::Timestamps
  #we'll let the team possess the predetermined id value of mongo
  field :name, type: String

  has_many :employee_teams
  has_many :manager_teams

  def manager
    manager_teams.first&.manager
  end
end
