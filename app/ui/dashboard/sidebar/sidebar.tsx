import React, { ReactNode } from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
interface MenuItem {
  title: string;
  list: SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path: string;
  icon: ReactNode;
}
const Sidebar = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src={"/user.png"}
          alt="user image"
          className={styles.userImage}
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Adminstrator</span>
        </div>
      </div>
      <ul>
        {menuItems?.map((item, index) => (
          <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            {item?.list?.map((list) => (
              <MenuLink key={list.title} menu={list} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
