# Bride Event

My Assets App is an application to manage your assets. It performs standard CRUD actions based on RESTful concept.
Bride Event is an application for online invitation of wedding.

This app has :

- RESTful endpoint for bride-event's CRUD operation
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
