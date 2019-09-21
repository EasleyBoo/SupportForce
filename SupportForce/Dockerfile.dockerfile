FROM node:latest

COPY . /app
WORKDIR /app/SupportForce
RUN npm install
RUN npm install -g @angular/cli
RUN ng build
CMD ng serve
#CMD gsutil -m cp -r ./dist gs://support-force
