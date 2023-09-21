FROM openjdk:17-jdk-alpine
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY target/manga-crud-0.0.1-SNAPSHOT.jar mangacrud.jar
EXPOSE 8080
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar mangacrud.jar
