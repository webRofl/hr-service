#!/bin/bash
COMMAND=${1}

init() {
    docker compose build
    docker compose run --rm django python manage.py makemigrations
    docker compose run --rm django python manage.py migrate
}

start() {
    docker compose up -d
}

restart() {
    docker compose up -d --force-recreate --remove-orphans
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
    *)
        echo 'No action specified!'
        ;;
esac