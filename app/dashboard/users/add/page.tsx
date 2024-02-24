import React from 'react'
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css"
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder='username' name='username' required/>
        <input type="text" placeholder='email' name='email' required/>
        <input type="password" placeholder='password' name='password' required/>
        <input type="phone" placeholder='phone' name='phone' required/>
        <select name="isAdmin" id="isAdmin">
          <option value={`${false}`}>Is Admin?</option>
          <option value={`${true}`}>Yes</option>
          <option value={`${false}`}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={`${false}`}>Is Active?</option>
          <option value={`${true}`}>Yes</option>
          <option value={`${false}`}>No</option>
        </select>
        <textarea name="address" id="address" rows={10} placeholder='Address'></textarea>
        <button type='submit' className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage
