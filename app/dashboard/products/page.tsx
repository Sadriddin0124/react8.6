import Search from '@/app/ui/dashboard/search/search'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/ui/dashboard/products/products.module.css"
import Pagination from '@/app/ui/dashboard/pagination/pagination'
const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..."/>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/user.png" alt='user' width={50} height={50} className={styles.userImage}/>
              Iphone
              </div>
              </td>
            <td>Desc</td>
            <td>$1200</td>
            <td>20.02.2024</td>
            <td>33</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/1`}> 
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default Products
