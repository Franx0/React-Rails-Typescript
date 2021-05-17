## React Rails Typescript
#### What is React Rails?  
It is a example Rails application built with Webpack that supports default Rails asset pipeline and webpack compilation.

#### Build with:
- Ruby 3.0.1  
- Rails 6.1  
- Postgresql 9.6  
- Typescript ^4.2   
- React ^17.0  
- Redux ^4.1  

### Run Coding Test

[Sanz Feature](https://locahost:3000/sanz)

#### Prerequisites  
#### Installation (non Dockerized)
1. ```> rvm install 3.0.1```   
2. ```> cd react_rails_typescript``` 
3. ```> bundle install```  
4. ```> bundle exec rails db:create db:migrate```  
5. ```> foreman start -f Procfile.dev-server```  
6. ```> yarn install --check-files```

#### Installation (Dockerized)
##### Install Docker
[Ubuntu](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-16-04-es)
[Mac](https://download.docker.com/mac/stable/Docker.dmg)
[Windows](https://download.docker.com/win/stable/InstallDocker.msi)  
> Install Docker compose 
[here!](https://docs.docker.com/compose/install/)  
   
 
##### ENV variables
> create a docker-dev.env file in docker/development with following variables if file does not exists
* POSTGRES_USER=postgres  
* POSTGRES_PASSWORD=postgres  
* POSTGRES_HOST=postgres
* NODE_ENV=development  
* RAILS_ENV=development   
##### Run project NON debug mode
1. ```> docker-compose -f docker/development/docker-compose.yml up -d```   
##### Run project IN debug mode
1. ```> docker-compose -f docker/development/docker-compose.yml up -d && docker attach development_app_1``` 
> Wail until Compiled successfully message appear in your terminal to run http://localhost:3000

#### *** Reminder ***
  If you are using the Dockerized way, remember to shut down your local PostgreSQL daemon in order to not have conflicts with the Docker PostgresSQL image.  

#### Set up credentials in rails 6  
```> EDITOR="{idle} --wait" rails credentials:edit --environment {RAILS_ENV}```  
> Example: EDITOR="subl --wait" rails credentials:edit --environment staging  
