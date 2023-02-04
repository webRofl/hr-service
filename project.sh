#!/bin/bash
COMMAND=${1}

start() {
    docker compose up -d
}

restart() {
    docker compose up -d --force-recreate --remove-orphans
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

dublicate_back_dependency_files() {
    dublicate_file ./backend/pyproject.toml ./bin/django/pyproject.toml
}

init() {
    dublicate_front_dependency_files
    dublicate_back_dependency_files
    docker compose build --no-cache
    migrate
    collectstatic
    rm ./bin/node/package.json && rm ./bin/node/yarn.lock
    rm ./bin/django/pyproject.toml
}

migrate() {
    docker compose run --rm django python manage.py makemigrations
    docker compose run --rm django python manage.py migrate --no-input
}

collectstatic() {
    docker compose run --rm django python manage.py collectstatic --no-input --clear
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
    dublicate_front_dependency_files)
        dublicate_front_dependency_files
        ;;
    migrate)
        migrate
        ;;
    collectstatic)
        collectstatic
        ;;
    *)
        echo 'No action specified!'
        ;;
esac