import { relations } from 'drizzle-orm'
import { doublePrecision, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core'

export const customersTable = pgTable('customers', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 200 }).notNull(),
})

relations(customersTable, ({ many }) => ({
    orders: many(ordersTable),
}))

export const productsTable = pgTable('products', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 200 }).notNull(),
    price: doublePrecision('price').notNull(),
    currency: varchar('currency', { length: 3 }).notNull(),
})

export const ordersTable = pgTable('orders', {
    id: serial('id').primaryKey(),
    customerId: integer('customer_id')
        .notNull()
        .references(() => customersTable.id),
    orderDate: timestamp('order_date').notNull().defaultNow(),
})

export const ordersTableRelations = relations(ordersTable, ({ one, many }) => ({
    customer: one(customersTable, {
        fields: [ordersTable.customerId],
        references: [customersTable.id],
    }),
    items: many(orderItemsTable),
}))

export const orderItemsTable = pgTable('order_items', {
    id: serial('id').primaryKey(),
    orderId: integer('order_id')
        .notNull()
        .references(() => ordersTable.id),
    productId: integer('product_id')
        .notNull()
        .references(() => productsTable.id),
    quantity: integer('quantity').notNull(),
})

export const orderItemsRelations = relations(orderItemsTable, ({ one }) => ({
    order: one(ordersTable, {
        fields: [orderItemsTable.orderId],
        references: [ordersTable.id],
    }),
    product: one(productsTable, {
        fields: [orderItemsTable.productId],
        references: [productsTable.id],
    }),
}))
