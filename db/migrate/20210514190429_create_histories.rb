class CreateHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :histories do |t|
      t.text :data, array: true, default: []
      t.string :type

      t.timestamps
    end
  end
end
