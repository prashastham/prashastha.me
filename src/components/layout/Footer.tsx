export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant/20 w-full py-xl opacity-90 hover:opacity-100 transition-opacity mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="font-code-mono text-code-mono text-on-surface">
          © {new Date().getFullYear()} Prashastha Mudannayake. Built with precision.
        </div>
        <nav className="flex gap-md font-label-caps text-label-caps">
          <a
            className="text-secondary hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="https://github.com/prashastham"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-secondary hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="https://www.linkedin.com/in/prashastha-mudannayake/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-secondary hover:text-primary transition-colors hover:underline decoration-primary underline-offset-4"
            href="mailto:prashasthamudannayake98@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
