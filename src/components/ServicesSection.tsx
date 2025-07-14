import { FileCheck, Building, Users, Clipboard, Scale, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Лицензирование фармсклада",
      description: "Полное сопровождение получения лицензии на хранение лекарственных средств согласно действующим требованиям",
      features: ["Подготовка документов", "Аудит помещений", "Сопровождение проверки"],
      price: "от 150 000 ₽"
    },
    {
      icon: Building,
      title: "Аудит фармсклада",
      description: "Комплексная проверка соответствия вашего склада требованиям Росздравнадзора перед подачей документов",
      features: ["Техническое состояние", "Документооборот", "Персонал"],
      price: "от 45 000 ₽"
    },
    {
      icon: Users,
      title: "Обучение персонала",
      description: "Подготовка ответственных лиц и персонала склада к работе в соответствии с требованиями РЗН",
      features: ["Сертификация", "Практические занятия", "Экзамены"],
      price: "от 100 000 ₽"
    },
    {
      icon: Clipboard,
      title: "Разработка СОП",
      description: "Создание стандартных операционных процедур для всех процессов работы фармацевтического склада",
      features: ["Приём товара", "Хранение", "Отгрузка"],
      price: "от 35 000 ₽"
    },
    {
      icon: Scale,
      title: "Юридическое сопровождение",
      description: "Защита интересов при взаимодействии с контролирующими органами и решение спорных вопросов",
      features: ["Претензии РЗН", "Обжалование решений", "Судебная защита"],
      price: "от 80 000 ₽"
    },
    {
      icon: CheckCircle,
      title: "Комплексное решение",
      description: "Полный цикл работ от аудита до получения лицензии с гарантией результата",
      features: ["Все услуги включены", "Персональный менеджер", "Гарантия"],
      price: "от 2 000 000 ₽",
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Услуги по лицензированию
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг для получения лицензии РЗН на хранение лекарственных средств. 
            Работаем с гарантией результата.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elevated transition-all duration-300 border-0 ${
                service.popular ? 'ring-2 ring-primary bg-gradient-primary text-white' : 'bg-white'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  service.popular ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <service.icon className={`h-6 w-6 ${
                    service.popular ? 'text-white' : 'text-primary'
                  }`} />
                </div>
                <CardTitle className={`text-xl ${
                  service.popular ? 'text-white' : 'text-foreground'
                }`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className={`${
                  service.popular ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${
                      service.popular ? 'text-white/90' : 'text-foreground'
                    }`}>
                      <CheckCircle className={`h-4 w-4 ${
                        service.popular ? 'text-white' : 'text-secondary'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/20">
                  <div className={`text-2xl font-bold mb-4 ${
                    service.popular ? 'text-white' : 'text-primary'
                  }`}>
                    {service.price}
                  </div>
                  <Button 
                    variant={service.popular ? "secondary" : "default"} 
                    className="w-full"
                  >
                    Заказать услугу
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block shadow-medical border-0 bg-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Нужна индивидуальная консультация?
              </h3>
              <p className="text-muted-foreground mb-4">
                Обсудим ваш проект и подберём оптимальное решение
              </p>
              <Button variant="hero" size="lg">
                Получить консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;