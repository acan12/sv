class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :summary      
      t.string :content
      t.string :author
      t.integer :like_count
      t.references :user
      t.references :comment

      t.timestamps
    end
    
    add_index :articles , [:title, :summary, :author]
  end
end
