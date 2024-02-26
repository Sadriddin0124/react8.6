import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { updateUser } from "@/app/lib/userAction";
import { fetchUser } from "@/app/lib/data";

const SingleUserPage = async ({ params }: { params: { id: string } }) => {
  const id = params?.id;
  const user = await fetchUser(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user?.img || "/user.png"} alt="user" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input hidden type="text" name="id" value={user?.id} />
          <label>Username</label>
          <input type="text" value={user?.username} name="username" />
          <label>Email</label>
          <input type="text" placeholder={user?.email} name="email" />
          <label>Password</label>
          <input type="password" placeholder={user?.password} name="password" />
          <label>Phone</label>
          <input type="phone" placeholder={user?.phone} name="phone" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={`${true}`} selected={user?.isAdmin}>Yes</option>
            <option value={`${false}`} selected={!user?.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={`${true}`} selected={user?.isActive}>Yes</option>
            <option value={`${false}`} selected={!user?.isActive}>No</option>
          </select>
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows={10}
            placeholder={user?.address}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
