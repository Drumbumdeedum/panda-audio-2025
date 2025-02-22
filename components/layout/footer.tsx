import Link from "next/link";

const footerLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Panda Audio. All rights reserved.
          </div>
          <div className="flex gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
