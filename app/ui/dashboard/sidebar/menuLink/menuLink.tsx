"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'
import styles from "./menuLink.module.css"
interface SubMenuItem {
    title: string,
    path: string,
    icon: ReactNode
}
const MenuLink = ({menu}:Readonly<{
    menu: SubMenuItem
}>) => {
    const pathname = usePathname()
  return (
    <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active }`}>
        {menu.icon}
        {menu.title}
    </Link>
  )
}

export default MenuLink
