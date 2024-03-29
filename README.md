![project preview](/readme_assets/preview.png)

<center><h1>Hr service</h1></center>

 - [Описание](#описание-проекта)
 - [Технологический стек](#технологический-стек)
 - [Установка проекта](#установка-проекта)
 - [Запуск проекта](#запуск-проекта)
   - [Опциональные настройки](#опциональные-настройки)
 - [Навигация по проекту](#навигация-по-проекту)
   - [Корневая директория](#корневая-директория)
   - [Backend директория](#backend-директория)
   - [Bin директория](#bin-директория)
   - [Frontend директория](#frontend-директория)

## Описание проекта

---

Hr service - бесплатный сервис для поиска работы или сотрудников, не ограничивающий кандидата в локации и языке. Здесь соискатель может пользоваться любыми инструментами повышения конверсии откликов.

## Технологический стек
 - - - 

 Frontend:
  - Typescript v4.4.2
  - React v18.2.0
  - Vite v4.1.1
  - Styled-Components v5.3.6
  - React-router-dom v6.8.1
  - jest v29.4.2
  - react-testing-library v13.0.0

Backend:
  - Django v4.0.6
  - Django-rest-framework v3.14.0

Database:
  - PostgreSQL v15.1

System administration:
 - docker v23.0.3
 - docker-compose v2.17.2
 - bash scripts v5.1.16

## Установка проекта

---

### Клонирование проекта

```
$ git clone https://github.com/webRofl/hr-platform.git
```

### Инициализация проекта

Инициализация включает в себя build всех контейнеров, кроме nginx.
<br />
Nginx build происходит на этапе [опциональных настроек](#опциональные-настройки).

```
$ ./project.sh init
```

## Запуск проекта

 - - -

<br />

Проект требует установленного [docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04) и [docker compose](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04) на локальной машине.

### Автоматический

```
$ ./project.sh start_local
```

### Мануальный

```
$ docker compose --profile dev up
```

Автоматический копирует .env.local в .env
<br />
Мануальный только запускает проект

Проект развернется в dev сборке, это включает в себя:

- запуск frontend в dev режиме
- запуск backend в dev режиме

<b>При запуске проекта в корневой директории должен присутствовать файл .env</b>

Клиентская часть приложения разворачивается на <b>3000</b> порту localhost.
<br />
Серверная часть приложения разворачивается на <b>8000</b> порту localhost.

## Опциональные настройки

 - - -

### Запуск проекта в тестовом режиме

Подразумевает развертывание с конфигурацией прода, но с локальной БД и только на 80 порту.

Запускает build проекта с последующем локальном развертыванием

```
 $ ./project.sh start_test
```

Чтобы запустить только развертывание

```
 $ docker compose up
```

Проект в тестовом режиме развернется на 80 порту localhost.

<br/>

## Архитектура

 - - -

<br/>

### Frontend

[Atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
с добавлением абстрактного уровня для полиморфных компонент.
<br />
Может быть связана с любым уровнем абстракции Atomic design.
<br />
В проекте - директория /frontend/src/components/common/

### Backend

[Модульная архитектура](https://docs.djangoproject.com/en/4.2/misc/design-philosophies/)

<br/>

## Навигация по проекту

---

### Корневая директория

```
├── backend
│   ├── * (application name)
│   │   ├── *.py
│   ├── manage.py
├── bin
│   ├── * (container name)
│   │   ├── Dockerfile
│   │   ├── * (other files)
├── frontend
│   ├── __mocks__
│   ├── .husky
│   ├── .storybook
│   ├── jest
│   ├── public
│   ├── src
│   ├── * (other files)
├── docker-compose.*.yml
├── project.sh
└── * (other files)
```

Проект содержит 3 директории:

- backend - серверная часть приложения
- bin - исходники для развертывания
- frontend - клиентская часть приложения

<br/>

### Backend директория

<br/>

Содержит в себе директории с названием внутренних Django-приложений и файл manage.py.

В каждом приложении должны быть файлы:

```
 - models.py    - модели
 - url.py       - WSGI роутинг
 - views.py     - уровень представления
 - __init__.py  - точка входа в приложение
 - admin.py     - отображение полей в админ панели
 - apps.py      - конфигурация приложения
 - migrations/  - директория с миграциями
```

<b>Файл url.py не создается в скрипте python manage.py startapp \*
<br />
<br />
url.py нужно отдельно подключать в home приложении в файл /backend/home/urls.py
</b>

<br/>

### Bin директория

<br/>

Содержит в себе директории с именами docker контейнеров.
В каждой директории имеется хотя бы 1 Dockerfile и могут быть файлы, необходимые для развертывания контейнера.

<br/>

### Frontend директория

<br/>

```
 __mocks__/   - директория с моками для jest
 .husky       - директория со скриптами для git-flow
 .storybook   - директория с конфигурацией storybook
 jest         - jest помощники
 node_modules - директория с исходниками сторонних модулей
 public       - директория с файлами, не нуждающимимся в обработке vite (будут находиться в корневой директории бандла)
 src          - исходники проекта, которые имеют структуру:
  - assets        - активы, такие как изображения, иконки и т.д.
  - components    - директория компонент
  - core          - модули ядра приложения
  - hooks         - кастомные React хуки
  - store         - глобальное хранилища и сервисы
  - style         - директория стилей
  - types         - директория типов
  - utils         - директория с помощниками
index.tsx     - входная точка в приложение
Router.tsx    - компонент роутинга
```