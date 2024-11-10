# Crime-Reporting-Project

This repository is for the Crime-Reporting-Project, which includes backend and frontend code, database scripts, and project documentation.

## Quick Links

- [Project Structure](./docs/project-structure.md): Overview of the directory structure and organization of files in this project.
- [Git Help](./docs/git-help.md): Guide for using Git commands for this project, including cloning, pushing, pulling, and branching.

## Directory Structure

```
cyber-crime-reporting/               # Root of the project
├── backend/                         # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── cybercrime/
│   │   │   │               ├── config/             # Configuration files
│   │   │   │               ├── controller/         # REST API controllers
│   │   │   │               ├── model/              # Domain models (Entities)
│   │   │   │               ├── repository/         # JPA repositories
│   │   │   │               ├── service/            # Business logic
│   │   │   │               └── CyberCrimeReportingApplication.java # Main application class
│   │   │   └── resources/
│   │   │       ├── application.properties          # Configuration properties (database, server, etc.)
│   │   │       └── data.sql                        # Optional: Initial data setup
│   │   └── test/                                   # Tests for backend
│   └── pom.xml                                     # Maven dependencies for Spring Boot backend
│
├── frontend/                        # React frontend
│   ├── public/                      # Public assets (HTML template, static files)
│   ├── src/
│   │   ├── assets/                   # Images, icons, styles
│   │   ├── components/               # Reusable components (Navbar, Footer, Cards, etc.)
│   │   ├── pages/                    # Application pages (ReportCrimePage, CrimeTypesPage, etc.)
│   │   ├── services/                 # API calls (e.g., crimeReportAPI.js)
│   │   ├── App.js                    # Main React component
│   │   ├── index.js                  # Entry point
│   └── package.json                  # Frontend dependencies and scripts
│
├── database/                        # Database scripts and related files
│   ├── schema.sql                    # SQL schema for MySQL database
│   └── seed.sql                      # Optional: Seed data for testing
│
├── docs/                            # Documentation for the project
│   ├── API.md                        # API documentation for backend services
│   ├── README.md                     # General project information
│   └── design/                       # Design files (diagrams, mockups)
│       └── wireframes/               # UI wireframes, if applicable
│
├── logs/                            # Logs for debugging and tracking
│   ├── backend.log                    # Log file for backend logs
│   ├── frontend.log                   # Log file for frontend logs
│   └── database.log                   # Log file for database-related issues
│   └── pradyumna.log                   # Log file for database-related issues
│
├── releases/                        # Release versions of the application
│   ├── v1.0.0/                       # Version 1.0.0 release files
│   └── v1.1.0/                       # Version 1.1.0 release files
│
├── .github/                         # GitHub configuration for CI/CD workflows
│   ├── workflows/                    # GitHub Actions workflows
│   │   ├── backend.yml               # Workflow file for backend CI/CD
│   │   ├── frontend.yml              # Workflow file for frontend CI/CD
│   │   └── deploy.yml                # Workflow file for deployment
│   └── ISSUE_TEMPLATE.md             # Template for issue tracking
│   └── PULL_REQUEST_TEMPLATE.md      # Template for pull requests
│
├── .gitignore                       # Ignore files for Git (node_modules, .env, etc.)
├── README.md                        # Main README for project setup and instructions
├── helpme.md                        # Help guide with setup, troubleshooting, and resources
└── docker-compose.yml               # Optional: Docker configuration to run services
```

