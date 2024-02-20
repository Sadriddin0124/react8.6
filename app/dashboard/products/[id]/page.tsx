import React from 'react'
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from 'next/image'
const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/user.png" alt='user'fill/>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
        <label>Title</label>
        <input type="text" placeholder='title' name='title'/>
        <label>Price</label>
        <input type="number" placeholder='price' name='price'/>
        <label>Stock</label>
        <input type="number" placeholder='stock' name='stock'/>
        <label>Color</label>
        <input type="text" placeholder='color' name='color'/>
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="kitchen">Kitchen</option>
          <option value="computers">Computers</option>
        </select>
        <label>Description</label>
        <textarea name="desc" id="desc" rows={10} placeholder='Description'></textarea>
        <button type='submit' >Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProductPage
