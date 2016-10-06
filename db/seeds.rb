# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Note.create(title: "Note one", content: "I'm a note. You should definitely read me.")

Note.create(title: "Note two", content: "I'm a note. You should not definitely read me.")

Note.create(title: "Note three", content: "I'm a note. You should definitely  not read me.")