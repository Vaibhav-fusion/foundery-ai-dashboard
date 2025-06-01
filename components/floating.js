import React from 'react'

import { Pizza } from 'lucide-react'

function Floating() {
  return (
        <div className="fixed bottom-16 left-0 right-0 bottom-0 flex justify-center " >
          <div className="animate-bounce bg-rose-500/10 border border-rose-500/30 rounded-full p-4">
            <Pizza className="w-8 h-8 text-rose-400" />
          </div>
        </div>
  )
}

export default Floating