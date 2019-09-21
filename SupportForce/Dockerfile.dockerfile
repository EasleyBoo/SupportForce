FROM gcr.io/support-force/node-gcloud-supportforce:latest

## ENV PATH="/root/google-cloud-sdk/bin:${PATH}"

COPY . /app
WORKDIR /app/SupportForce

RUN echo ${PATH}
CMD yes | npm install
## RUN npm install -g @angular/cli
CMD ng build
CMD echo "Storing Build Artifacts..."
CMD gsutil -m cp -r ./dist gs://support-force/angfrontend
## CMD ng serve
