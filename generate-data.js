const { faker } = require('@faker-js/faker')
const fs = require('fs')

faker.locale = "vi"

function generateCategories(n) {
  const categoryList = []

  Array.from(new Array(n)).forEach(() => {
    categoryList.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.department()
    })
  })

  return categoryList
}

function generateProducts(categories = [], n) {
  const productList = []

  categories.forEach(cat => {
    Array.from(new Array(n)).forEach(() => {
      productList.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        image: faker.image.nature(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        color: faker.commerce.color(),
        categoryId: cat.id
      })
    })
  })

  return productList
}

(()=> {

  const db = {
    categories: [],
    products: [],
    profile: {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      avatar: faker.image.avatar()
    }
  }

  const categoryList = generateCategories(10)
  const productList = generateProducts(categoryList, 10)

  db.categories = categoryList
  db.products = productList

  fs.writeFile('db.json', JSON.stringify(db), () => {
    console.log('Saved database successfully');
  })
})()