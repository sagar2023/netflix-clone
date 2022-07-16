# netflix-clone
Mern stack Netflix app clone project 

using following technologies :

React, Node.js, MongoDB 

With in main technologies using  different sub technologies : 
- Context API
- JWT
- Custom hooks

04:57:00 Making App Responsive
## client side screen shots

### registration page 
![registration page](https://user-images.githubusercontent.com/70846234/179347374-8c7efca2-8828-4c7d-9957-307a9260b48c.png)


### login page 
![login page](https://user-images.githubusercontent.com/70846234/179347379-a81d522d-9dba-4729-81fd-6c151bccd519.png)

### home page (shows series+movies) all content 
![home page](https://user-images.githubusercontent.com/70846234/179347384-c178acd3-d8c3-497d-9644-30f8b169fdf8.png)

### log out page and redirect to sign up page 
![logot back to sign up](https://user-images.githubusercontent.com/70846234/179347407-4f139ee2-dc98-468d-a043-fe281518de3a.png)

### movies (shows only movies ) content 
![moives](https://user-images.githubusercontent.com/70846234/179347414-753d9595-d7a8-498b-ab05-361e3bfd3e0f.png)

### series (shows only series ) content 
![series](https://user-images.githubusercontent.com/70846234/179347418-8f203fdb-6e8f-4380-8895-be3cecff7cc1.png)

### trailer of that particular moive 
![trailer](https://user-images.githubusercontent.com/70846234/179347424-b14c43ec-fe6c-4744-bca1-7de4166dce37.png)

### actula moive video
![actual move play ](https://user-images.githubusercontent.com/70846234/179347426-8c2b7275-b811-4bf4-ac1d-8cadea4f5954.png)

### by default watch page
![watch page](https://user-images.githubusercontent.com/70846234/179347427-c55153ae-1b2b-4b24-ac63-4bab431774bf.png)



# backend site screenshot

1. REST API


- create (post method)
- upadate (put method)
- delete (del method)
- get (GET method)
- get all (GET method)
- 
ALL REST API structure is JSON(KEY-VALUE Pair)

### CRUD operation of user (create , update , get all user or particular user and delete particular user) 

![registre](https://user-images.githubusercontent.com/70846234/179347893-e3cf34ff-9830-444e-992c-7ecfc0e55462.png)
![update](https://user-images.githubusercontent.com/70846234/179347906-f83660a0-0eda-439a-a49f-3e8ae7d3b12f.png)
![delete](https://user-images.githubusercontent.com/70846234/179347908-5067daec-4056-4114-8dad-26b5a73a4da2.png)
![login](https://user-images.githubusercontent.com/70846234/179347910-fe444501-46b9-4c5a-a5b6-50eab04fc1fd.png)


### CRUD operation of movies and series (create , update , get all movies or particular movie and delete particular moive) 

![create moive](https://user-images.githubusercontent.com/70846234/179348938-200e4d71-2afe-4169-a7cd-1b5d189d333e.png)

### CRUD operation of list of movies or series (create , update , get all lists or particular list and delete particular list) 


![lists](https://user-images.githubusercontent.com/70846234/179348969-e054861d-bfa6-4883-9101-fea924416dfd.png)

### keep track user stats using month id and number user has been register in that particular month 


![keep tack of user register stats](https://user-images.githubusercontent.com/70846234/179349041-951ec3e3-37ce-4c75-bf9a-d3f784c7ef6a.png)


2. database(mongodb)
- created one database (netflix database)
- Inside booking databse created different collections
1. users
2. movies
3. lists
- inside collections add different document eg . in movies collections - added different movies information as document

- structure of mongodb
- database->collections->document
- eg. netflix->users->sagar

### In this screen shot included 3 collection users,movies, list with in collections added different documents

![3 collection](https://user-images.githubusercontent.com/70846234/179349327-778ae346-2d97-434f-830f-233e627bfc02.png)
![here are registre user](https://user-images.githubusercontent.com/70846234/179349319-eb423ec9-dccd-477c-afee-0da1a6ad8442.png)
![in movies collection  different type of moives and series present as document ](https://user-images.githubusercontent.com/70846234/179349321-012d68c2-1fa1-47d8-8d0c-c0083d714a15.png)
![list collection contaion list of moive and series document ](https://user-images.githubusercontent.com/70846234/179349322-d93dbf7a-ba00-4841-a61a-d2bcb63b685b.png)
![only this user is is admin](https://user-images.githubusercontent.com/70846234/179349323-1da6694b-0e57-4443-866f-7feb173a2a8c.png)
![those are not admin store as isadmin isfalse](https://user-images.githubusercontent.com/70846234/179349325-08821147-4de0-4706-ad61-fe6122a5860a.png)




