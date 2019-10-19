# Docker Compose with Postgres, Redis, Node, and pgadmin4
This is a basic setup for Postgres with Redis, Node (express), and Pgadmin4. The default server script pulls a list of posts and puts it into a redis cache for 10 seconds.

When the cache expires it pulls from postgres again. This is definitely a WIP and should not be used in production.

# Passwords
Anywhere it asks for a password the password is `password`. pgadmin username is `kodemaan@gmail.com` but that can be changed by environment variable in the docker-compose.yml file
