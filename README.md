# Docker Compose with Postgres, Redis, Node, and pgadmin4
This is a basic setup for Postgres with Redis, Node (express), and Pgadmin4. The default server script pulls a list of posts and puts it into a redis cache for 10 seconds.

When the cache expires it pulls from postgres again. This is definitely a WIP and should not be used in production.

# Setup
Not much setup is required. If you would like to login with your own email then change the `PGADMIN_DEFAULT_EMAIL` to your own email.The rest is setup and done via docker compose

### Exposed ports
By default these are the exposed ports. Only port 3000 exposed is required for this to work. If you want to use pgadmin then you also need to expose 8080 for this to work too
* 5432
* 6379
* 3000
* 8080

# Running
Run this by executing `docker-compose up` or if you want this running in the background run `docker-compose up -d`

# Passwords
Anywhere it asks for a password the password is `password`. pgadmin username is `kodemaan@gmail.com` but that can be changed by environment variable in the docker-compose.yml file

# Detailed explanation of the project
This project is a proof of concept for using a redis cache with an express node api and a postgresql database. When hitting the data it first checks for a cache and if it does not exist creates a cache that expires in 10 seconds.
The only thing that is not using a default image with minimal config changes is the node web service. That makes a request to the redis cache. If the cache hit is null then it hits postgres, and stores the rows in the redis cache called latestposts.

# Troubleshooting
* The pgadmin container seems to take a long time to start up so give it roughly 5 minutes and it should be started
