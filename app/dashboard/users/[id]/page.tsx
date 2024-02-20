import React from 'react'
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from 'next/image'
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt='user'fill/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Username</label>
        <input type="text" placeholder='username' name='username'/>
        <label>Email</label>
        <input type="text" placeholder='email' name='email'/>
        <label>Password</label>
        <input type="password" placeholder='password' name='password'/>
        <label>Phone</label>
        <input type="phone" placeholder='phone' name='phone'/>
        <label>Address</label>
        <textarea name="address" id="address" rows={10} placeholder='Address'></textarea>
        <button type='submit' >Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
