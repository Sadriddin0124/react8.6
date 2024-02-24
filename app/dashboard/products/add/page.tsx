import React from 'react'
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css"
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder='title' name='title' required/>
        <select name="cat" id="cat">
          <option value={`${false}`}>Choose Category</option>
          <option value={`${true}`}>Kitchen</option>
          <option value={`${false}`}>Phone</option>
          <option value={`${false}`}>Computer</option>
        </select>
        <input type="number" placeholder='price' name='price' required/>
        <input type="number" placeholder='stock' name='stock' required/>
        <input type="text" placeholder='color' name='color' required/>
        <input type="text" placeholder='size' name='size' required/>
        <textarea name="desc" id="desc" rows={10} placeholder='Desc'></textarea>
        <button type='submit' className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default AddProductPage
