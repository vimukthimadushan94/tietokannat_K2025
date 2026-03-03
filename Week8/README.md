
# SQL Queries

### Create patients table
```sql
CREATE TABLE Patients (
    PatientId INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    DateOfBirth DATE NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,

    CHECK (DateOfBirth <= CURRENT_DATE)
);
```

### Create task table
```sql
CREATE TABLE Staff (
    StaffId INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Role ENUM('Doctor', 'Nurse', 'Technician', 'Admin') NOT NULL,
    Specialty VARCHAR(100),
    PhoneNumber VARCHAR(20) NOT NULL UNIQUE,
    Email VARCHAR(100) UNIQUE,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Creat departments table
```sql
CREATE TABLE Departments (
    DepartmentId INT AUTO_INCREMENT PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL UNIQUE,
    Location VARCHAR(100) NOT NULL,
    ResponsibleDoctorId INT,

    FOREIGN KEY (ResponsibleDoctorId)
        REFERENCES Staff(StaffId)
        ON DELETE SET NULL
);
```

### create PatientStays table
```sql
CREATE TABLE PatientStays (
    StayId INT AUTO_INCREMENT PRIMARY KEY,
    PatientId INT NOT NULL,
    DepartmentId INT NOT NULL,
    ResponsibleDoctorId INT NOT NULL,
    AdmissionDate DATETIME NOT NULL,
    DischargeDate DATETIME,

    FOREIGN KEY (PatientId)
        REFERENCES Patients(PatientId)
        ON DELETE CASCADE,

    FOREIGN KEY (DepartmentId)
        REFERENCES Departments(DepartmentId),

    FOREIGN KEY (ResponsibleDoctorId)
        REFERENCES Staff(StaffId),

    CHECK (DischargeDate IS NULL OR DischargeDate >= AdmissionDate)
);
```

### create treatments table
```sql
CREATE TABLE Treatments (
    TreatmentId INT AUTO_INCREMENT PRIMARY KEY,
    StayId INT NOT NULL,
    PerformedByStaffId INT NOT NULL,
    TreatmentName VARCHAR(150) NOT NULL,
    PerformedDate DATETIME NOT NULL,

    FOREIGN KEY (StayId)
        REFERENCES PatientStays(StayId)
        ON DELETE CASCADE,

    FOREIGN KEY (PerformedByStaffId)
        REFERENCES Staff(StaffId)
);
```

### create Medications table
```sql
 CREATE TABLE Medications (
      madicationId INT AUTO_INCREMENT PRIMARY KEY,
      PatientId INT NOT NULL,
      MedicationName VARCHAR(100) NOT NULL UNIQUE,
      Dosage VARCHAR(50) NOT NULL,
      StartDate DATE NOT NULL,
      EndDate DATE,
    
         FOREIGN KEY (PatientId)
             REFERENCES Patients(PatientId)
             ON DELETE CASCADE,
    
    
         CHECK (EndDate IS NULL OR EndDate >= StartDate)
    );
```

### create Appointments table
```sql
CREATE TABLE Appointments (
    AppointmentId INT AUTO_INCREMENT PRIMARY KEY,
    PatientId INT NOT NULL,
    DoctorId INT NOT NULL,
    AppointmentDateTime DATETIME NOT NULL,

    FOREIGN KEY (PatientId)
        REFERENCES Patients(PatientId)
        ON DELETE CASCADE,

    FOREIGN KEY (DoctorId)
        REFERENCES Staff(StaffId)
);

```

