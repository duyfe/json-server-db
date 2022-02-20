const { faker } = require('@faker-js/faker')
const fs = require('fs')

faker.locale = "vi"

function generateCategories(n) {
  const categoryList = []

  const now = new Date()

  Array.from(new Array(n)).forEach(() => {
    categoryList.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: now.getTime(),
      updateAt: now.getTime()
    })
  })

  return categoryList
}

function generateAdmin() {
  return {
    "email": "admin@admin.com",
    "password": "admin"
  }
}

function generateProducts(categories = [], n) {
  const productList = []
  const now = new Date()

  categories.forEach(cat => {
    Array.from(new Array(n)).forEach(() => {
      productList.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        image: faker.image.nature(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        color: faker.commerce.color(),
        categoryId: cat.id,
        createdAt: now.getTime(),
        updateAt: now.getTime()
      })
    })
  })

  return productList
}

(()=> {

  const db = {
    categories: [],
    products: [],
    users: []
  }

  const categoryList = generateCategories(10)
  const productList = generateProducts(categoryList, 10)

  db.categories = categoryList
  db.products = productList

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Saved database successfully');
  })
})()