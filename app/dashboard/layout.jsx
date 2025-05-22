export default function DashboardLayout({ children }) {
  // In a real application, you would check if the user is authenticated
  // and redirect to login if not
  // const isAuthenticated = checkIfUserIsAuthenticated()
  // if (!isAuthenticated) {
  //   redirect('/login')
  // }

  return <div className="min-h-screen bg-[#f8f9fa]">{children}</div>
}
