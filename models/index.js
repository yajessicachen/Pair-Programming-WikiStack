const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false});


const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    // allowNull: false

  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
})


Page.addHook('beforeValidate', (page, options) => {
  page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
  // slug(page.title)

});




const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})



db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


  module.exports = { db, Page, User };
