import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/user.png" alt='user' width={50} height={50} className={styles.userImage}/>
              John Doe
              </div>
              </td>
            <td>john@gmail.com</td>
            <td>20.02.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/1`}>
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

export default Users
