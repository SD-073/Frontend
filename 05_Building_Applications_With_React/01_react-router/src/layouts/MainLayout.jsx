import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
        <Navbar />
        <main className="min-h-[89vh] flex flex-col items-center justify-center">
            <Outlet />
        </main>
        <footer className="footer footer-center p-2 bg-base-200 text-base-content">
          <h2 className="footer-title">Copyright &copy; 2026</h2>
        </footer>
        
    </div>
  )
}

export default MainLayout