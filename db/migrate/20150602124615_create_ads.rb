class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :name
      t.string :link
      t.string :partner
      t.string :view_count

      t.timestamps null: false
    end
  end
end
