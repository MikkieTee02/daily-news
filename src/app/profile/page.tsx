
"use client";
import Loader from "@/src/components/ui/loader";
import { useSession } from "next-auth/react";
import React from "react";


const Profile = () => {
  const {status, data:session} = useSession()
  if (status === 'loading'){
    return <Loader/>
  }

  else if (status==='authenticated'){
    return <div className="mx-auto px-8">
      <div className="py-4 rounded-md flex flex-col gap-3 items-center">
        <button className="self-end text-center rounded-md w-20 h-10 bg-white text-black"> Sign Out</button>
      </div>
    </div>
  }
  return (
    <div>
    SIGN IN
    </div>
  )
}

export default Profile
