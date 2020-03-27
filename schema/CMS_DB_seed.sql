INSERT INTO department(name)
VALUES ('Management');
INSERT INTO department(name)
VALUES ('Financial');
INSERT INTO department (name)
VALUES ('Human Resources');
SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ('Manager', 137000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Chief Financial Officer', 115000, 2);
SELECT * FROM role;