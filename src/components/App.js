'use client' //ui

import Header from "./Header"
import CartSidebar from "./CartSidebar"

export default function App({ children }) {
    return (
        <div>
            <div className="mr-32">
                <Header />
                <main className="p-4">{children}</main>
            </div>
            <CartSidebar />
        </div>
    )
}