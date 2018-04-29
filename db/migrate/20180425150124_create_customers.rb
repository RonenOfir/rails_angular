class CreateCustomers < ActiveRecord::Migration[5.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email, limit: 50
      t.string :phone, limit: 20
      t.references :user, foreign_key: true
      t.boolean :status

      t.timestamps
    end
    add_index :customers, :name
  end
end
