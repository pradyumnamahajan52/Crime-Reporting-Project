-- Users Table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(160) UNIQUE NOT NULL,
    role ENUM('citizen', 'police', 'admin') DEFAULT 'citizen',
    phone_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    password VARCHAR(500)
);

-- Auth Token Table
CREATE TABLE auth_token (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    token VARCHAR(300) NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- OTP Table
CREATE TABLE otp (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    otp_code VARCHAR(6) NOT NULL UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Citizen Table
CREATE TABLE citizen (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    full_name VARCHAR(100),
    aadhaar_number VARCHAR(12),
    address VARCHAR(500),
    dateOfBirth DATE,
    pinCode INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Police Station Table
CREATE TABLE police_station (
    id INT PRIMARY KEY AUTO_INCREMENT,
    station_name VARCHAR(100) NOT NULL,
    station_code int NOT NULL,
    address VARCHAR(250) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    latitude VARCHAR(10),
    longitude VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- Police Station User Table
CREATE TABLE police_station_user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    police_station_id INT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (police_station_id) REFERENCES police_station(id) ON DELETE CASCADE
);

-- Statuses Table
CREATE TABLE statuses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    status_name VARCHAR(50) NOT NULL UNIQUE
);

-- Crime Category Table
CREATE TABLE crime_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(100) NOT NULL UNIQUE,
    sub_category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);


-- Crime Reports Table
CREATE TABLE crime_reports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    crime_category_id INT NOT NULL,
    description TEXT NOT NULL,
    address VARCHAR(250),
    latitude VARCHAR(10),
    longitude VARCHAR(10),
    report_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status_id INT,
    police_station_id INT NULL,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (crime_category_id) REFERENCES crime_category(id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES statuses(id),
    FOREIGN KEY (police_station_id) REFERENCES police_station(id)
);

-- Evidence Table
CREATE TABLE evidence (
    id INT PRIMARY KEY AUTO_INCREMENT,
    report_id INT,
    file_url VARCHAR(255) NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (report_id) REFERENCES crime_reports(id)
);

-- Feedback Table
CREATE TABLE feedback (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comments TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Autdit Trail Logs Table
CREATE TABLE audit_trails (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message VARCHAR(2500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
);
