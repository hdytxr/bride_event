# Bride Event

My Assets App is an application to manage your assets. It performs standard CRUD actions based on RESTful concept.
Bride Event is an application for online invitation of wedding.

This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

Tech Stack used to build this app :

- Node JS
- Express JS framework
- MySQL with Sequelize
- React JS
-

&nbsp;

## Global Responses

> These responses are applied globally on all endpoints

_Response (400 - Bad Request)_

```
{
  "message": "<your message for 400>"
}
```

_Response (401 - Unauthorized)_

```
{
  "message": "<your message for 401>"
}
```

_Response (404 - Not Found)_

```
{
  "message": "<your message for 404>"
}
```

&nbsp;

## Users endpoints

### POST /api/v1/register

> Create new user

_Request Header_

```
{
  "token": "<admin token>"
}
```

_Request Body_

```
  {
    "username": string,
    "email": string,
    "password": string,
  }
```

_Response (200)_

```
  {
    "id": 1,
    "email": string@email.com,
    "msg": "register success",
  }
```

### POST /api/v1/login

> Login user

_Request Header_

```

```

_Request Body_

```
  {
    "username": string,
    "password": string,
  }
```

_Response (200)_

```
  {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtZW1ldEBtYWlsLmNvbSIsImlhdCI6MTYyNjMxODQyMn0.oVtb-SFDG9zVo4w-MEmCFcrAaKmbj_o103KBS125CSE"
}
```

## RESTful endpoints

### GET /assets

> Get all assets

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
    "id": 1,
    "name": "<asset name>",
    "description": "<asset description>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  },
  {
    "id": 2,
    "name": "<asset name>",
    "description": "<asset description>",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z",
  }
]
```

---

### GET /assets/:id

> Get single asset as defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id": 1,
  "name": "<asset name>",
  "description": "<asset description>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

---

### POST /assets

> Create new asset

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "name": "<name to get insert into>",
  "description": "<description to get insert into>"
}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "description": "<posted description>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

---

### PUT /assets/:id

> Update an asset defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
{
  "name": "<name to get insert into>",
  "description": "<description to get insert into>"
}
```

_Response (200 - OK)_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "description": "<posted description>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

---

### DELETE /assets/:id

> Delete an asset defined by the id provided

_Request Header_

```
{
  "access_token": "<your access token>"
}
```

_Request Body_

```
not needed
```

_Response (200 - OK) - Alternative 1_

```
{
  "id": <given id by system>,
  "name": "<posted name>",
  "description": "<posted description>",
  "createdAt": "2020-03-20T07:15:12.149Z",
  "updatedAt": "2020-03-20T07:15:12.149Z",
}
```

_Response (200 - OK) - Alternative 2_

```
{
  "message": "asset successfully deleted"
}
```

{"mode":"full","isActive":false}
