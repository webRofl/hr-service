FROM python:3.8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /opt/app/

COPY ./requirements.txt /opt/app/requirements.txt
RUN pip install -r /opt/app/requirements.txt

COPY . /opt/app/

EXPOSE 8000