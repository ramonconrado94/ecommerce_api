'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
  up() {
    this.create('images', table => {
      table.increments()

      table.string('path', 255)

      table.integer('size').unsigned()

      table.string('original_name')

      table.string('extension', 10)

      table.timestamps()

      // table
      // .foreign('image_id')
      // .references('id')
      // .inTable('images')
      // .onDelete('cascade')
    })
  }

  down() {
    this.drop('images')

    // table.dropForeign('image_id')
  }
}

module.exports = ImageSchema
