INSERT INTO "customers" ("name")
VALUES ('Alice'),
       ('Bob'),
       ('Charlie');

INSERT INTO "products" ("name", "price", "currency")
VALUES ('Apple', 2.5, 'usd'),
       ('Banana', 2.0, 'eur'),
       ('Cherry', 5.0, 'usd'),
       ('Cookie', 4.0, 'gbp'),
       ('Watermelon', 9.0, 'usd'),
       ('Fig', 10.0, 'usd'),
       ('Grape', 5.39, 'eur'),
       ('Honeydew', 8.0, 'usd'),
       ('Ice Cream', 1.49, 'gbp'),
       ('Jelly', 0.99, 'usd');

INSERT INTO "orders" ("customer_id", "order_date")
VALUES (1, '2024-07-29'),
       (2, '2024-07-30'),
       (3, '2024-07-31');

INSERT INTO "order_items" ("order_id", "product_id", "quantity")
VALUES (1, 1, 2),
       (1, 2, 3),
       (1, 3, 1);
