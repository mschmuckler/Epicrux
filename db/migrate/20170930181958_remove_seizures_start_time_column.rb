class RemoveSeizuresStartTimeColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :seizures, :start_time
    remove_column :seizures, :duration
    change_column :seizures, :date, :datetime
    add_column :seizures, :duration, :integer
  end
end
