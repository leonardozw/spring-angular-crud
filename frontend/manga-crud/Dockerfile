# FROM node:latest as angular
# WORKDIR /app
# COPY package.json /app
# RUN npm install --silent
# COPY . .
# RUN npm run build

# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=angular /app/dist/manga-crud /usr/share/nginx/html

# Estágio 1: Construa a aplicação Angular
FROM node:latest as angular
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# Estágio 2: Servir a aplicação com Nginx
FROM nginx:alpine
COPY --from=angular /app/dist/manga-crud /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
