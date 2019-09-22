#############
### build ###
#############

## base image
FROM gcr.io/support-force/node-gcloud-supportforce:latest as builder

## environment variables
ENV PATH="/root/google-cloud-sdk/bin:${PATH}"

## install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

## working directory setup
COPY . /app
WORKDIR /app/SupportForce

## installations and builds
# RUN echo ${PATH}
# RUN npm install -g @angular/cli
RUN yes | npm install
RUN ng build --output-path=dist

## tests (need to have chrome installed...)
# RUN ng test --watch=false
# RUN ng e2e --port 4202


################
### delivery ###
################

## base image
FROM nginx:1.16.0-alpine

## copy artifact build from the 'build environment'
COPY --from=builder /app/SupportForce/dist /usr/share/nginx/html

## expose port 80
EXPOSE 80

## run nginx
CMD ["nginx", "-g", "daemon off;"]
