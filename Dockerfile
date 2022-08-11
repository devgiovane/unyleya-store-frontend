FROM node:17-alpine AS build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN yarn
RUN yarn build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html
EXPOSE 80
