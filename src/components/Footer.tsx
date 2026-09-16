import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-gradient font-semibold">Ola Zaher</span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ola Zaher. Made with curiosity.
          </p>
          
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">&gt;</span> rm -rf vulnerabilities
          </p>
        </div>
      </div>
    </footer>
  );
}
