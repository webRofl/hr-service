FROM nginx:latest

RUN bash init-letsencrypt.sh

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/