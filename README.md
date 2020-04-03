# UEC (Upcomming Events Community)

### INTRODUCTION

UEC is a place where you can join the most happening of events community in your local area. Below you will find a proper documentation to our API.

### Register [POST]

Register user into the user database.

- **URL:** http://localhost:3000/register

- **Method:** POST

- **URL Params:** NONE

- **Data Params:** username=[string], email=[string], password=[string]

- **Success Response:**

  - **Code: 200**

    **Content:**

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhaG1hZC51bWIxNUBnbWFpbC5jb20iLCJpYXQiOjE1ODU4OTIxNTB9.xeJUkmdHpXZWvtiyn53ojhKDX0AhwK4JkZSjQKrNWV4"

- **Error Response:**

  - **Code: 500**

    **Content:**

    { error : "Internal Server Error" }

  - **Code: 400**

    **Content:**

    { error : "Email/password invalid" }

  - **Code: 404**

    **Content:**

    { error : "Your email has already been registered" }

### Log in [POST]

Find users from database which is matched to the inputted email and password, if its found it will return a token.

- **URL:** http://localhost:3000/login

- **Method:** POST

- **URL Params:** NONE

- **Data Params:** email=[string], password=[string]

- **Success Response:**

  - **Code: 200**

    **Content:**

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaG1hZC51bWIxNUBnbWFpbC5jb20iLCJpYXQiOjE1ODU1ODEzMDR9.708SNKg1VuIc4zzWezFpIYR7dYEGVX6mc-tA3i8qjBM"

- **Error Response:**

  - **Code: 404**

    **Content:**

    { error: "Email/password invalid" }

  - **Code: 400**

    **Content:**

    { error: "Email/password invalid" }

  - **Code: 500**

    **Content:**

    { error : "Internal Server Error" }

### GET Events [GET]

Get all events list from 3rd API return its value from data JSON

- **URL:** http://localhost:3000/events

- **Method:** POST

- **URL Params:** NONE

- **Data Params:** name = [string], location = [string], status = [boolean], schedule = [date]

- **Success Response:**

  - **Code: 200**

    **Content:** {"id": 2, "name": "Menyapu", "location": "Oke","status": false,"due_date": "2020-04-02T09:01:21.377Z"}

- **Error Response:**

  - **Code: 400**

    **Content:**

    { error: "Title must be filled" }

  - **Code: 400**

    **Content:**

    { error: "Email/password invalid" }

  - **Code: 500**

    **Content:**

    { error : "Internal Server Error" }