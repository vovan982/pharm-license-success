import { Shield, CheckCircle, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-pharma-warehouse.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Фармацевтический склад" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Сертифицированные эксперты РЗН
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Лицензия РЗН для
                <span className="bg-gradient-primary bg-clip-text text-transparent"> фармсклада</span>
                <br />без ошибок
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Получаем лицензию по приказу 646н за 30 дней. Проверим помещение, 
                подготовим документы и сопроводим на проверке Росздравнадзора.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="font-medium">100% успешных лицензий</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <span className="font-medium">30 дней до результата</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-secondary" />
                <span className="font-medium">Гарантия возврата</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="font-medium">Работаем по 646н</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Получить лицензию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Бесплатная консультация
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div>⭐ 4.9/5 на Яндекс</div>
              <div>🏆 500+ лицензий</div>
              <div>📋 15 лет опыта</div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="space-y-6 animate-slide-up">
            <Card className="shadow-elevated border-0 bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Результаты 2024 года
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-muted-foreground">Успешных лицензий</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">127</div>
                    <div className="text-muted-foreground">Получено лицензий</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">23</div>
                    <div className="text-muted-foreground">Дня в среднем</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">0</div>
                    <div className="text-muted-foreground">Отказов РЗН</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee Badge */}
            <Card className="shadow-medical border-0 bg-gradient-secondary text-white">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Гарантия результата</h4>
                <p className="text-white/90">
                  Не получили лицензию — вернём 100% стоимости
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;