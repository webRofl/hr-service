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

set_dump() {
  docker compose exec db psql -U postgres_user -d postgres -f /dump.sql
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
  sleep 5
  set_dump
}

init() {
  build_db
  build_back
  build_front
}

generateAPI() {
  start
  docker compose exec node yarn generateAPI
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
    lint)
        lint
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
    set_dump)
        set_dump
        ;;
    *)
        echo 'No action specified!'
        ;;
esac
