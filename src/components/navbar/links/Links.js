import Link from "next/link";

export default function Links () {

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

    return (
        <>
        <div>
            {links.map((link => (
            <Link href={link.path} key={link.title} className="bg-red-600 ">{link.title}</Link>
            )))}
        </div>
        </>
    )
}

