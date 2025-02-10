# Project Folder structure
```txt
.
├── client
│   ├── node_modules
│   ├── dist
│   │   ├── assets
│   │   │   ├── crime1-D6Cj6g0z.png
│   │   │   ├── crime2-k_2uBHox.png
│   │   │   ├── crime3-BgLkXnTS.png
│   │   │   ├── crime4-CCtBGfNS.png
│   │   │   ├── homevid1-zAELDa_B.mp4
│   │   │   ├── homevid2-CYiRIDqT.mp4
│   │   │   ├── homevid3-BLInTrWq.mp4
│   │   │   ├── homevid4-DX0KbGF6.mp4
│   │   │   ├── index-DrawM_Ea.js
│   │   │   ├── index-KIQhOrpt.css
│   │   │   ├── Police-mzc3mFQv.png
│   │   │   └── Vector-D8LWo4U9.png
│   │   ├── index.html
│   │   └── vite.svg
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   │   └── vite.svg
│   ├── README.md
│   ├── src
│   │   ├── action
│   │   │   ├── admin
│   │   │   │   ├── NewPoliceStationAction.js
│   │   │   │   ├── UpdatePoliceStationAction.js
│   │   │   │   └── UserProfileAction.js
│   │   │   ├── crime
│   │   │   │   └── newCrimeReportAction.js
│   │   │   └── user
│   │   │       ├── Auth.js
│   │   │       ├── LoginAction.js
│   │   │       └── LogoutAction.jsx
│   │   ├── API.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── animations
│   │   │   │   ├── login.json
│   │   │   │   ├── notFound.json
│   │   │   │   └── report.json
│   │   │   ├── crime-categories
│   │   │   │   ├── crime1.png
│   │   │   │   ├── crime2.png
│   │   │   │   ├── crime3.png
│   │   │   │   └── crime4.png
│   │   │   ├── images
│   │   │   │   ├── aboutus.png
│   │   │   │   ├── card
│   │   │   │   │   ├── 10.png
│   │   │   │   │   ├── 11.png
│   │   │   │   │   ├── 12.png
│   │   │   │   │   ├── 13.png
│   │   │   │   │   ├── 1.png
│   │   │   │   │   ├── 2.png
│   │   │   │   │   ├── 3.png
│   │   │   │   │   ├── 4.png
│   │   │   │   │   ├── 5.png
│   │   │   │   │   ├── 6.png
│   │   │   │   │   ├── 7.png
│   │   │   │   │   ├── 8.png
│   │   │   │   │   └── 9.png
│   │   │   │   ├── crime-categories
│   │   │   │   │   ├── crime1.png
│   │   │   │   │   ├── crime2.png
│   │   │   │   │   ├── crime3.png
│   │   │   │   │   ├── crime4.png
│   │   │   │   │   ├── img10.jpg
│   │   │   │   │   ├── img1.jpg
│   │   │   │   │   ├── img2.jpg
│   │   │   │   │   ├── img3.jpg
│   │   │   │   │   ├── img4.jpg
│   │   │   │   │   ├── img5.jpg
│   │   │   │   │   ├── img6.jpg
│   │   │   │   │   ├── img7.jpg
│   │   │   │   │   └── img9.jpg
│   │   │   │   ├── Home
│   │   │   │   │   ├── globe.png
│   │   │   │   │   ├── p.png
│   │   │   │   │   └── team.png
│   │   │   │   ├── Police.png
│   │   │   │   ├── profile.png
│   │   │   │   ├── slider-image
│   │   │   │   │   ├── img1.jpg
│   │   │   │   │   ├── img2.png
│   │   │   │   │   └── img3.jpg
│   │   │   │   └── Vector.png
│   │   │   └── videos
│   │   │       ├── globe.mp4
│   │   │       ├── homevid1.mp4
│   │   │       ├── homevid2.mp4
│   │   │       ├── homevid3.mp4
│   │   │       └── homevid4.mp4
│   │   ├── Components
│   │   │   ├── Admin
│   │   │   │   ├── AdminSearchMenu.jsx
│   │   │   │   ├── Dashboard
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   ├── Grid.jsx
│   │   │   │   │   └── StatCards.jsx
│   │   │   │   └── user
│   │   │   │       └── UserForm.jsx
│   │   │   ├── Citizen
│   │   │   │   └── Navbar.jsx
│   │   │   ├── Crime-Category
│   │   │   │   ├── CategoryCard.jsx
│   │   │   │   └── Category.jsx
│   │   │   ├── Dashboard
│   │   │   │   ├── Sidebar
│   │   │   │   │   ├── AccountToggle.jsx
│   │   │   │   │   ├── Footer.jsx
│   │   │   │   │   ├── Search.tsx
│   │   │   │   │   ├── Sidebar.jsx
│   │   │   │   │   ├── SidebarMenuItem.jsx
│   │   │   │   │   └── SidebarMenu.jsx
│   │   │   │   └── Topbar
│   │   │   │       └── TopBar.jsx
│   │   │   ├── DashboardSpinner.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Home
│   │   │   │   ├── Faq.jsx
│   │   │   │   ├── Globe.jsx
│   │   │   │   └── ReportCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Police
│   │   │   │   ├── Dashboard
│   │   │   │   │   ├── Card.jsx
│   │   │   │   │   ├── CrimeGraph.jsx
│   │   │   │   │   ├── Grid.jsx
│   │   │   │   │   └── StatCards.jsx
│   │   │   │   └── PoliceSearchMenu.jsx
│   │   │   ├── Register_Login.jsx
│   │   │   │   ├── LeftFormLogin.jsx
│   │   │   │   ├── LeftFormRegister.jsx
│   │   │   │   └── Right.jsx
│   │   │   ├── Report
│   │   │   │   └── SelectPoliceStationReport.jsx
│   │   │   ├── Spinner.jsx
│   │   │   └── User
│   │   │       ├── LoginForm.jsx
│   │   │       └── LottieSection.jsx
│   │   ├── Helper
│   │   │   └── utils.js
│   │   ├── index.css
│   │   ├── Layout
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── PoliceLayout.jsx
│   │   │   └── RootLayout.jsx
│   │   ├── loader
│   │   │   ├── admin
│   │   │   │   ├── AuditLogLoader.js
│   │   │   │   ├── CrimeCategoryLoader.js
│   │   │   │   ├── CrimeReportsLoader.js
│   │   │   │   ├── DashboardLoader.js
│   │   │   │   ├── FeedbackLoader.js
│   │   │   │   ├── PoliceStationDetailsLoader .js
│   │   │   │   ├── PoliceStationLoader.js
│   │   │   │   ├── UserDetailsLoader.js
│   │   │   │   └── UsersLoader.js
│   │   │   ├── citizen
│   │   │   │   └── CrimeStatusLoader.js
│   │   │   ├── Crime
│   │   │   │   ├── CrimeCategory.js
│   │   │   │   ├── LoadEvidences.js
│   │   │   │   └── ReportDetailsLoader.js
│   │   │   └── Police
│   │   │       ├── CrimeReportsLoader.js
│   │   │       ├── LoadPoliceDetails.js
│   │   │       └── ReportDetailsLoader.js
│   │   ├── main.jsx
│   │   ├── Screens
│   │   │   ├── About.jsx
│   │   │   ├── Aboutus.jsx
│   │   │   ├── Admin
│   │   │   │   ├── AuditLogs.jsx
│   │   │   │   ├── CrimeCategory.jsx
│   │   │   │   ├── CrimeReports.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── Feedback.jsx
│   │   │   │   ├── NewPoliceStation copy.jsx
│   │   │   │   ├── NewPoliceStation.jsx
│   │   │   │   ├── PoliceStation.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── UpdatePoliceStation.jsx
│   │   │   │   ├── UserModal.css
│   │   │   │   └── Users.jsx
│   │   │   ├── Citizen
│   │   │   │   ├── CrimeStatus.jsx
│   │   │   │   ├── ReportsCopy.jsx
│   │   │   │   ├── ReportsDetail.jsx
│   │   │   │   └── Reports.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Error.jsx
│   │   │   ├── FeedBackForm.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Police
│   │   │   │   ├── AuditLog.jsx
│   │   │   │   ├── CrimeGraph.jsx
│   │   │   │   ├── CrimeReports.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── PoliceFeedback.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   └── ReportsDetail.jsx
│   │   │   ├── Register.jsx
│   │   │   └── User
│   │   │       ├── UserLogin.jsx
│   │   │       └── UserProfile.jsx
│   │   ├── Services
│   │   │   ├── action
│   │   │   │   └── Login.js
│   │   │   └── loader
│   │   │       ├── ContactUs.js
│   │   │       └── Reports.js
│   │   └── utils
│   │       ├── Cookie.js
│   │       └── getCrimeReportStatusColor.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── yarn.lock
├── crimereporting-backend
│   ├── Dockerfile
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
│   │   │   │       └── crimereporting
│   │   │   │           ├── config
│   │   │   │           │   └── S3Config.java
│   │   │   │           ├── controller
│   │   │   │           │   ├── AdminController.java
│   │   │   │           │   ├── CrimeCategoryController.java
│   │   │   │           │   ├── HomeController.java
│   │   │   │           │   ├── PoliceController.java
│   │   │   │           │   ├── ReportController.java
│   │   │   │           │   └── UserController.java
│   │   │   │           ├── CrimereportingApplication.java
│   │   │   │           ├── custom_exception
│   │   │   │           │   ├── ApiException.java
│   │   │   │           │   ├── AuthenticationException.java
│   │   │   │           │   ├── GlobalExceptionHandler.java
│   │   │   │           │   ├── ImageUploadException.java
│   │   │   │           │   └── ResourceNotFoundException.java
│   │   │   │           ├── dao
│   │   │   │           │   ├── AadhaarCardDao.java
│   │   │   │           │   ├── AddressDao.java
│   │   │   │           │   ├── AuditDao.java
│   │   │   │           │   ├── CitizenDao.java
│   │   │   │           │   ├── CrimeCategoryDao.java
│   │   │   │           │   ├── CrimeReportsDao.java
│   │   │   │           │   ├── EvidenceDao.java
│   │   │   │           │   ├── FeedbackDao.java
│   │   │   │           │   ├── PoliceStationDao.java
│   │   │   │           │   ├── PoliceStationUserDao.java
│   │   │   │           │   └── UserDao.java
│   │   │   │           ├── dtos
│   │   │   │           │   ├── AdminCrimeReportCitizenDTO.java
│   │   │   │           │   ├── AdminCrimeReportDTO.java
│   │   │   │           │   ├── AdminCrimeReportUserDTO.java
│   │   │   │           │   ├── AdminUserDTO.java
│   │   │   │           │   ├── ApiResponse.java
│   │   │   │           │   ├── AuditTrailsResponse.java
│   │   │   │           │   ├── AuthRequest.java
│   │   │   │           │   ├── AuthResponse.java
│   │   │   │           │   ├── BaseDTO.java
│   │   │   │           │   ├── CitizenRegisterRequestDTO.java
│   │   │   │           │   ├── CrimeCategoryDTO.java
│   │   │   │           │   ├── CrimeReportDetailsDTO.java
│   │   │   │           │   ├── CrimeReportDTO.java
│   │   │   │           │   ├── CrimeReportResponseDTO.java
│   │   │   │           │   ├── CrimeReportStatusDTO.java
│   │   │   │           │   ├── EvidenceResponseDTO.java
│   │   │   │           │   ├── FeedbackResponse.java
│   │   │   │           │   ├── FileUploadInfoDTO.java
│   │   │   │           │   ├── NearByPoliceStationDTO.java
│   │   │   │           │   ├── NearByPoliceStationDTOncsjvnj.java
│   │   │   │           │   ├── OtpRequest.java
│   │   │   │           │   ├── PoliceRegisterRequestDTO.java
│   │   │   │           │   ├── PoliceStationRegisterRequestDTO.java
│   │   │   │           │   ├── PoliceStationResponseDTO.java
│   │   │   │           │   ├── RegisterRequestDTO.java
│   │   │   │           │   └── RegisterResponseDTO.java
│   │   │   │           ├── entity
│   │   │   │           │   ├── AadhaarCard.java
│   │   │   │           │   ├── Address.java
│   │   │   │           │   ├── AuditTrails.java
│   │   │   │           │   ├── BaseEntity.java
│   │   │   │           │   ├── Citizen.java
│   │   │   │           │   ├── CrimeCategory.java
│   │   │   │           │   ├── CrimeReports.java
│   │   │   │           │   ├── Evidence.java
│   │   │   │           │   ├── Feedback.java
│   │   │   │           │   ├── PoliceStation.java
│   │   │   │           │   ├── PoliceStationUser.java
│   │   │   │           │   ├── Status.java
│   │   │   │           │   ├── User.java
│   │   │   │           │   └── UserRole.java
│   │   │   │           ├── security
│   │   │   │           │   ├── CustomAuthenticationEntryPoint.java
│   │   │   │           │   ├── CustomUserDetailsImpl.java
│   │   │   │           │   ├── CustomUserDetailsServiceImpl.java
│   │   │   │           │   ├── JWTAuthenticationFilter.java
│   │   │   │           │   ├── JwtUtil.java
│   │   │   │           │   └── SecurityConfig.java
│   │   │   │           ├── service
│   │   │   │           │   ├── AdminServiceImpl.java
│   │   │   │           │   ├── AdminService.java
│   │   │   │           │   ├── AuditServiceImpl.java
│   │   │   │           │   ├── AuditService.java
│   │   │   │           │   ├── CrimeCategoryServiceImpl.java
│   │   │   │           │   ├── CrimeCategoryService.java
│   │   │   │           │   ├── EmailService.java
│   │   │   │           │   ├── PoliceServiceImpl.java
│   │   │   │           │   ├── PoliceService.java
│   │   │   │           │   ├── ReportServiceImpl.java
│   │   │   │           │   ├── ReportService.java
│   │   │   │           │   ├── S3ImageUploaderImpl.java
│   │   │   │           │   ├── S3ImageUploader.java
│   │   │   │           │   ├── UserServiceImpl.java
│   │   │   │           │   └── UserService.java
│   │   │   │           └── utils
│   │   │   │               ├── AuditTrailAspect.java
│   │   │   │               └── ExtractFileNameFromUrl.java
│   │   │   └── resources
│   │   │       ├── application.properties
│   │   │       ├── static
│   │   │       └── templates
│   │   └── test
│   │       └── java
│   │           └── site
│   │               └── crimereporting
│   │                   ├── CrimereportingApplicationTests.java
│   │                   ├── daoTesting
│   │                   │   └── testingReportService.java
│   │                   └── utilsTesting
│   │                       └── TestExtractFileNameFromUrl.java
│   └── target
│       ├── classes
│       │   ├── application.properties
│       │   └── site
│       │       └── crimereporting
│       │           ├── config
│       │           │   └── S3Config.class
│       │           ├── controller
│       │           │   ├── AdminController.class
│       │           │   ├── CrimeCategoryController.class
│       │           │   ├── HomeController.class
│       │           │   ├── PoliceController.class
│       │           │   ├── ReportController.class
│       │           │   └── UserController.class
│       │           ├── CrimereportingApplication.class
│       │           ├── custom_exception
│       │           │   ├── ApiException.class
│       │           │   ├── AuthenticationException.class
│       │           │   ├── GlobalExceptionHandler.class
│       │           │   ├── ImageUploadException.class
│       │           │   └── ResourceNotFoundException.class
│       │           ├── dao
│       │           │   ├── AadhaarCardDao.class
│       │           │   ├── AddressDao.class
│       │           │   ├── AuditDao.class
│       │           │   ├── CitizenDao.class
│       │           │   ├── CrimeCategoryDao.class
│       │           │   ├── CrimeReportsDao.class
│       │           │   ├── EvidenceDao.class
│       │           │   ├── FeedbackDao.class
│       │           │   ├── PoliceStationDao.class
│       │           │   ├── PoliceStationUserDao.class
│       │           │   └── UserDao.class
│       │           ├── dtos
│       │           │   ├── AdminCrimeReportCitizenDTO.class
│       │           │   ├── AdminCrimeReportDTO.class
│       │           │   ├── AdminCrimeReportUserDTO.class
│       │           │   ├── AdminUserDTO.class
│       │           │   ├── ApiResponse.class
│       │           │   ├── AuditTrailsResponse.class
│       │           │   ├── AuthRequest.class
│       │           │   ├── AuthResponse.class
│       │           │   ├── BaseDTO.class
│       │           │   ├── CitizenRegisterRequestDTO.class
│       │           │   ├── CrimeCategoryDTO.class
│       │           │   ├── CrimeReportDetailsDTO.class
│       │           │   ├── CrimeReportDTO.class
│       │           │   ├── CrimeReportResponseDTO.class
│       │           │   ├── CrimeReportStatusDTO.class
│       │           │   ├── EvidenceResponseDTO.class
│       │           │   ├── FeedbackResponse.class
│       │           │   ├── FileUploadInfoDTO.class
│       │           │   ├── NearByPoliceStationDTO.class
│       │           │   ├── NearByPoliceStationDTOncsjvnj.class
│       │           │   ├── OtpRequest.class
│       │           │   ├── PoliceRegisterRequestDTO.class
│       │           │   ├── PoliceStationRegisterRequestDTO.class
│       │           │   ├── PoliceStationResponseDTO.class
│       │           │   ├── RegisterRequestDTO.class
│       │           │   └── RegisterResponseDTO.class
│       │           ├── entity
│       │           │   ├── AadhaarCard.class
│       │           │   ├── Address.class
│       │           │   ├── AuditTrails.class
│       │           │   ├── BaseEntity.class
│       │           │   ├── Citizen.class
│       │           │   ├── CrimeCategory.class
│       │           │   ├── CrimeReports.class
│       │           │   ├── Evidence.class
│       │           │   ├── Feedback.class
│       │           │   ├── PoliceStation.class
│       │           │   ├── PoliceStationUser.class
│       │           │   ├── Status.class
│       │           │   ├── User.class
│       │           │   └── UserRole.class
│       │           ├── security
│       │           │   ├── CustomAuthenticationEntryPoint.class
│       │           │   ├── CustomUserDetailsImpl.class
│       │           │   ├── CustomUserDetailsServiceImpl.class
│       │           │   ├── JWTAuthenticationFilter.class
│       │           │   ├── JwtUtil.class
│       │           │   └── SecurityConfig.class
│       │           ├── service
│       │           │   ├── AdminService.class
│       │           │   ├── AdminServiceImpl.class
│       │           │   ├── AuditService.class
│       │           │   ├── AuditServiceImpl.class
│       │           │   ├── CrimeCategoryService.class
│       │           │   ├── CrimeCategoryServiceImpl.class
│       │           │   ├── EmailService.class
│       │           │   ├── PoliceService.class
│       │           │   ├── PoliceServiceImpl.class
│       │           │   ├── ReportService.class
│       │           │   ├── ReportServiceImpl.class
│       │           │   ├── S3ImageUploader.class
│       │           │   ├── S3ImageUploaderImpl.class
│       │           │   ├── UserService.class
│       │           │   └── UserServiceImpl.class
│       │           └── utils
│       │               ├── AuditTrailAspect.class
│       │               └── ExtractFileNameFromUrl.class
│       ├── generated-sources
│       │   └── annotations
│       ├── generated-test-sources
│       │   └── test-annotations
│       ├── maven-status
│       │   └── maven-compiler-plugin
│       │       └── compile
│       │           └── default-compile
│       │               ├── createdFiles.lst
│       │               └── inputFiles.lst
│       └── test-classes
│           └── site
│               └── crimereporting
│                   ├── CrimereportingApplicationTests.class
│                   ├── daoTesting
│                   │   └── testingReportService.class
│                   └── utilsTesting
│                       └── TestExtractFileNameFromUrl.class

109 directories, 395 files
```