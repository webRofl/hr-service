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

init() {
    dublicate_front_dependency_files
    docker compose build
    migrate
    collectstatic
    rm ./bin/node/package.json && rm ./bin/node/yarn.lock
}

generateAPI() {
    start
    cd frontend && yarn generateAPI
}

local_init() {
  cp .env.local .env
  init
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
    *)
        echo 'No action specified!'
        ;;
esac
