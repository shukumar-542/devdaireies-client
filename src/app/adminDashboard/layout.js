import Navbar from "./shared/Navbar";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <section className="flex">
            <Navbar />
            {children}
        </section>
    )
}