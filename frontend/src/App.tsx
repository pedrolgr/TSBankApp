import { useState } from 'react'
import './App.css'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Send } from 'lucide-react'

function App() {

  return (
    <div className="h-[500px] w-[700px] max-w-full max-h-full bg-gradient-to-b from-[#2b2b2b] to-[#3c3c3c] rounded-lg shadow-xl flex flex-col overflow-hidden">
      
      <ScrollArea className="flex-1 overflow-auto bg-[#2f2f2f] p-4">
        <div className="space-y-2 text-gray-200 w-full break-words">
        </div>
      </ScrollArea>

      <div className="flex items-center gap-3 border-t border-[#555555] p-3 bg-[#333333]">
        <Button className="w-10 h-10 p-2 bg-[#ff6b6b] hover:bg-[#ff4c4c] text-white rounded-full">
          <Menu size={20} />
        </Button>
        <Input
          placeholder="Digite um comando..."
          className="flex-1 bg-[#3c3c3c] text-gray-200 border border-[#666666] focus-visible:ring-0 focus:border-green-400"
        />
        <Button className="w-10 h-10 p-2 bg-[#4dabf7] hover:bg-[#339af0] text-white rounded-full">
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
}

export default App;
