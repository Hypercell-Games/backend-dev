export interface Customer {
    id: number
    name: string
}

export interface Product {
    id: number
    name: string
    price: number
    currency: string
}

export interface Order {
    id: number
    customerId: number
    orderDate: Date
}

export interface OrderItem {
    id: number
    orderId: number
    productId: number
    quantity: number
}
