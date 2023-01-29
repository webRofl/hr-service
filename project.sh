#!/bin/bash
COMMAND=${1}

init() {
    docker compose build
    docker compose run --rm django python manage.py makemigrations
    docker compose run --rm django python manage.py migrate --no-input
}

start() {
    docker compose up -d
}

restart() {
    docker compose up -d --force-recreate --remove-orphans
}

lint() {
    docker compose run --rm -exec django flake8 --extend-ignore E501 .
}

local_hard_reset() {
    docker compose down -v
    docker compose up -d --build
    docker compose exec django python manage.py migrate --noinput
    docker compose exec django python manage.py collectstatic --no-input --clear
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
    *)
        echo 'No action specified!'
        ;;
esac