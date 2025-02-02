# Crime-Reporting-Project  

This repository contains the **Crime Reporting System**, including backend and frontend code, database scripts, and project documentation.  

---

## 📖 Table of Contents  
- [Quick Links](#quick-links)  
- [About](#about)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Setup Instructions](#setup-instructions)  
- [API Endpoints](#api-endpoints)  
- [Authors](#authors)  
- [License](#license)  

---

## 🔗 Quick Links  

- [Project Structure](./docs/project-structure.md): Overview of the directory structure and organization of files.  
- [Git Help](./docs/git-help.md): Guide for using Git commands (cloning, pushing, pulling, and branching).  
- [Crime Reporting PPT](https://docs.google.com/presentation/d/1r-Cfy7f58pFalGYvNzZ-2mkzSjZUl-HBI8Cn0GM-Zjs/edit?usp=sharing)  
- [Crime Reporting Documentation](https://docs.google.com/document/d/1A49F8yiJ7cgWtq-92Bk6rKhQbDG7afMPXWzFoVp5n64/edit?usp=sharing)  
- [Figma Design](https://www.figma.com/design/l7CZLbHppLrIdfd73rYE4q/Crime-management?node-id=0-1&p=f&t=BaEtMGmcRVG9QWqY-0)  

---

## 🔍 About  

The **Online Crime Reporting System** is a **web-based platform** that enables **citizens** to report crimes conveniently through a simple and intuitive interface, reducing paperwork and delays.  

### 🛡️ Role-Based Access Control (RBAC)  
- **Citizen**: Can report crimes, track case status, and interact with police.  
- **Police**: Can manage reported cases and update investigation status.  
- **Admin**: Oversees the entire system, manages users, and monitors reports.  

### ⚙️ System Highlights  
- Developed a **Spring Boot REST API** following **microservices architecture**.  
- Integrated **Spring Security** to ensure secure access and prevent unauthorized actions.  
- Implemented **OTP-based login** and used **JWT authentication** for access control.  
- Ensured **SOLID principles** and followed **database normalization**.  
- Frontend built with **React.js & Tailwind CSS** for a modern, responsive UI.  
- Integrated **Syncfusion components** for enhanced UI/UX.  
- Utilized **cloud storage** for managing crime-related evidence securely.  
- **MySQL database** to efficiently store user information, crime reports, and case progress.  
- Managed and secured confidential data such as **Aadhar card details and images**.  
- **Deployed on AWS** for scalability and performance.  

---

## ✨ Features  

- **User Management**: Create, update, and delete user accounts.  
- **Crime Reporting**: Citizens can file complaints and track progress.  
- **Case Management**: Police can manage, update, and close cases.  
- **Role-Based Access Control**: Secure access for Citizens, Police, and Admins.  
- **OTP-based Login**: Ensures secure authentication.  
- **Audit Logs & Feedback System**: Monitors activities and collects feedback.  
- **Cloud Storage Integration**: Stores crime evidence securely.  
- **Responsive UI**: Built using **React.js** and **Syncfusion components**.  
- **Unit Testing**: Developed test cases using **JUnit**.  

---

## 🚀 Technologies Used  

| Component | Technology Used |  
|-----------|----------------|  
| **Frontend** | React.js (Vite) + Tailwind CSS + Syncfusion |  
| **Backend** | Spring Boot (Microservices Architecture) |  
| **Database** | MySQL (Normalized Schema) |  
| **Authentication** | JWT + OTP-based login (Spring Security) |  
| **Cloud Storage** | AWS / Cloud-based file management |  
| **Deployment** | AWS Server |  
| **Testing** | JUnit for unit testing |  
| **Environment Configuration** | `dotenv` |  

---

## 🛠️ Setup Instructions  

### Prerequisites  
- Install **Java 17+**, **Node.js**, and **MySQL**.  
- Install dependencies using **Maven** for backend and **npm** for frontend.  

### Backend Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
   cd crime-reporting/crimereporting-backend
   ```
2. Configure **application.properties** for MySQL and environment variables.  
3. Build and run the backend:  
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash
   cd crime-reporting/client
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Run the frontend server:  
   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints  

### 🏠 Home  
- **GET** `/` → Get Home Page.  

### 👤 User Management  
- **GET** `/users` → Fetch all users.  
- **POST** `/signin/email` → Send OTP for login via email.  
- **POST** `/signin` → User login.  
- **POST** `/register/citizen` → Citizen registration.  

### 🔐 Admin  
- **GET** `/admin/auditlog` → Retrieve audit logs.  
- **GET** `/admin/feedback` → Fetch user feedback.  

---

## 👥 Authors  

| Name | GitHub Profile |  
|------|---------------|  
| **Lalini Sahu** | [GitHub](https://github.com/lalini11) |  
| **Pradyumna Mahajan** | [GitHub](https://github.com/pradyumnamahajan52) |  
| **Jasmine Kispotta** | [GitHub](https://github.com/Jasmine-11-Kispotta) |  
| **Pawan Kumar Gupta** | [GitHub](https://github.com/dcod3r) |  
| **Mitali Gupta** | [GitHub](https://github.com/mitaligupta141) |  

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.  
