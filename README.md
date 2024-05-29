The database created in SSMS is with name TestDB, Table name- TestTable
code used for creating the table:
USE TestDB

CREATE TABLE TestTable(
 id INT PRIMARY KEY,
 name VARCHAR(50),
 age INT
 );

 INSERT INTO TestTable(id,Name, age) VALUES (1, 'ARUN', 42);
 INSERT INTO TestTable(id,name, age) VALUES (2, 'ARJUN', 18);
 INSERT INTO TestTable(id,name, age) VALUES (3, 'RAVI', 25);
 INSERT INTO TestTable(id,name, age) VALUES (4, 'KIRAN', 30);
 INSERT INTO TestTable(id,name, age) VALUES (5, 'SHIV', 12);

DECLARE @i INT = 6;
DECLARE @max INT = 20; 

WHILE @i <= @max
BEGIN
    INSERT INTO TestTable (id, name, age)
    VALUES (@i, CONCAT('Name', @i), FLOOR(RAND() * (60 - 10 + 1) + 10)); 

    SET @i = @i + 1;
END;

 SELECT * FROM TestTable;
