import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                <li><Link href="/contact">ติดต่อเรา</Link></li>
                <li><Link href="/login">Sign In</Link></li>
                <li><Link href="/register">Sign Up</Link></li>
            </ul>
        </div>
    )
}
