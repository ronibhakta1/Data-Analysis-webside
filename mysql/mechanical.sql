  CREATE TABLE `mechanical_dept` (
  `student_roll` int ,
  `student_year` int,
  `student_name` varchar(50),
  `student_email` varchar(50),
  `parents_name` varchar(50),
  `parent_email` varchar(50),
  `student_er_no` int,
  KEY `pk` (`student_er_no`)
);

CREATE TABLE `semester_1_m` (
  `student_er_no` int,
  `attendance_date` date,
  `english` int DEFAULT 0,
  `basic_science` int DEFAULT 0 ,
  `basic_mathematics` int DEFAULT 0,
  `fundamental_of_ict` int DEFAULT 0,
  `engineering_graphics` int DEFAULT 0,
  `workshop_practice` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_1_m` (
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
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_5_m` (
  `student_er_no` int,
  `management` int,
  `power_engineering_and_refrigeration` int,
  `advance_manufacturing_process` int,
  `elements_of_machine_design` int,
  `tool_engineering` int,
  `solid_modeling_and_additive_manufacturing` int,
  `industrial_training` int,
  `capstone_project_planning` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_5_m` (
  `student_er_no` int,
  `attendance_date` date,
  `management` int DEFAULT 0,
  `power_engineering_and_refrigeration` int DEFAULT 0,
  `advance_manufacturing_process` int DEFAULT 0,
  `elements_of_machine_design` int DEFAULT 0,
  `tool_engineering` int DEFAULT 0,
  `solid_modeling_and_additive_manufacturing` int DEFAULT 0,
  `industrial_training` int DEFAULT 0,
  `capstone_project_planning` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_4_m` (
  `student_er_no` int,
  `theory_of_machines` int,
  `mechanical_engineering_measurements` int,
  `fluid_mechanics_and_machinery` int,
  `manufacturing_process` int,
  `environmental_studies` int,
  `computer_aided_drafting` int,
  `fundamental_of_machatronics` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_6_m` (
  `student_er_no` int,
  `refrigeration_and_air_condition` int,
  `industrial_hydraulics_and_pneumatics` int,
  `industrial_engineering_and_quality_control` int,
  `emerging_trends_in_mechanical_engineering` int,
  `enterpreneurship_development` int,
  `automobile_development` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_4_m` (
  `student_er_no` int,
  `attendance_date` date,
  `theory_of_machines` int DEFAULT 0,
  `mechanical_engineering_measurements` int DEFAULT 0,
  `fluid_mechanics_and_machinery` int DEFAULT 0,
  `manufacturing_process` int DEFAULT 0,
  `environmental_studies` int DEFAULT 0,
  `computer_aided_drafting` int DEFAULT 0,
  `fundamental_of_machatronics` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_6_m` (
  `student_er_no` int,
  `attendance_date` date,
  `refrigeration_and_air_condition` int DEFAULT 0,
  `industrial_hydraulics_and_pneumatics` int DEFAULT 0,
  `industrial_engineering_and_quality_control` int DEFAULT 0,
  `emerging_trends_in_mechanical_engineering` int DEFAULT 0,
  `enterpreneurship_development` int DEFAULT 0,
  `automobile_development` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_3_m` (
  `student_er_no` int,
  `strength_of_materials` int,
  `basic_electrical_and_electronics_engineering` int,
  `thermal_engineering` int,
  `mechanical_working_drawing` int,
  `engineering_metrology` int,
  `mechanical_engineering_metarials` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_2_m` (
  `student_er_no` int,
  `applied_science` int,
  `applied_mechanics` int,
  `applied_mathematics` int,
  `engineering_drawing` int,
  `business_communication_using_computers` int,
  `mechanical_engineering_workshop` int,
  `perentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_2_m` (
  `student_er_no` int,
  `attendance_date` date,
  `applied_science` int DEFAULT 0,
  `applied_mechanics` int DEFAULT 0,
  `applied_mathematics` int DEFAULT 0,
  `engineering_drawing` int DEFAULT 0,
  `business_communication_using_computers` int DEFAULT 0,
  `mechanical_engineering_workshop` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_3_m` (
  `student_er_no` int,
  `attendance_date` date,
  `strength_of_materials` int DEFAULT 0,
  `basic_electrical_and_electronics_engineering` int DEFAULT 0, 
  `thermal_engineering` int DEFAULT 0,
  `mechanical_working_drawing` int DEFAULT 0,
  `engineering_metrology` int DEFAULT 0,
  `mechanical_engineering_metarials` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `mechanical_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);