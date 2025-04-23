
function Footer() {
  return (
    <footer className="bg-topo bg-cover bg-fixed relative">
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto px-4 py-16 relative z-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-xl font-bold mb-2">Gamexyz Lab</h4>
          <p className="text-gray-400">Play. Earn. Repeat.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">About</h5>
          <ul className="space-y-1 text-gray-400">
            <li><a href="/" className="hover:text-white">Team</a></li>
            <li><a href="/" className="hover:text-white">Roadmap</a></li>
            <li><a href="/" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <ul className="space-y-1 text-gray-400">
            <li>Email: hello@gamexyz.io</li>
            <li>Discord: Gamexyz</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 bg-black/90 text-gray-500 text-xs">&copy; {new Date().getFullYear()} Gamexyz. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
