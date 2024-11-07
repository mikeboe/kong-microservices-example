FROM kong/kong-gateway:3.8.0.0 as base 

COPY ./kong/kong.yml /kong/declarative/kong.yml

ENV KONG_DATABASE=off
ENV KONG_LICENSE_DATA=
ENV KONG_PROXY_ACCESS_LOG=/dev/stdout
ENV KONG_ADMIN_ACCESS_LOG=/dev/stdout
ENV KONG_PROXY_ERROR_LOG=/dev/stderr
ENV KONG_ADMIN_ERROR_LOG=/dev/stderr
ENV KONG_ADMIN_LISTEN=0.0.0.0:8001