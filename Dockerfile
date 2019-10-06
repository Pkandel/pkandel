
FROM node:boron as builder

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
 COPY package.json /app/
 RUN npm install

# Bundle app source
COPY . /app

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/nginx.conf
