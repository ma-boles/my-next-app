import Links from "./links/Links";
import Link from "next/link";


export default function NavBar () {
    return (
        <>
        <div className="flex justify-between pt-6 pb-6">
            <div className="pl-2 text-xl font-bold">
                <Link href="/">Logo</Link></div>
            <div>
                <Links />
            </div>
        </div>
        </>
    )
}