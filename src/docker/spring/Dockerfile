FROM openjdk:11-jre-slim

ENV JAR=spring-0.0.1-SNAPSHOT.jar

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# jar 파일 복사
COPY build/libs/$JAR ./app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-Duser.timezone=Asia/Seoul", "-jar", "./app.jar"]
