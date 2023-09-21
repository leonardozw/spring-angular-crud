# Full-Stack Application Sample with Spring Boot and Agular

A simple application that offers the basic CRUD operations, this project was made to learn the basics of Angular and Angular Material, so i made the backend as simple as it could be to spend more time with Angular.

## Technologies:

### Backend:
- Spring Boot
- Spring Web
- Spring JPA
- PostgresSQL

### Frontend:
- Angular
- Angular Material

## How to run:
### Requirements:
- Docker installed (docker desktop works fine)
- Clone de repository and in the root folder (folder that has the `backend`/`frontend`/`docker-compose.yml` files) run the command:

```
docker-compose -f "docker-compose.yml" up
```

That should pull both the Backend and Frontend images from Dockerhub registry and create a Postgres database for the backend.

## How to use:
Assuming everything is working fine, when you access `localhost:8081` you should see the Angular application running, and from that page you will be able to do all de CRUD operations.