# json-server-db

- Automatic generate database follow template
- Custom database in `generate-data.js`
```base
  {
    categories: [],
    products: [],
    profile: {}
  }
```
## Test API with VSCode
- Extension: [REST client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- Directory: `api-template/*.http`


## Development

```bash
  // run dev server
  $ npm run dev
```
- Default apiUrl: http://0.0.0.0:1234/api

## API List
| Method | path | result | note |
| ------ | ----------- | ------ | ----- |
| GET | /categories | [] | get all categories |
| GET | /categories/:id | {} | get category detail |
| PATCH | /categories/:id | {} | update category |
| DELETE | /categories/:id | {} | delete category |
| GET | /products | [] | get all products|
| GET | /products/:id | {} | get product detail |
| PATCH | /products/:id | {} | update product |
| DELETE | /products/:id | {} | delete product |
