FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /opt/app/

COPY ./pyproject.toml /opt/app/pyproject.toml
RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install
RUN cd .. && echo $(pwd) && pre-commit install

COPY . /opt/app/

EXPOSE 8000