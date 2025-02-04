# Use an OpenJDK base image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the local system to the container
COPY target/*.jar app.jar

# Expose the port your application will run on
EXPOSE 8000

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
