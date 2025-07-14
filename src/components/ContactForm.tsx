import { useState } from "react";
import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    warehouseSize: "",
    medicineTypes: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Наш специалист свяжется с вами в течение 30 минут",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        warehouseSize: "",
        medicineTypes: "",
        message: ""
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Получить консультацию
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы рассчитаем стоимость лицензирования вашего склада
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Phone className="h-5 w-5" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">+7 999 909 11 80</p>
                    <p className="font-semibold">+7 985 737 10 12</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">perspectiva34@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MessageSquare className="h-5 w-5" />
                    Мессенджеры
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Telegram: @farmlicense</p>
                    <p className="text-sm text-muted-foreground">WhatsApp: +7 999 909 11 80</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-primary rounded-lg p-6 text-white">
                <h3 className="font-bold mb-2">Экспресс-консультация</h3>
                <p className="text-sm text-white/90 mb-4">
                  Получите ответы на вопросы по лицензированию прямо сейчас
                </p>
                <Button variant="secondary" className="w-full">
                  Позвонить сейчас
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elevated border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Заявка на лицензирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ваше имя *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Телефон *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Площадь склада (м²)
                        </label>
                        <Input
                          name="warehouseSize"
                          value={formData.warehouseSize}
                          onChange={handleChange}
                          placeholder="Например: 500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Типы лекарств
                        </label>
                        <Input
                          name="medicineTypes"
                          value={formData.medicineTypes}
                          onChange={handleChange}
                          placeholder="Рецептурные, БАД, ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Дополнительная информация
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите о вашем проекте, текущем статусе лицензирования..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Отправляем..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Отправить заявку
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;