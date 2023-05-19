-- Insert Data to Table products
INSERT INTO products (name, qty)
VALUES
    ('M71 Classic', 5),
    ('M64 Classic', 7),
    ('M64 Ultimate', 15);

-- Insert Data to Table parts
INSERT INTO parts (name, description, product_id)
VALUES
    ('Gateron Blue Switch', 'Clicky Switch', 1),
    ('ABS Black OEM Keycaps', 'ABS Material Keycaps', 1),
    ('Gateron Yellow Switch', 'Linear Switch', 2),
    ('PBT Black XDA Keycaps', 'PBT Material Keycaps', 2),
    ('JWICK Ultimate Black Switch', 'Linear Switch',3),
    ('PBT Black Cherry Keycaps', 'PBT Material Keycaps',3);

INSERT INTO parts (name, description)
VALUES   
    ('Daxa M64 FR4 Plate', 'FR4 Material Plate'),
    ('Durock V2 Screw-In', 'Screw-In Stabilizers');

-- Insert Data to Table suppliers
INSERT INTO suppliers (name, address, no_telp)
VALUES
    ('Outemu', 'China', '098364728'),
    ('Gateron', 'China', '03764890287'),
    ('JWICK', 'China', '76483919093'),
    ('Aflion', 'China', '7628617389'),
    ('KTT', 'China', '9738437282'),
    ('Lokal', 'Indonesia', '081673847841'),
    ('OEM', 'China', '647381736');

-- Insert Data to Table part_supplier
INSERT INTO part_supplier (part_id, supplier_id)
VALUES
    (1,2),
    (3,2),
    (4,7),
    (5,3),
    (6, 7),
    (7, 6),
    (7, 7),
    (8, 3);

-- Read Data from Table products
SELECT * FROM products;

-- Read Data from Table parts
SELECT * FROM parts;

-- Read Data from Table suppliers
SELECT * FROM suppliers;

-- Read Data from Table part_supplier
SELECT * FROM part_supplier;

-- Update Data from Table parts
UPDATE parts
SET name = 'Gateron Pro Yellow'
WHERE id = 3;

-- Update Data from Table suppliers
UPDATE suppliers
SET name = 'Lokal Maker'
WHERE id = 6;

-- Delete Data from Table suppliers
DELETE FROM suppliers
WHERE suppliers.id = 1;

-- Delete Data from Table parts
DELETE FROM parts
WHERE parts.id = 8;

-- Read Data Table products and parts
SELECT
    products.name AS product_name,
    parts.name AS part_name,
    parts.description AS part_description
FROM products
    RIGHT JOIN parts ON parts.product_id = products.id
GROUP BY
    products.id, products.name, parts.name, parts.description
Order BY
    products.id;

-- Read Data Table parts and suppliers
SELECT
    parts.name AS part_name,
    sp.name AS supplier_name
FROM part_supplier ps
    FULL JOIN parts ON ps.part_id = parts.id
    FULL JOIN suppliers sp ON ps.supplier_id = sp.id
GROUP BY
    ps.part_id, parts.name, sp.name
ORDER BY
    ps.part_id;  