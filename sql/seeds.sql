USE employeesDB;

INSERT INTO department (name)
VALUES ("Sales"),("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2),("Software Engineer", 120000, 2), ("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David", "Bowie", 1, 3), ("Monica", "Lewinsky", 2, 1), ("Goldie", "Hawn", 3, null),
("Stevie", "Nicks", 4, 3), ("Marilyn", "Manson", 5, null),("Tom", "Petty", 2, null),
("DK", "Metcalf", 4, 7),("Tyler", "Lockett", 1, 2);