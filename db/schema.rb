# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525190649) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "houses", force: :cascade do |t|
    t.string "house_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "amount"
    t.boolean "is_paid"
  end

  create_table "messages", id: :serial, force: :cascade do |t|
  end

  create_table "orders", id: :serial, force: :cascade do |t|
  end

  create_table "payments", force: :cascade do |t|
    t.bigint "item_id"
    t.bigint "payer_id"
    t.bigint "in_debter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "amount"
    t.index ["in_debter_id"], name: "index_payments_on_in_debter_id"
    t.index ["item_id"], name: "index_payments_on_item_id"
    t.index ["payer_id"], name: "index_payments_on_payer_id"
  end

  create_table "products", id: :serial, force: :cascade do |t|
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "total_debt"
    t.bigint "house_id"
    t.index ["house_id"], name: "index_users_on_house_id"
  end

  add_foreign_key "users", "houses"
end
