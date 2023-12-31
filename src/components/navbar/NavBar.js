import Links from "./links/Links";


export default function NavBar () {
    return (
        <>
        <div className="flex justify-between pt-6 pb-6">
            <div className="pl-2 text-xl font-bold">Logo</div>
            <div>
                <Links />
            </div>
        </div>
        </>
    )
}