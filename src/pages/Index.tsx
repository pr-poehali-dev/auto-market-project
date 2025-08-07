import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка в Telegram
    const message = `Новая заявка:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nУслуга: ${formData.service}\nГород: ${formData.city}\nСообщение: ${formData.message}`;
    const telegramUrl = `https://t.me/Ivan_88888?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  const services = [
    {
      title: 'Продажа авто с пробегом',
      description: 'Широкий выбор проверенных автомобилей с гарантией юридической чистоты',
      icon: 'Car',
      action: () => window.open('https://www.avito.ru/user/387b19b1dc19f7ddf7692a6f45049371/profile?src=sharing', '_blank')
    },
    {
      title: 'Выкуп авто',
      description: 'Выкупаем ваш автомобиль по рыночной стоимости в день обращения',
      icon: 'HandCoins',
      action: () => window.open('https://t.me/Ivan_88888', '_blank')
    },
    {
      title: 'Трейд-ин',
      description: 'Обмен вашего автомобиля на другой с доплатой или скидкой',
      icon: 'RefreshCw',
      action: () => window.open('https://t.me/Ivan_88888', '_blank')
    },
    {
      title: 'Автокредит и рассрочка',
      description: 'Кредит и рассрочка с любой кредитной историей и независимо от долгов',
      icon: 'CreditCard',
      action: () => window.open('https://t.me/Ivan_88888', '_blank')
    }
  ];

  const advantages = [
    'Гарантия юридической чистоты 100%',
    'Оценка и выкуп авто в день обращения', 
    'Продажа, обмен, комиссия автомобилей с пробегом',
    'Кредит с любой кредитной историей'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-auto-light to-white">
      {/* Header */}
      <header className="bg-auto-primary/95 backdrop-blur-md sticky top-0 z-50 border-b border-auto-blue-300/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/866bc891-081c-43a9-b9bb-4cd43746f0ae.png" 
                alt="Авто Маркет" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-heading font-bold text-white">АВТО МАРКЕТ</h1>
                <p className="text-auto-blue-200 text-sm">Ваш надежный партнер</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-white hover:text-auto-blue-200 transition-colors">Услуги</a>
              <a href="#advantages" className="text-white hover:text-auto-blue-200 transition-colors">Преимущества</a>
              <a href="#contacts" className="text-white hover:text-auto-blue-200 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-auto-primary mb-6 leading-tight">
                  Найдите свой
                  <span className="block text-auto-accent">идеальный автомобиль</span>
                </h2>
                <p className="text-xl text-auto-blue-600 mb-8">
                  Продажа, выкуп, обмен автомобилей с пробегом. Кредит и рассрочка с любой кредитной историей.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-auto-accent hover:bg-auto-accent/90 text-white px-8 py-6 text-lg font-semibold animate-float"
                  onClick={() => window.open('https://www.avito.ru/user/387b19b1dc19f7ddf7692a6f45049371/profile?src=sharing', '_blank')}
                >
                  <Icon name="Car" className="mr-2" size={24} />
                  Выбрать авто
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-auto-primary text-auto-primary hover:bg-auto-primary hover:text-white px-8 py-6 text-lg font-semibold"
                  onClick={() => window.open('https://t.me/Ivan_88888', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Оценить авто
                </Button>
              </div>

              {/* Social buttons */}
              <div className="flex space-x-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://t.me/+W0ZJqg_iYY82MWIy', '_blank')}
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://vk.com/avtorynok_nomer1', '_blank')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <Icon name="Users" size={16} className="mr-2" />
                  VKontakte
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://wa.me/79212542636', '_blank')}
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/4d84db3d-f846-49c5-8167-dbe64c8c6354.PNG"
                  alt="Менеджер Авто Маркет"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-auto-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-auto-primary mb-4">Наши услуги</h3>
            <p className="text-xl text-auto-blue-600 max-w-2xl mx-auto">
              Полный спектр услуг для покупки и продажи автомобилей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-auto-blue-200 hover:border-auto-accent group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-auto-accent/10 rounded-full group-hover:bg-auto-accent/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-auto-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading text-auto-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-auto-blue-600 mb-6">{service.description}</CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-auto-accent text-auto-accent hover:bg-auto-accent hover:text-white"
                    onClick={service.action}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Auto Selection Section */}
      <section className="py-20 bg-gradient-to-r from-auto-primary to-auto-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-heading font-bold mb-4">Автоподбор</h3>
            <p className="text-xl text-auto-blue-100 max-w-2xl mx-auto">
              Поможем найти идеальный автомобиль в вашем городе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading text-white">Череповец</CardTitle>
                <CardDescription className="text-auto-blue-100">
                  Профессиональный подбор автомобилей
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg" 
                  className="bg-white text-auto-primary hover:bg-auto-blue-50 w-full"
                  onClick={() => window.open('https://t.me/artemk_888', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-heading text-white">Вологда</CardTitle>
                <CardDescription className="text-auto-blue-100">
                  Профессиональный подбор автомобилей
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg" 
                  className="bg-white text-auto-primary hover:bg-auto-blue-50 w-full"
                  onClick={() => window.open('https://t.me/RuslanKorolev1', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Оставить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-auto-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-auto-primary mb-4">Наши преимущества</h3>
            <p className="text-xl text-auto-blue-600">Почему выбирают нас</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-auto-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-auto-accent" />
                  </div>
                </div>
                <p className="text-auto-primary font-medium text-lg">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-heading font-bold text-auto-primary mb-4">Оставить заявку</h3>
              <p className="text-xl text-auto-blue-600">Свяжитесь с нами для консультации</p>
            </div>
            
            <Card className="shadow-lg border-auto-blue-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="border-auto-blue-300 focus:border-auto-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="border-auto-blue-300 focus:border-auto-accent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Услуга</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger className="border-auto-blue-300 focus:border-auto-accent">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">Продажа авто</SelectItem>
                        <SelectItem value="buyout">Выкуп авто</SelectItem>
                        <SelectItem value="tradein">Трейд-ин</SelectItem>
                        <SelectItem value="credit">Автокредит</SelectItem>
                        <SelectItem value="selection">Автоподбор</SelectItem>
                        <SelectItem value="valuation">Оценка авто</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Город</Label>
                    <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                      <SelectTrigger className="border-auto-blue-300 focus:border-auto-accent">
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cherepovets">Череповец</SelectItem>
                        <SelectItem value="vologda">Вологда</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="border-auto-blue-300 focus:border-auto-accent"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-auto-accent hover:bg-auto-accent/90 text-white"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-auto-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-4">Контакты</h3>
            <p className="text-xl text-auto-blue-100">Мы всегда на связи</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-heading font-bold mb-4">Череповец</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-auto-blue-200" />
                    <span>ул. Рыбинская, 61</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-auto-blue-200" />
                    <a href="tel:+79115186113" className="hover:text-auto-blue-200">+7 (911) 518-61-13</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-heading font-bold mb-4">Вологда</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-auto-blue-200" />
                    <span>Окружное шоссе, 23</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-auto-blue-200" />
                    <a href="tel:+79215347321" className="hover:text-auto-blue-200">+7 (921) 534-73-21</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-2xl font-heading font-bold mb-4">Социальные сети</h4>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-white text-white hover:bg-white hover:text-auto-primary"
                  onClick={() => window.open('https://t.me/+W0ZJqg_iYY82MWIy', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-3" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-white text-white hover:bg-white hover:text-auto-primary"
                  onClick={() => window.open('https://vk.com/avtorynok_nomer1', '_blank')}
                >
                  <Icon name="Users" size={20} className="mr-3" />
                  VKontakte
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start border-white text-white hover:bg-white hover:text-auto-primary"
                  onClick={() => window.open('https://wa.me/79212542636', '_blank')}
                >
                  <Icon name="Phone" size={20} className="mr-3" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-auto-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/866bc891-081c-43a9-b9bb-4cd43746f0ae.png" 
                alt="Авто Маркет" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-heading font-bold">АВТО МАРКЕТ</span>
            </div>
            <p className="text-auto-blue-300 mb-4">
              © 2024 Авто Маркет. Все права защищены.
            </p>
            <p className="text-sm text-auto-blue-400">
              Продажа, выкуп, обмен автомобилей с пробегом. Гарантия юридической чистоты.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;