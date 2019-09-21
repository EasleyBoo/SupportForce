FROM gcr.io/support-force/node-gcloud-supportforce:latest

ENV PATH="/root/google-cloud-sdk/bin:${PATH}"

COPY . /app
WORKDIR /app/SupportForce

## RUN echo ${PATH}
## RUN npm install -g @angular/cli
RUN yes | npm install
RUN ng build

CMD echo "Storing Build Artifacts..."
CMD gsutil -m cp -r dist gs://support-force/angfrontend
## CMD ng serve
