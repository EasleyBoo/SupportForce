FROM gcr.io/support-force/node-gcloud-supportforce:latest

COPY . /app
WORKDIR /app/SupportForce
CMD yes | npm install
## RUN npm install -g @angular/cli
RUN ng build
CMD gsutil -m cp -r ./dist gs://support-force
## CMD ng serve
