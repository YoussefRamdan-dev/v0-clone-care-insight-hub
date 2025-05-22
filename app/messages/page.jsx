"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Paperclip, Send } from "lucide-react"

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("contacts")
  const [activeContact, setActiveContact] = useState(null)
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef(null)

  // Mock data
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      type: "Patient",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
      messages: [
        {
          id: 1,
          sender: "doctor",
          content: "Hello John, how are you feeling today? Have the headaches improved since our last appointment?",
          timestamp: "05:32 PM",
        },
        {
          id: 2,
          sender: "patient",
          content:
            "Hello Dr. Johnson, I'm still having occasional headaches but they seem less intense. The medication is helping.",
          timestamp: "06:10 PM",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      type: "Patient",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      messages: [],
    },
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeContact])

  const handleContactClick = (contact) => {
    setActiveContact(contact)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // In a real app, you would send this to an API
    // For now, we'll just update the local state
    const newMessage = {
      id: activeContact.messages.length + 1,
      sender: "doctor",
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    // Update the contact's messages
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === activeContact.id) {
        return {
          ...contact,
          messages: [...contact.messages, newMessage],
        }
      }
      return contact
    })

    // Update the active contact
    setActiveContact(updatedContacts.find((contact) => contact.id === activeContact.id))
    setMessage("")

    // Scroll to the bottom after sending a message
    setTimeout(scrollToBottom, 100)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex h-[calc(80vh-2rem)]">
            {/* Left sidebar */}
            <div className="w-80 border-r border-gray-200 flex flex-col">
              {/* Tabs */}
              <Tabs defaultValue="contacts" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-2 rounded-none bg-white border-b border-gray-200">
                  <TabsTrigger
                    value="contacts"
                    className="rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-700"
                  >
                    Contacts
                  </TabsTrigger>
                  <TabsTrigger
                    value="ai"
                    className="rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-purple-500 data-[state=active]:text-purple-700"
                  >
                    AI Assistant
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="contacts" className="flex-1 flex flex-col p-0 m-0">
                  {/* Search */}
                  <div className="p-4">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search contacts..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Contacts list */}
                  <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${
                          activeContact?.id === contact.id ? "bg-gray-50" : ""
                        }`}
                        onClick={() => handleContactClick(contact)}
                      >
                        <div className="flex items-center">
                          <div className="relative">
                            <Avatar className="h-10 w-10 rounded-full bg-gray-200">
                              <img
                                src={contact.avatar || "/placeholder.svg"}
                                alt={contact.name}
                                className="h-10 w-10 rounded-full"
                              />
                            </Avatar>
                            {contact.status === "online" && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                            <p className="text-xs text-gray-500">{contact.type}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ai" className="flex-1 flex flex-col p-0 m-0">
                  <div className="p-4 text-center flex-1 flex flex-col justify-center items-center">
                    <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-500"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-8 0 4 4 0 1 0 8 0 10 10 0 0 0-10-10Z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">AI Assistant</h3>
                    <p className="text-sm text-gray-600 max-w-xs">
                      Get help with patient summaries, appointment scheduling, and message drafting.
                    </p>
                    <Button className="mt-4 bg-purple-500 hover:bg-purple-600">Chat with AI Assistant</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right content area */}
            <div className="flex-1 flex flex-col">
              {activeContact ? (
                <>
                  {/* Contact header */}
                  <div className="p-4 border-b border-gray-200 flex items-center">
                    <div className="relative">
                      <Avatar className="h-10 w-10 rounded-full bg-gray-200">
                        <img
                          src={activeContact.avatar || "/placeholder.svg"}
                          alt={activeContact.name}
                          className="h-10 w-10 rounded-full"
                        />
                      </Avatar>
                      {activeContact.status === "online" && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{activeContact.name}</p>
                      <p className="text-xs text-gray-500">
                        {activeContact.status === "online" ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {activeContact.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === "doctor" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              msg.sender === "doctor"
                                ? "bg-purple-500 text-white"
                                : "bg-white border border-gray-200 text-gray-800"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p
                              className={`text-xs mt-1 text-right ${
                                msg.sender === "doctor" ? "text-purple-200" : "text-gray-500"
                              }`}
                            >
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                      <button
                        type="button"
                        className="p-2 rounded-full text-gray-500 hover:text-purple-500 focus:outline-none"
                      >
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <Input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 mx-2 border border-gray-200 focus:ring-purple-500 focus:border-purple-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button
                        type="submit"
                        className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white focus:outline-none"
                        disabled={!message.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
                  <div className="bg-gray-200 rounded-full p-6 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Select a contact</h3>
                  <p className="text-gray-600 text-center">Choose a contact from the list to start a conversation</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
