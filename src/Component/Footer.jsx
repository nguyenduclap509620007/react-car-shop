export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4 text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} CarShop. All rights reserved.</p>
        <small>Built with React + Bootstrap</small>
      </div>
    </footer>
  );
}
