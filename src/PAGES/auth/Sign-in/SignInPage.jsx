import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Navigation from '../../../components/Navigation'

export const SignInPage = () => {
  return (
    <div>
      <Navigation />
    <main className="flex items-center justify-center min-h-screen container px-4">
      
      <SignIn />
    </main>
    </div>
  )
}
export default SignInPage
