class CreateCertificates < ActiveRecord::Migration[7.0]
  def change
    create_table :certificates do |t|
      t.string :certificate_name
      t.text :certificate_category
      t.text :certificate_type
      t.float :certificate_industry_compatibility

      t.timestamps
    end
  end
end
