export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Jasper Timmer. All rights reserved.</p>
      </div>
    </footer>
  )
}
