FROM node:alpine as build
ARG mode=dev
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build

RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]