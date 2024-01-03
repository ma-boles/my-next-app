"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import styles from "./links.module.css";

export default function Links () {

    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Contact",
            path: "/contact",
        },
];

// temp
const session = true
const isAdmin = false

    return (
        <>
        <div>
            <div className={styles.links}>
            {links.map((link => (
                <NavLink item={link} key={link.title}/>
            )))} {
                session ? (
                    <>
                    {
                    isAdmin && (
                        <NavLink item={{ title: "Admin", path: "/admin"}}/>
                    )
                }
                <button>Logout</button>
                </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/Login"}}/>
    )
            }
            </div>
        </div>
        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>
            <Image src="bars-solid.svg" alt="menu" width={20} height={20}/>
            </button> 
        {
            open && <div className={styles.mobileLinks}>{links.map((link) => (
                <NavLink item={link} key={link.title}/>
            ))}
            </div>
        }
        </>
    )
}

