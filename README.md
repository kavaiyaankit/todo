# todo
To run this project need to following the below steps

Case 1 : If nest js and postgresql database are not installed in your system that time follow below steps 
----------------------------------------------------------------------------------------------------------

Nest Js: 

Step1 : Installed nest js cli in your local system using this command : npm install -g @nestjs/cli
		Note: -If need more information about nestjs installation please refer this link: https://docs.nestjs.com/  
			  -For install nest js before node and npm must me installed in your system.


Postgresql Database

Step 2 : For postgresql database installation please follow this link : https://www.postgresql.org/


-------------------------------------------------------------------------------------------------------------

Case 2 : If nest js and postgresql database are already installed in your system that time follow below steps

----------------------------------------------------------------------------------------------------------

Step 1: Rename .env.example to .env 
Step 2: On postgress database please make one blank database 
Step 3: Open app.module.ts file and configure your database connection details
Step 4: On Project root directory run "npm install --save" command
Step 5: Sucessfully install node packages run "npm start" command for run project


For Api Documentation
---------------------
GET localhost:3000/todos: Retrieve a list of all Todo items.
GET localhost:3000/todos/:id: Retrieve a specific Todo item by ID.
POST localhost:3000/todos: Create a new Todo item.
PUT localhost:3000/todos/:id: Update an existing Todo item.
DELETE localhost:3000/todos/:id: Delete a Todo item.

Postman Document: https://documenter.getpostman.com/view/18597911/2sA3kUF26s


Note: Make sure for run api you are used authorized static token "adsfhjdhsaflhljafhasdjlfh" on header
