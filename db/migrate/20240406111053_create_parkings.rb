class CreateParkings < ActiveRecord::Migration[7.0]
  def change
    create_table :parkings, id: :uuid do |t|
      t.references :user, type: :uuid, null: false, foreign_key: true
      t.jsonb :geography
      t.datetime :start_time
      t.datetime :end_time
      t.boolean :is_parked
      t.text :comment

      t.timestamps
    end
  end
end
