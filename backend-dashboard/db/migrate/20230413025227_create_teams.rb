class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :team_area
      t.string :team_manager

      t.timestamps
    end
  end
end
