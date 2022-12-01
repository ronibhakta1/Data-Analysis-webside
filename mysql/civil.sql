CREATE TABLE `civil_dept` (
   `student_roll` int ,
  `student_er_no` int,
  `student_year` int,
  `student_name` varchar(50),
  `student_email` varchar(50),
  `parents_name` varchar(50),
  `parent_email` varchar(50),
  KEY `pk` (`student_er_no`)
);

CREATE TABLE `semester_1_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `english` int DEFAULT 0,
  `basic_science` int DEFAULT 0,
  `basic_mathematics` int DEFAULT 0,
  `fundamental_of_ict` int DEFAULT 0,
  `engineering_graphics` int DEFAULT 0,
  `workshop_practice` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_1_ce` (
  `student_er_no` int,
  `english` int,
  `basic_science` int,
  `basic_mathematics` int,
  `fundamental_of_ict` int,
  `engineering_graphics` int,
  `workshop_practice` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_5_ce` (
  `student_er_no` int,
  `water_resource_engineering` int,
  `design_of_steel_and_rcc_structure` int,
  `estimating_costing_and_valuation` int,
  `public_health_engineering` int,
  `traffic_engineering` int,
  `industrial_training` int,
  `capstone_project_planning` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_5_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `water_resource_engineering` int DEFAULT 0,
  `design_of_steel_and_rcc_structure` int DEFAULT 0,
  `estimating_costing_and_valuation` int DEFAULT 0, 
  `public_health_engineering` int DEFAULT 0,
  `traffic_engineering` int DEFAULT 0,
  `industrial_training` int DEFAULT 0,
  `capstone_project_planning` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_4_ce` (
  `student_er_no` int,
  `hydraulics` int,
  `theory_of_structures` int,
  `railway_and_bridge_engineering` int,
  `geo_technical_engineering` int,
  `building_planning_and_drawing` int,
  `environmental_studies` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_6_ce` (
  `student_er_no` int,
  `management` int,
  `contracts_amd_accounts` int,
  `maintenance_and_repairs_of_structure` int,
  `emerging_trends_in_civil_engineering` int,
  `solid_waste_management` int,
  `capstone_project_execution_and_report_writing` int,
  `construction_management` int,
  `enterprenureship_development` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_4_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `hydraulics` int DEFAULT 0,
  `theory_of_structures` int DEFAULT 0,
  `railway_and_bridge_engineering` int DEFAULT 0,
  `geo_technical_engineering` int DEFAULT 0,
  `building_planning_and_drawing` int DEFAULT 0,
  `environmental_studies` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_6_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `management` int DEFAULT 0,
  `contracts_amd_accounts` int DEFAULT 0,
  `maintenance_and_repairs_of_structure` int DEFAULT 0,
  `emerging_trends_in_civil_engineering` int DEFAULT 0,
  `solid_waste_management` int DEFAULT 0,
  `capstone_project_execution_and_report_writing` int DEFAULT 0,
  `construction_management` int DEFAULT 0,
  `enterprenureship_development` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_3_ce` (
  `student_er_no` int,
  `advance_surveying` int,
  `highway_engineering` int,
  `mechanics_of_structures` int,
  `building_construction` int,
  `concrete_technology` int,
  `computer_aided_drawing` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_2_ce` (
  `student_er_no` int,
  `applied_mathematics` int,
  `applied_science` int,
  `applied_mechanics` int,
  `construction_materials` int,
  `basic_surveying` int,
  `civil_engineering_workshop_and_practice` int,
  `business_communication_using_computers` int,
  `perentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_2_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `applied_mathematics` int DEFAULT 0,
  `applied_science` int DEFAULT 0,
  `applied_mechanics` int DEFAULT 0,
  `construction_materials` int DEFAULT 0,
  `basic_surveying` int DEFAULT 0,
  `civil_engineering_workshop_and_practice` int DEFAULT 0,
  `business_communication_using_computers` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_3_ce` (
  `student_er_no` int,
  `attendance_date` date,
  `advance_surveying` int DEFAULT 0,
  `highway_engineering` int DEFAULT 0,
  `mechanics_of_structures` int DEFAULT 0,
  `building_construction` int DEFAULT 0,
  `concrete_technology` int DEFAULT 0,
  `computer_aided_drawing` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `civil_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);