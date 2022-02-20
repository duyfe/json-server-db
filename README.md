# json-server-db

- Automatic generate database follow template
- Custom database in `generate-data.js`
```base
  {
    categories: [],
    products: [],
    users: []
  }
```
## Test API with VSCode
- Extension: [REST client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- Directory: `api-template/*.http`

### Authorization
  - first register user at `api-template/auth.http`
  - register
  ```bash
    POST /users/register
    {
      "email": "example@mail.com",
      "password": "password",
      "firstname": "Duy",
      "lastname": "Pham",
      "age": 30
    }
  ```
  - signin
  ```bash
    POST /users/signin
    {
      "email": "example@mail.com",
      "password": "password"
    }
  ```

## Development

```bash
  // run dev server
  $ npm run dev

  // start server
  $ npm start
```
- Default apiUrl: http://0.0.0.0:1234/api