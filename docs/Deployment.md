
# 🚀 Deployment Guide for CrimeReport Project

This document provides a **step-by-step guide** to deploying the **CrimeReport.live** project on AWS using **Docker, NGINX, and Let's Encrypt SSL**.
---

## 📌 **Project Overview**
- **Backend:** Spring Boot (Runs on port `8000`)
- **Frontend:** Vite (Static files served via NGINX)
- **Reverse Proxy:** NGINX (Handles frontend & API requests)
- **SSL:** Let’s Encrypt (Secures HTTPS for domains)
- **Database:** MySQL in Docker

---

## **1️. Prerequisites**
Before deploying, ensure you have:
- **AWS EC2 Instance** (Ubuntu or Debian recommended)
- **Docker & Docker Compose Installed**
- **Domain Name (crimereport.live & api.crimereport.live) || (May be New any other domain)**
- **SSL Certificates Issued with Let’s Encrypt**

---

## **2. Install Dependencies on EC2**
SSH into your EC2 instance and install required packages:

### For Connect EC2 instance From Computer With Password

```
ssh ubuntu@your-ec2-ip
```

### For Connect EC2 instance From Computer With If You have SSH Key

```
ssh -i "C:\Your-key.pem" ubuntu@your-ec2-ip
```


```bash
# Update packages and Deployment Guide for CrimeReport Project

## **1. Install Dependencies on EC2**
SSH into your EC2 instance and install required packages:

# Update packages
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install -y docker.io

# Enable Docker on boot
sudo systemctl enable docker
sudo systemctl start docker

# Install Docker Compose
sudo apt install -y docker-compose

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-apache

# Install Apache (optional, for manual debugging)
sudo apt install -y apache2
```
---

## **3. Clone the Project Repository and add your aws and smtp credentials**
```bash
git clone https://github.com/your-repo/crimereporting.git
cd crimereporting
```
---

## **4. Project and Files Structure for Deployment**
```txt
.
├── client
│   ├── dist
│   │   ├── assets
│   │   │   ├── 10-DnSyM7dj.png
│   │   │   └── Vector-D8LWo4U9.png
│   │   ├── index.html
│   │   └── vite.svg
│   ├──────────────────
├── crimereporting-backend
│   ├── Dockerfile  <------- Docker file for backend
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   ├── Servers
│   │   └── VMware tc Server Developer Edition v4.1-config
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── site
│   │   │   │   └── Other Files
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       ├── static
│   │   │       └── templates
│   └── target
│       ├── classes
│       │   ├── application.properties
│       │   └── site
│       │   └── Other Files
│       ├── crimereporting-0.0.1-SNAPSHOT.jar
│       ├── crimereporting-0.0.1-SNAPSHOT.jar.original
│       ├── Other Files
├── docker-compose.yml  <------- Docker Compose File
├── logs
└── nginx.conf  <------- nginx conf file
```
---

## **5. Configure NGINX for Reverse Proxy**
Create an `nginx.conf` file:
If You Don't Have ssl certificate Then Don't Add  Server {listen 443}
### **nginx  Config File  (`./nginx.conf`):**

```nginx
events {
  worker_connections 1024;
}

http {
  include mime.types;
  default_type application/octet-stream;
  
  server {
    listen 80;
    server_name crimereport.live www.crimereport.live;

    root /usr/share/nginx/html;
    index index.html;

    location / {
      try_files $uri /index.html;
    }

    # Redirect HTTP to HTTPS
    return 301 https://$host$request_uri;
  }

  server {
    listen 80;
    server_name api.crimereport.live www.api.crimereport.live;

    location / {
      proxy_pass http://backend:8000/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # Redirect API HTTP to HTTPS
    return 301 https://$host$request_uri;
  }

  # Secure HTTPS Server for Frontend
  server {
    listen 443 ssl;
    server_name crimereport.live www.crimereport.live;

    ssl_certificate /etc/letsencrypt/live/crimereport.live/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/crimereport.live/privkey.pem;

    root /usr/share/nginx/html;
    index index.html;

    location / {
      try_files $uri /index.html;
    }
    
    # Serve JS and CSS with correct MIME types
    location /assets/ {
        root /usr/share/nginx/html;
        add_header Content-Type application/javascript;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.(js)$ {
        root /usr/share/nginx/html;
        add_header Content-Type application/javascript;
    }

    location ~* \.(css)$ {
        root /usr/share/nginx/html;
        add_header Content-Type text/css;
    }

    location ~* \.(woff2?|ttf|svg|ico|png|jpg|jpeg|gif|json|webp|mp4|webm)$ {
        root /usr/share/nginx/html;
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }
    

    error_log /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;
  }

  # Secure HTTPS Server for Backend API
  server {
    listen 443 ssl;
    server_name api.crimereport.live www.api.crimereport.live;

    ssl_certificate /etc/letsencrypt/live/api.crimereport.live/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.crimereport.live/privkey.pem;

    location / {
      proxy_pass http://backend:8000/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    error_log /var/log/nginx/api-error.log;
    access_log /var/log/nginx/api-access.log;
  }
}
```
---

## **6. Create `Dockerfile` for crimereporting-backend**
### **Backend Dockerfile (`crimereporting-backend/Dockerfile`):**

```Dockerfile
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
```
---

## **7. Create `docker-compose.yml` for Deployment**

### **Docker Compose File  (`./docker-compose.yml`):**

```yaml
version: '3.8'

services:
  # Backend Service (Spring Boot)
  backend:
    build: ./crimereporting-backend
    container_name: backend_server
    ports:
      - "8000:8000"
    restart: always
    environment:
      SPRING_PROFILES_ACTIVE: prod
    networks:
      - app_network

  # Nginx Service for Reverse Proxy + Frontend Hosting
  nginx:
    image: nginx:latest
    container_name: nginx_proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./client/dist:/usr/share/nginx/html  # Serve built frontend
      - /etc/letsencrypt/live:/etc/letsencrypt/live:ro  # Mount SSL certs
      - /etc/letsencrypt/archive:/etc/letsencrypt/archive:ro  # Mount SSL archive
      - /etc/letsencrypt/renewal:/etc/letsencrypt/renewal:ro  # Renewal config
    depends_on:
      - backend
    restart: always
    networks:
      - app_network

volumes:
  db_data:

networks:
  app_network:
    driver: bridge
```
---

## **8. Transfer Project from Local to EC2**

Use **scp** to transfer your project from your local machine:

```bash
scp -r /path/to/your/project ubuntu@your-ec2-ip:/home/ubuntu/
```

Replace `/path/to/your/project` with your actual project path and `your-ec2-ip` with your EC2 public IP.

---

Navigate to the project directory:

```bash
cd /home/ubuntu/your-project-folder
```

---

## **9. Deploy the Application**

### **Build & Start Containers**
```bash
docker-compose up -d --build
```

### **Check Running Containers**
```bash
docker ps
```

### **Restart Containers (If Needed)**
```bash
docker-compose down && docker-compose up -d
```

---

## **10. Apply SSL Certificate (Let’s Encrypt)**
If you haven't issued an SSL certificate, run:
```bash
sudo certbot certonly --webroot -w /var/www/certbot -d crimereport.live -d www.crimereport.live
sudo certbot certonly --webroot -w /var/www/certbot -d api.crimereport.live -d www.api.crimereport.live
```

Then restart **NGINX**:
```bash
docker exec -it nginx_proxy nginx -s reload
```

### **Auto-Renew SSL**
```bash
crontab -e
```
Add this line:
```
0 0 * * * certbot renew --quiet && docker restart nginx_proxy
```

---

## **11. Final Testing & Debugging**

### **Verify Frontend Loads**
```bash
curl -I https://crimereport.live
```

### **Check Backend API**
```bash
curl -I https://api.crimereport.live
```

### **Check NGINX Logs for Errors**
```bash
docker logs nginx_proxy
```

### **Clear Browser Cache & Refresh**
- Press `Ctrl + Shift + R`
- Open **DevTools (`F12`)** → **Network** → **Disable Cache**
- Check **MIME types** for `.js` & `.css` files

---

## **🎯 Summary**
✅ **Fully Dockerized Deployment**  
✅ **NGINX Reverse Proxy with HTTPS**  
✅ **Spring Boot Backend & Vite Frontend Served**  
✅ **SSL Secured via Let's Encrypt**  
✅ **Automatic SSL Renewal & Maintenance**  

Your site should now be fully deployed on AWS with **HTTPS, Docker, and NGINX**! 🚀

Let me know if you need further tweaks! 🔥
