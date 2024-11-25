import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import Navigation from '../../../components/Navigation'

function SignOutPage() {
  return (
    <div>
      <Navigation />
    <main className="flex items-center justify-center min-h-screen container px-4">
      
      <SignUp />
    </main>
    </div>
  )
}

export default SignOutPage