import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

interface ContactModalProps {
  children: React.ReactNode;
}

export function ContactModal({ children }: ContactModalProps) {
  const contacts = [
    {
      name: "Telegram",
      icon: MessageCircle,
      link: "https://t.me/your_telegram",
      description: "Быстрая связь в мессенджере"
    },
    {
      name: "WhatsApp", 
      icon: MessageCircle,
      link: "https://wa.me/79000000000",
      description: "Написать в WhatsApp"
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:info@upex.ru",
      description: "Отправить письмо"
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Связаться с нами</DialogTitle>
          <DialogDescription>
            Выберите удобный способ связи для консультации
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <contact.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm text-muted-foreground">
                  {contact.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}