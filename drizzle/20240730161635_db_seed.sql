INSERT INTO "customers" ("id", "name")
VALUES (1, 'Alice'),
       (2, 'Bob'),
       (3, 'Charlie');

INSERT INTO "products" ("id", "name", "price", "currency")
VALUES (1, 'Apple', 2.5, 'usd'),
       (2, 'Banana', 2.0, 'eur'),
       (3, 'Cherry', 5.0, 'usd'),
       (4, 'Cookie', 4.0, 'gbp'),
       (5, 'Watermelon', 9.0, 'usd'),
       (6, 'Fig', 10.0, 'usd'),
       (7, 'Grape', 5.39, 'eur'),
       (8, 'Honeydew', 8.0, 'usd'),
       (9, 'Ice Cream', 1.49, 'gbp'),
       (10, 'Jelly', 0.99, 'usd');

INSERT INTO "orders" ("id", "customer_id", "order_date")
VALUES (1, 1, '2024-07-29'),
       (2, 2, '2024-07-30'),
       (3, 3, '2024-07-31');

INSERT INTO "order_items" ("id", "order_id", "product_id", "quantity")
VALUES (1, 1, 1, 2),
       (2, 1, 2, 3),
       (3, 1, 3, 1);
