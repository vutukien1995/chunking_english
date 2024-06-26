"use client"

import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react"

export default () => {
    const { data: session, status: status } = useSession()

    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setUpProviders()
    }, [])

    return (
        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <img className="h-8 w-8" alt="menu" src="/icons/menu-alt.svg" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navs.map((n, i) => (
                            <li key={n.href}><a href={n.href}>{n.display}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <a href="/" className="btn btn-ghost text-xl">Chunking English</a>
            </div>

            <div className="navbar-end">
                {/* <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div> */}
                {/* <label className="btn btn-ghost swap swap-rotate hover:bg">
                    <input type="checkbox" className="theme-controller" value="dark" />
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label> */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {status == "loading" ?
                            <span className="loading loading-spinner loading-md"></span>
                            : <img alt="user avatar" src={session?.user.image ? session?.user.image : '/icons/account-avatar-profile-user.svg'} />}
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {session?.user ? <>
                            <li><a key='profile' href="/profile">Profile</a></li>
                            <li><a key='logout' onClick={signOut}>Signout</a></li>
                        </> : <>
                            {providers && Object.values(providers).map((provider) => (
                                <li key={provider.id}><a onClick={() => signIn(provider.id)}>Login</a></li>
                            ))}
                        </>}
                    </ul>
                </div>
            </div>
        </div>
    );
}

let navs = [
    {
        "href": "/",
        "display": "Home"
    },
    {
        "href": "/story",
        "display": "Story"
    },
    {
        "href": "/topic",
        "display": "Your Topic"
    },
    {
        "href": "/social",
        "display": "Social"
    },
    {
        "href": "/topic/ai_find",
        "display": "Find Chunks 4 Topic (AI)"
    },
    {
        "href": "/about",
        "display": "About"
    },
]

let userLogedInMenu = [
    {
        "href": "/profile",
        "display": "Profile"
    },
    {
        "href": "/logout",
        "display": "Logout"
    }
]