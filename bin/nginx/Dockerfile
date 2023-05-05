FROM nginx:latest

# COPY init-letsencrypt.sh /etc/nginx/
# RUN bash /etc/nginx/init-letsencrypt.sh

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/