FROM node:16-stretch-slim AS build

WORKDIR /app

COPY package* .
RUN yarn install

COPY . .
RUN yarn build

FROM nginx:1.20.2
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
