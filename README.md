# Github repositories
* `API:` https://github.com/isebarn/testapi
* `Web:` https://github.com/aniruddhupparna/draggable-ui-sample

# Docker image
There are **two** docker images that need to be built

The api image (https://github.com/isebarn/testapi)

`docker build . -t david/testapi --no-cache`

And the web image (https://github.com/aniruddhupparna/draggable-ui-sample)
`docker build . -t david/testweb --no-cache`

### docker-compose
The `testapi` repo contains a `docker-compose.yml` file, to start all services run:

`docker-compose up`

This will start 4 containers:
* The node **api**
* **web** app
* mongodb instance
* mongo-express (mongodb web client)

There is also created a **docker volume** to retain the data saved in the database
