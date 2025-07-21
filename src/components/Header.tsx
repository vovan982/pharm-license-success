import { Menu, Phone, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Лицензирование РЗН", href: "#licensing" },
    { name: "Услуги", href: "#services" },
    { name: "Кейсы", href: "#cases" },
    { name: "Контакты", href: "#contacts" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-card">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+7 999 909 11 80</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>perspectiva34@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-4 w-4" />
            <a href="/requirements" className="hover:underline">
              Требования к лицензированию
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/7dc2c422-f197-4878-ae3e-fdcda007c5c0.png" alt="Upex" className="h-8" />
            <h1 className="text-2xl font-bold text-primary">Апекс</h1>
            <span className="ml-2 text-sm text-muted-foreground hidden lg:block">
              Лицензирование фармскладов
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="hero" size="lg" className="hidden md:flex">
              Получить консультацию
            </Button>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button variant="hero" className="mt-6">
                    Получить консультацию
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;