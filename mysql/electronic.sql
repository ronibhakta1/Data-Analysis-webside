CREATE TABLE `electronic_dept` (
  `student_roll` int ,
  `student_year` int,
  `student_name` varchar(50),
  `student_email` varchar(50),
  `parents_name` varchar(50),
  `parent_email` varchar(50),
  `student_er_no` int,
  KEY `pk` (`student_er_no`)
);

CREATE TABLE `semester_1_e` (
  `student_er_no` int,
  `attendance_date` date,
  `english` int DEFAULT 0,
  `basic_science` int DEFAULT 0,
  `basic_mathematics` int DEFAULT 0,
  `fundamental_of_ict` int DEFAULT 0,
  `engineering_graphics` int DEFAULT 0,
  `workshop_practice` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_1_e` (
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
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_5_e` (
  `student_er_no` int,
  `environmental_studies` int,
  `control_system` int,
  `embedded_system` int,
  `mobile_and_wireless_communication` int,
  `microwave_and_radar` int,
  `industrial_training` int,
  `capstone_project_planning` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_5_e` (
  `student_er_no` int,
  `attendance_date` date,
  `environmental_studies` int DEFAULT 0,
  `control_system` int DEFAULT 0,
  `embedded_system` int DEFAULT 0,
  `mobile_and_wireless_communication` int DEFAULT 0,
  `microwave_and_radar` int DEFAULT 0,
  `industrial_training` int DEFAULT 0,
  `capstone_project_planning` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_4_e` (
  `student_er_no` int,
  `linear_integrated_circuits` int,
  `consumer_electronics` int,
  `microcontroller_and_application` int,
  `basic_power_electronics` int,
  `digital_communication_systems` int,
  `maintenance_of_electronics_equipments_and_eda_tools_practices` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_6_e` (
  `student_er_no` int,
  `management` int,
  `computer_networking_and_data_communication` int,
  `emerging_trends_in_electronics` int,
  `optical_network_and_satellite_communication` int,
  `enterpreneurship_development` int,
  `capstone_project_execution_and_report writing` int,
  `vlsi_with_vhdl` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_4_e` (
  `student_er_no` int,
  `attendance_date` date,
  `linear_integrated_circuits` int DEFAULT 0,
  `consumer_electronics` int DEFAULT 0,
  `microcontroller_and_application` int DEFAULT 0,
  `basic_power_electronics` int DEFAULT 0,
  `digital_communication_systems` int DEFAULT 0,
  `maintenance_of_electronics_equipments_and_eda_tools_practices` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_6_e` (
  `student_er_no` int,
  `attendance_date` date,
  `management` int DEFAULT 0,
  `computer_networking_and_data_communication` int DEFAULT 0,
  `emerging_trends_in_electronics` int DEFAULT 0,
  `optical_network_and_satellite_communication` int DEFAULT 0,
  `enterpreneurship_development` int DEFAULT 0,
  `capstone_project_execution_and_report writing` int DEFAULT 0,
  `vlsi_with_vhdl` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_3_e` (
  `student_er_no` int,
  `digital_techniques` int,
  `applied_electronics` int,
  `electric_circuits_and_networks` int,
  `electronic_measurement_and_instrumentation` int,
  `principles_of_electronic_communication` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_2_e` (
  `student_er_no` int,
  `applied_mathematics` int,
  `elements_of_electrical_engineering` int,
  `basic_electronics` int,
  `electronic_engineering_materials` int,
  `c_programming_languages` int,
  `business_communication_using_computers` int,
  `rating` int,
  `perentage` float,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_2_e` (
  `student_er_no` int,
  `attendance_date` date,
  `applied_mathematics` int DEFAULT 0,
  `elements_of_electrical_engineering` int DEFAULT 0,
  `basic_electronics` int DEFAULT 0,
  `electronic_engineering_materials` int DEFAULT 0,
  `c_programming_languages` int DEFAULT 0,
  `business_communication_using_computers` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_3_e` (
  `student_er_no` int,
  `attendance_date` date,
  `digital_techniques` int DEFAULT 0,
  `applied_electronics` int DEFAULT 0,
  `electric_circuits_and_networks` int DEFAULT 0,
  `electronic_measurement_and_instrumentation` int DEFAULT 0,
  `principles_of_electronic_communication` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `electronic_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);