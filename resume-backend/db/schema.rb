# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_210_213_142_619) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'educations', force: :cascade do |t|
    t.bigint 'resume_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'school_name'
    t.string 'major'
    t.daterange 'study_length'
    t.integer 'gpa'
    t.index ['resume_id'], name: 'index_educations_on_resume_id'
  end

  create_table 'headers', force: :cascade do |t|
    t.bigint 'resume_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'name'
    t.integer 'phone'
    t.string 'location'
    t.string 'website'
    t.string 'email'
    t.index ['resume_id'], name: 'index_headers_on_resume_id'
  end

  create_table 'resumes', force: :cascade do |t|
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'skills', force: :cascade do |t|
    t.bigint 'resume_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'name'
    t.index ['resume_id'], name: 'index_skills_on_resume_id'
  end

  create_table 'work_experiences', force: :cascade do |t|
    t.bigint 'resume_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'company_name'
    t.string 'title'
    t.text 'responsibilites'
    t.daterange 'employment_length'
    t.index ['resume_id'], name: 'index_work_experiences_on_resume_id'
  end

  add_foreign_key 'educations', 'resumes'
  add_foreign_key 'headers', 'resumes'
  add_foreign_key 'skills', 'resumes'
  add_foreign_key 'work_experiences', 'resumes'
end
