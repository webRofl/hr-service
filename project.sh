#!/bin/bash
COMMAND=${1}

start() {
    docker compose up -d
}

restart() {
    docker compose up -d --force-recreate --remove-orphans
}

collectstatic() {
    docker compose run -exec --rm django python manage.py collectstatic --no-input --clear
}

migrate() {
    docker compose run --rm django python manage.py makemigrations
    docker compose run --rm django python manage.py migrate --no-input
}

dublicate_file() {
    MAINFILE=$1
    COPYFILE=$2

    if [[ -f $COPYFILE ]]; then
        rm $COPYFILE
    fi

    cp $MAINFILE $COPYFILE 
}

dublicate_front_dependency_files() {
    dublicate_file ./frontend/package.json ./bin/node/package.json
    dublicate_file ./frontend/yarn.lock ./bin/node/yarn.lock
}

build_front() {
  dublicate_front_dependency_files
  docker compose build node
  rm ./bin/node/package.json && rm ./bin/node/yarn.lock
}

build_back() {
  docker compose build django
  migrate
  collectstatic
}

build_db() {
  docker compose build db
  docker compose up -d db
}

build_redis() {
  docker compose build redis
}

init() {
  build_db
  build_back
  build_front
  build_redis
}

generateAPI() {
  start
  docker compose exec node yarn generateAPI
}

build_frontend() {
    cd frontend
    yarn build
}

start_local() {
    cp .env.local .env
    echo '. . . ENV COPY DONE'
    docker compose --profile dev up
}

start_test() {
    cp .env.test .env
    echo '. . . ENV COPY DONE'
    build_frontend
    cd ../ && docker compose up
}

start_prod() {
    cp .env.prod .env
    echo '. . . ENV COPY DONE'
    build_frontend
    cd ../ && docker compose up
}

lint_frontend() {
    docker compose run -exec --rm node yarn lint
}

case $COMMAND in
    init)
        init
        ;;
    start)
        start
        ;;
    restart)
        restart
        ;;
    lint_frontend)
        lint_frontend
        ;;
    local_hard_reset)
        local_hard_reset
        ;;
    dublicate_front_dependency_files)
        dublicate_front_dependency_files
        ;;
    migrate)
        migrate
        ;;
    collectstatic)
        collectstatic
        ;;
    generateAPI)
        generateAPI
        ;;
    local_init)
        local_init
        ;;
    build_frontend)
        build_frontend
        ;;
    start_local)
        start_local
        ;;
    start_prod)
        start_prod
        ;;
    start_test)
        start_test
        ;;
    *)
        echo 'No action specified!'
        ;;
esac
