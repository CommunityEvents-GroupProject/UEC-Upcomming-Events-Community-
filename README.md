# UEC-Upcomming-Events-Community-

- baseurl: localhost://3000

## REGISTER User
Create new User and returning a token If not exist in database 

- ### URL

    /register

- ### Method:

    POST

- ### URL Params

    ### Required:

        none

- ### Data Params

    username=[string],email=[string],password=[string]

- ### Success Response:

    - #### Code: 201
    - #### Content: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhaG1hZC51bWIxNUBnbWFpbC5jb20iLCJpYXQiOjE1ODU4OTIxNTB9.xeJUkmdHpXZWvtiyn53ojhKDX0AhwK4JkZSjQKrNWV4"

- ### Error Response:

    - #### Code: 404 NOT FOUND
    - #### Content: 
        { error : "Your email has already registered" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none

## LOGIN User
Find users from database which is matched to the inputted email and password, if its found it will return a token.

- ### URL

    /login

- ### Method:

    POST

- ### URL Params

    ### Required:

        none

- ### Data Params

    email=[string],password=[string]

- ### Success Response:

    - #### Code: 201
    - #### Content: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaG1hZC51bWIxNUBnbWFpbC5jb20iLCJpYXQiOjE1ODU1ODEzMDR9.708SNKg1VuIc4zzWezFpIYR7dYEGVX6mc-tA3i8qjBM"

- ### Error Response:

    - #### Code: 404 NOT FOUND
    - #### Content: 
        { error : "Username/password wrong" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none

## GET Events
Get all events list from 3rd API return its value from data JSON

- ### URL

    /events
- ### Method

    GET
- ### URL Params

    ### Required:
        none
    ### Optional
        none
- ### Data Params
    name = [string], location = [string], status = [boolean], schedule = [date]

- ### Success Response

    - #### Code: 
        201
    - #### Content: 
        {
		"id": 2,
		"name": "Menyapu",
		"location": "Oke",
		"status": false,
		"due_date": "2020-04-02T09:01:21.377Z"
	    }

- ### Error Response:

    - #### Code: 400
        validation Error
    - #### Content: 
        { error : "title must be filled" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none


## SHOW TODO list
Return all todos lists from data JSON

- ### URL

    /todos
- ### Method

    GET
- ### URL Params

    ### Required:
        none
    ### Optional
        none
- ### Data Params
    title = [string], description = [string], status = [boolean], due_date = [date]

- ### Success Response

    - #### Code: 
        200
    - #### Content: 
        {
        "id": 1,
        "title": "Memancing",
        "description": "Oke Test",
        "status": false,
        "due_date": "2020-04-02T09:01:21.377Z",
        "createdAt": "2020-03-30T11:39:58.936Z",
        "updatedAt": "2020-03-30T12:01:06.745Z"
        },

- ### Error Response:

    - #### Code: 400
        validation Error
    - #### Content: 
        { error : "title must be filled" }
    #### OR

    - #### Code: 500
        Internal Server Error
    - #### Content:
        none