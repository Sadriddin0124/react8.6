import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { IUserPromise } from "@/app/types/users";
const Users = async ({
  searchParams,
}: {
  searchParams: { q: string; page: string };
}) => {
  const query = searchParams?.q || "";
  const page = Number(searchParams?.page) || 1;
  const results: IUserPromise | undefined = await fetchUsers(query, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
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
          {results?.users?.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={item?.img || "/user.png"}
                      alt="user"
                      width={50}
                      height={50}
                      className={styles.userImage}
                    />
                    {item.username}
                  </div>
                </td>
                <td>{item?.email}</td>
                <td>{item?.createdAt?.toString()?.slice(4, 16)}</td>
                <td>{item?.isAdmin ? "Admin" : "Client"}</td>
                <td>{item?.isActive ? "Active" : "Passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/1`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={results?.count} />
    </div>
  );
};

export default Users;
