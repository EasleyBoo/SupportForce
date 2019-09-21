FROM gcr.io/support-force/node-gcloud-supportforce:latest

CMD gsutil -m cp -r /home gs://support-force/angfrontend
COPY . /app
WORKDIR /app/SupportForce
CMD yes | npm install
## RUN npm install -g @angular/cli
CMD ng build
CMD echo "Storing Build Artifacts..."
CMD gsutil -m cp -r ./dist gs://support-force/angfrontend
## CMD ng serve
