FROM gcr.io/support-force/node-gcloud-supportforce:latest

COPY . /app
WORKDIR /app/SupportForce
CMD yes | npm install
## RUN npm install -g @angular/cli
CMD ng build
ENTRYPOINT gsutil -m cp -r ./dist gs://support-force/angfrontend
## CMD ng serve
