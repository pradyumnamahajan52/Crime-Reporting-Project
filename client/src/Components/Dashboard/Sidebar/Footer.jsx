import React from 'react'
import { Form } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">crimereport.live &#169; {new Date().getFullYear()}</p>
        </div>
        <Form method="POST" action="/user/logout">
        <button type="submit"  className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded" >
          Logout
        </button>
        </Form>
      </div>
    </div>
  )
}

export default Footer