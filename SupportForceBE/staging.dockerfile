FROM maven:3.3.9-jdk-8-alpine as build
ARG JDBC_PASSWORD
ENV DATABASE_NAME="postgres"
ENV JDBC_SCHEMA="mockazon"
ENV JDBC_URL="104.154.244.24"
ENV JDBC_USERNAME="postgres"
ENV JDBC_PASSWORD=${JDBC_PASSWORD}
# RUN echo ${DATABASE_NAME}
# RUN echo ${JDBC_SCHEMA}
# RUN echo ${JDBC_URL}
# RUN echo ${JDBC_USERNAME}
# RUN echo ${JDBC_PASSWORD}${JDBC_SCHEMA}
COPY . /app
WORKDIR /app
RUN mvn install
CMD java -jar target/Mockazon-0.0.1-SNAPSHOT.jar