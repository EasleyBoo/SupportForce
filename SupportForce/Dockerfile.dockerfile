WORKDIR /SupportForce
RUN npm install -g @angular/cli
CMD ng build
CMD gsutil -m cp -r ./dist gs://support-force