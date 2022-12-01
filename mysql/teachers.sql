CREATE TABLE `teacher_info` (
  `teacher_id` int,
  `teacher_fname` varchar(20),
  `teacher_lname` varchar(20),
  `teacher_user` varchar(20),
  `teacher_pass` varchar(40),
  `teacher_dept` varchar(30),
  KEY `pk` (`teacher_id`)
);