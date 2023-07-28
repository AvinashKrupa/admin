# Stage 1
#FROM node:14.4-alpine3.11 as react-build
#WORKDIR src/admin
#COPY . ./
#RUN npm install
#RUN npm run build
#EXPOSE 3000


# Stage 2 - the production environment
#FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=react-build src/admin /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
FROM node:14.4-alpine3.11

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 3001

CMD [ "npm", "start" ]
