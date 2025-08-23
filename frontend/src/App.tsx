import { useState } from 'react'
import './App.css'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu, Send } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function App() {

  const [inputValue, setInputValue] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleClickMenu = (command: string) => {
    setInputValue(command);
  }

  const handleChatHistory = () => {
    setChatHistory(prev => [...prev, inputValue]);
    setInputValue("");
  }

  return (
    <div className="h-[500px] w-[700px] max-w-full max-h-full bg-gradient-to-b from-[#2b2b2b] to-[#3c3c3c] rounded-lg shadow-xl flex flex-col overflow-hidden">

      <ScrollArea className="flex-1 overflow-auto bg-[#2f2f2f] p-4">
        <div className="space-y-1 text-gray-200 w-full break-words font-mono text-sm">
          {chatHistory.map((msg, index) => (
            <div key={index} className="text-left">
              <span className="text-green-400">➜</span> {msg}
            </div>
          ))}
        </div>
      </ScrollArea>


      <div className="flex items-center gap-3 border-t border-[#555555] p-3 bg-[#333333]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><Menu size={20} /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-20 bg-[#1f1f1f] text-white" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleClickMenu("/login")}>
                /login
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleClickMenu("/register")}>
                /register
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleClickMenu("/transfer")}>
                /transfer
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          placeholder="What do you want to do?"
          className="flex-1 bg-[#3c3c3c] text-gray-200 border border-[#666666] focus-visible:ring-0 focus:border-green-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              handleChatHistory()
            }
          }}
        />

        <Button className="w-10 h-10 p-2 bg-[#4dabf7] hover:bg-[#339af0] text-white rounded-full"
          onClick={handleChatHistory}>
          <Send size={20} />
        </Button>
      </div>
    </div>
  );
}

export default App;
