class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.boolean :confirmed
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
