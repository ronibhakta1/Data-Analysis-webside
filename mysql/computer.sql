CREATE TABLE `computer_dept` (
  `student_roll` int,
  `student_year` int,
  `student_name` varchar(50),
  `student_email` varchar(50),
  `parents_name` varchar(50),
  `parent_email` varchar(50),
  `student_er_no` int,
  KEY `pk` (`student_er_no`)
);

CREATE TABLE `semester_1_c` (
  `student_er_no` int,
  `attendance_date` date,
  `english` int DEFAULT 0,
  `basic_science` int DEFAULT 0,
  `basic_mathematics` int DEFAULT 0,
  `fundamental_of_ict` int DEFAULT 0,
  `engineering_graphics` int DEFAULT 0,
  `workshop_practice` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_1_c` (
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
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_5_c` (
  `student_er_no` int,
  `environmental_studies` int,
  `operating_system` int,
  `advance_java_programming` int,
  `software_testing` int,
  `advance_computer_network` int,
  `industrial_training` int,
  `capstone_project_planning` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_5_c` (
  `student_er_no` int,
  `attendance_date` date,
  `environmental_studies` int DEFAULT 0,
  `operating_system` int DEFAULT 0,
  `advance_java_programming` int DEFAULT 0,
  `software_testing` int DEFAULT 0,
  `advance_computer_network` int DEFAULT 0,
  `industrial_training` int DEFAULT 0,
  `capstone_project_planning` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_4_c` (
  `student_er_no` int,
  `java_programming` int,
  `software_engineering` int,
  `data_communication_and_computer_network` int,
  `microprocessors` int,
  `gui_application_development_using_vb.net` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_6_c` (
  `student_er_no` int,
  `management` int,
  `programming_with_python` int,
  `mobile_application_development` int,
  `emerging_trends_in_computer_and_information_technology` int,
  `network_and_information_security` int,
  `enterpreneurship_development` int,
  `capstone_project_execution_and_report_writing` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_4_c` (
  `student_er_no` int,
  `attendance_date` date,
  `java_programming` int DEFAULT 0,
  `software_engineering` int DEFAULT 0,
  `data_communication_and_computer_network` int DEFAULT 0,
  `microprocessors` int DEFAULT 0,
  `gui_application_development_using_vb.net` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_6_c` (
  `student_er_no` int,
  `attendance_date` date,
  `management` int DEFAULT 0,
  `programming_with_python` int DEFAULT 0,
  `mobile_application_development` int DEFAULT 0,
  `emerging_trends_in_computer_and_information_technology` int DEFAULT 0,
  `network_and_information_security` int DEFAULT 0,
  `enterpreneurship_development` int DEFAULT 0,
  `capstone_project_execution_and_report_writing` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_3_c` (
  `student_er_no` int,
  `object_oriented_programming_using_cplus` int,
  `data_structure_using_c` int,
  `computer_graphics` int,
  `database_management_system` int,
  `digital_techniques` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_mark_2_c` (
  `student_er_no` int,
  `elements_of_electrical_engineering` int,
  `applied_mathematics` int,
  `basic_electronics` int,
  `programming_in_c` int,
  `business_communication_using_computers` int,
  `computer_peripheral_and_hardware_maintenance` int,
  `webpage_designing_with_html` int,
  `percentage` float,
  `rating` int,
  `remark` varchar(32765),
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_2_c` (
  `student_er_no` int,
  `attendance_date` date,
  `elements_of_electrical_engineering` int DEFAULT 0,
  `applied_mathematics` int DEFAULT 0,
  `basic_electronics` int DEFAULT 0,
  `programming_in_c` int DEFAULT 0,
  `business_communication_using_computers` int DEFAULT 0,
  `computer_peripheral_and_hardware_maintenance` int DEFAULT 0,
  `webpage_designing_with_html` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);

CREATE TABLE `semester_3_c` (
  `student_er_no` int,
  `attendance_date` date,
  `object_oriented_programming_using_cplus` int DEFAULT 0,
  `data_structure_using_c` int DEFAULT 0,
  `computer_graphics` int DEFAULT 0,
  `database_management_system` int DEFAULT 0,
  `digital_techniques` int DEFAULT 0,
  FOREIGN KEY (`student_er_no`) REFERENCES `computer_dept`(`student_er_no`),
  KEY `fk` (`student_er_no`)
);