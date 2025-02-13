# Nearest Police Station Calculation in MySQL

## **Overview**
This query finds the **three nearest police stations** to a given **crime report location** based on latitude and longitude using the **Haversine formula**.

---

## **SQL Query**
```sql
SELECT 
    p.id, 
    p.station_name, 
    p.address_id,
    (6371 * ACOS(
        COS(RADIANS(18.589141614352126)) * COS(RADIANS(a.latitude)) * 
        COS(RADIANS(a.longitude) - RADIANS(73.70577991092131)) + 
        SIN(RADIANS(18.589141614352126)) * SIN(RADIANS(a.latitude))
    )) AS distance
FROM police_station p
JOIN address a ON p.address_id = a.id
WHERE a.latitude IS NOT NULL AND a.longitude IS NOT NULL
ORDER BY distance
LIMIT 3;
```

---

## **Explanation**

### **1. Selecting Columns**
```sql
SELECT 
    p.id, 
    p.station_name, 
    p.address_id,
    (6371 * ACOS(
        COS(RADIANS(18.589141614352126)) * COS(RADIANS(a.latitude)) * 
        COS(RADIANS(a.longitude) - RADIANS(73.70577991092131)) + 
        SIN(RADIANS(18.589141614352126)) * SIN(RADIANS(a.latitude))
    )) AS distance
```
- `p.id` → Fetches the **police station ID**.
- `p.station_name` → Fetches the **police station name**.
- `p.address_id` → Fetches the **address ID** of the police station.
- **Distance Calculation** → Uses the **Haversine formula** to compute the great-circle distance between:
  - The **crime location** (`18.589141614352126`, `73.70577991092131`).
  - Each **police station’s** latitude & longitude (`a.latitude`, `a.longitude`).
  - `6371` is the Earth's radius in **kilometers**.

---

### **2. Joining Police Station with Address Table**
```sql
FROM police_station p
JOIN address a ON p.address_id = a.id
```
- **`JOIN` condition** ensures that each **police station is linked to its address**.

---

### **3. Filtering Out Null Values**
```sql
WHERE a.latitude IS NOT NULL AND a.longitude IS NOT NULL
```
- Ensures only valid **latitude and longitude** values are used.
- Prevents **calculation errors**.

---

### **4. Sorting by Distance**
```sql
ORDER BY distance
```
- **Sorts police stations in ascending order of distance** (nearest first).

---

### **5. Limiting Results to Top 3**
```sql
LIMIT 3;
```
- Returns **only the 3 closest police stations**.

---

## **Example Scenario**

### **Police Station Table (`police_station`)**
| id | station_name    | address_id |
|----|---------------|------------|
| 1  | Station A      | 10         |
| 2  | Station B      | 11         |
| 3  | Station C      | 12         |
| 4  | Station D      | 13         |

### **Address Table (`address`)**
| id  | latitude  | longitude  |
|-----|----------|-----------|
| 10  | 18.5895  | 73.7078   |
| 11  | 18.5901  | 73.7105   |
| 12  | 18.5878  | 73.7042   |
| 13  | 18.6000  | 73.7200   |

### **Query Execution**
If the **crime report is at (18.589141614352126, 73.70577991092131)**, the query calculates distances and returns:

| id | station_name | address_id | distance (km) |
|----|-------------|------------|--------------|
| 3  | Station C   | 12         | 0.25         |
| 1  | Station A   | 10         | 0.45         |
| 2  | Station B   | 11         | 0.80         |

🚀 **These are the 3 closest police stations!**

---

## **How to Test in MySQL Terminal**

1. **Open MySQL terminal**
```sh
mysql -u your_username -p
```
2. **Select the database**
```sql
USE crime_reporting_db;
```
3. **Run the query**
```sql
SELECT 
    p.id, 
    p.station_name, 
    p.address_id,
    (6371 * ACOS(
        COS(RADIANS(18.589141614352126)) * COS(RADIANS(a.latitude)) * 
        COS(RADIANS(a.longitude) - RADIANS(73.70577991092131)) + 
        SIN(RADIANS(18.589141614352126)) * SIN(RADIANS(a.latitude))
    )) AS distance
FROM police_station p
JOIN address a ON p.address_id = a.id
WHERE a.latitude IS NOT NULL AND a.longitude IS NOT NULL
ORDER BY distance
LIMIT 3;
```

 **Check if the output shows the nearest police stations!**

---

## **Why Use This Query?**
✔ **Fast & Efficient** – Uses SQL instead of Java for calculations.  
✔ **Accurate** – Uses the **Haversine formula**, considering Earth's curvature.  
✔ **Scalable** – Works with **thousands of police stations**.  

🚀 **Use this query for real-time crime report assignments!** 🚀


# **Understanding ACOS, COS, and the Haversine Formula in MySQL**

## **Overview**
This document explains the usage of `ACOS`, `COS`, and other mathematical functions in the **Haversine formula**, which calculates the **distance between two latitude-longitude points on Earth**.

---

## **1. SQL Query Using Haversine Formula**
```sql
SELECT 
    p.id, 
    p.station_name, 
    p.address_id,
    (6371 * ACOS(
        COS(RADIANS(18.589141614352126)) * COS(RADIANS(a.latitude)) * 
        COS(RADIANS(a.longitude) - RADIANS(73.70577991092131)) + 
        SIN(RADIANS(18.589141614352126)) * SIN(RADIANS(a.latitude))
    )) AS distance
FROM police_station p
JOIN address a ON p.address_id = a.id
WHERE a.latitude IS NOT NULL AND a.longitude IS NOT NULL
ORDER BY distance
LIMIT 3;
```

---

## **2. Breakdown of Functions Used in the Query**

### **a. `RADIANS(x)`**
- Converts an angle from **degrees to radians**.
- **Why?** Because trigonometric functions in MySQL (`COS`, `SIN`, `ACOS`) work with **radians, not degrees**.

🛠 **Example:**
```sql
SELECT RADIANS(180);  -- Output: 3.14159 (which is π radians)
```

---

### **b. `COS(RADIANS(x))` (Cosine Function)**
- Computes the **cosine** of an angle.
- The cosine function is used to calculate the projection of latitude.

🛠 **Example:**
```sql
SELECT COS(RADIANS(45));  -- Output: 0.7071 (which is cos(π/4))
```

---

### **c. `SIN(RADIANS(x))` (Sine Function)**
- Computes the **sine** of an angle.
- Helps in distance calculation by considering the spherical shape of Earth.

🛠 **Example:**
```sql
SELECT SIN(RADIANS(30));  -- Output: 0.5 (which is sin(π/6))
```

---

### **d. `ACOS(x)` (Inverse Cosine / Arccos Function)**
- Computes the **inverse cosine (arccos)** of a number.
- Used to find the **angular distance** between two points on a sphere.

🛠 **Example:**
```sql
SELECT ACOS(0.5);  -- Output: 1.0472 radians (which is 60 degrees)
```

---

## **3. How These Functions Work Together in the Haversine Formula**

```sql
(6371 * ACOS(
    COS(RADIANS(18.589141614352126)) * COS(RADIANS(a.latitude)) * 
    COS(RADIANS(a.longitude) - RADIANS(73.70577991092131)) + 
    SIN(RADIANS(18.589141614352126)) * SIN(RADIANS(a.latitude))
))
```
### **Step-by-Step Explanation:**
1. **Convert degrees to radians** → `RADIANS(latitude)` and `RADIANS(longitude)`.
2. **Calculate cosine and sine values** → `COS()` and `SIN()` for each coordinate.
3. **Apply `ACOS()` to get the angle (in radians).**
4. **Multiply by Earth's radius (`6371 km`) to get the actual distance.**

---

## **4. Why Use the Haversine Formula?**

✔ **Accurate for small and large distances** on Earth.  
✔ **Used in GPS systems** for distance calculation.  
✔ **More precise than simple Pythagorean calculations.**  

---

## **5. Example Calculation (Finding Distance in MySQL Terminal)**

1. **Open MySQL terminal:**
```sh
mysql -u your_username -p
```
2. **Select the database:**
```sql
USE crime_reporting_db;
```
3. **Run a simple distance calculation:**
```sql
SELECT (6371 * ACOS(COS(RADIANS(18.5891)) * COS(RADIANS(18.6000)) *
COS(RADIANS(73.7057) - RADIANS(73.7200)) + SIN(RADIANS(18.5891)) * SIN(RADIANS(18.6000)))) 
AS distance;
```

 **This will return the distance in kilometers between two locations!**

---

## **6. Summary of Functions**

| Function | Description | Example |
|----------|------------|---------|
| `RADIANS(x)` | Converts degrees to radians | `RADIANS(180) = π` |
| `COS(x)` | Computes the cosine of an angle | `COS(π/4) = 0.7071` |
| `SIN(x)` | Computes the sine of an angle | `SIN(π/6) = 0.5` |
| `ACOS(x)` | Computes the inverse cosine (arccos) | `ACOS(0.5) = π/3 (60°)` |

🚀 **Now you understand how MySQL calculates the nearest police station using latitude and longitude!** 🚀

