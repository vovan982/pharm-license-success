import { Phone, Mail, MapPin, Shield, FileText, Users } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Апекс</h3>
            <p className="text-white/80">
              Эксперты по лицензированию фармацевтических складов. 
              Работаем с гарантией результата.
            </p>
            <div className="flex items-center gap-2 text-secondary">
              <Shield className="h-5 w-5" />
              <span className="font-medium">100% успешных лицензий в 2024</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Услуги</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-white transition-colors cursor-pointer">
                Лицензирование фармсклада
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Аудит фармсклада
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Обучение персонала
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Разработка СОП
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Юридическое сопровождение
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Полезное</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <FileText className="h-4 w-4" />
                <a href="/requirements" className="hover:underline">
                  Требования к лицензированию
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Users className="h-4 w-4" />
                Чек-лист для проверки
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Калькулятор стоимости
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                База знаний
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Блог
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Контакты</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+7 999 909 11 80</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+7 985 737 10 12</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>perspectiva34@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Косыгина 13</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Режим работы:</p>
              <p className="text-white/80 text-sm">
                Пн-Пт: 9:00-21:00<br />
                Сб-Вс: 10:00-18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Апекс. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;