import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
       © {new Date().getFullYear()} Arsh Vhora. All rights reserved.
    </footer>

  )
}

export default Footer