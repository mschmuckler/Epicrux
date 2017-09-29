class CreateSeizures < ActiveRecord::Migration[5.0]
  def change
    create_table :seizures do |t|
      t.integer :user_id, null: false
      t.date :date, null: false
      t.time :start_time, null: false
      t.time :duration, null: false
      t.string :category
      t.string :triggers, array: true, default: []
      t.string :descriptions, array: true, default: []
      t.string :post_events, array: true, default: []
      t.text :custom_comment

      t.timestamps
    end

    add_index :seizures, :user_id
  end
end
