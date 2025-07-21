import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, FileText, Thermometer, Users, Shield, ClipboardCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

const Requirements = () => {
  const requirements = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Помещения и оборудование",
      items: [
        "Обязательно наличие помещений и оборудования (склады, зоны приёмки, хранения, выдачи), принадлежащих на законных основаниях или переданных по договору аутсорсинга не менее чем на 12 мес.",
        "Помещения должны быть разделены функционально, обеспечивать доступ для лиц с ограниченными возможностями и закрыт от чужого доступа"
      ]
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Климат-контроль",
      items: [
        "Наличие термометров, гигрометров, холодильного, вентиляционного оборудования, обеспечивающих контроль температуры и влажности согласно правилам надлежащей практики",
        "Организация учёта климатических параметров и системы контроля качества хранения лекарств (журналы, графики, датчики)"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Персонал",
      items: [
        "Руководитель с фарм. образованием должен иметь ≥3 лет стажа, среднее профильное — ≥5 лет, подтвердить аккредитацию",
        "Обязательная сертификация специалистов, наличие должностных инструкций, плана обучения, инструктажей и системы ответственности"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Система качества (СОП, СОУЭ и пр.)",
      items: [
        "Утверждённые стандартные операционные процедуры (СОП) по всем процессам: складирование, приёмка, транспортировка, отпуск",
        "Назначено ответственное лицо за систему качества"
      ]
    },
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: "Документация",
      items: [
        "Наличие всех журналов контроля температур, инструктажей, учета остатков, складских операций"
      ]
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Соответствие законодательству",
      items: [
        "Помещения, оборудование и процессы — в полном соответствии с Федеральными законами №99‑ФЗ, №61‑ФЗ, Постановлением №547, Правилами надлежащей практики хранения (приказ №260н), дистрибьюторской и аптечной практики",
        "Выполнение требований Постановления Правительства №1081, включая отсутствие грубых нарушений"
      ]
    }
  ];

  const checklistItems = [
    "Законное владение помещениями (склады, зоны разгрузки, хранения, отгрузки)",
    "Функциональное разделение и доступность помещений",
    "Наличие климат‑оборудования и средств измерения (термографы, гигрометры, датчики)",
    "Ведение журналов температуры и влажности",
    "Принятие и хранение СОП по всем процессам",
    "Назначение ответственных за качество, обучение и инструктаж персонала",
    "Персонал соответствует требованиям: образование, стаж, аккредитация, должностные инструкции",
    "Имеется система внутреннего контроля (аудит, графики обучения)",
    "Процедуры безопасности (охрана, доступ, противопожарные меры)",
    "Отсутствие грубых нарушений законодательства (ФЗ 99, 61, ПП 547, ПП 1081)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Требования к лицензированию 
              <span className="text-primary block mt-2">
                фармацевтической деятельности
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный перечень требований для получения лицензии на фармацевтическую деятельность
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {requirements.map((requirement, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {requirement.icon}
                    </div>
                    {requirement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {requirement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Assessment Section */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                Оценочные листы и критерии
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Badge variant="secondary" className="text-sm">
                    Оптовая деятельность: 49 вопросов
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Розничная деятельность: 46 вопросов
                  </Badge>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Обязательно положительный ответ на все пункты, связанные с критическими нарушениями, согласно Положению №1081
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Новые формы чек‑листов приняты с 8 марта 2022 г.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                Примерный чек‑лист (сокращённый)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Нужна помощь с лицензированием?
              </h3>
              <p className="text-muted-foreground mb-6">
                Наши эксперты помогут вам пройти все этапы лицензирования и подготовить документы
              </p>
              <ContactModal>
                <Button variant="hero" size="lg">
                  Получить консультацию
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Requirements;