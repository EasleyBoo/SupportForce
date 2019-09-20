FROM node:latest

COPY . /app
WORKDIR /app/SupportForce
## WORKDIR /SupportForce
RUN npm install
CMD ng build
CMD ng serve
#CMD gsutil -m cp -r ./dist gs://support-force