import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

type GameSection = 'menu' | 'profile' | 'leaderboard' | 'inventory' | 'shop';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<GameSection>('menu');

  const playerData = {
    name: 'DragonSlayer',
    level: 42,
    xp: 7540,
    xpToNext: 10000,
    rank: 'Легенда',
    rating: 2847,
    wins: 234,
    losses: 156,
    winRate: 60,
    avatar: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/24765b93-54a1-4a12-b74b-f168b15176cd.jpg'
  };

  const leaderboard = [
    { rank: 1, name: 'ProGamer777', rating: 3542, avatar: '🏆' },
    { rank: 2, name: 'NinjaKiller', rating: 3401, avatar: '⚔️' },
    { rank: 3, name: 'MagicMaster', rating: 3287, avatar: '🔮' },
    { rank: 4, name: 'DragonSlayer', rating: 2847, avatar: '🐉', isPlayer: true },
    { rank: 5, name: 'ShadowHunter', rating: 2756, avatar: '🌙' },
  ];

  const inventory = [
    { id: 1, name: 'Меч Огня', rarity: 'legendary', image: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/7c5562ef-5611-44b7-aafc-9d4966bdfeb0.jpg', damage: '+120' },
    { id: 2, name: 'Щит Магии', rarity: 'epic', image: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/70859a8b-827d-41ff-a6c5-71eb6d975eb9.jpg', defense: '+85' },
    { id: 3, name: 'Зелье Здоровья', rarity: 'common', image: '🧪', heal: '+50 HP' },
    { id: 4, name: 'Кристалл Силы', rarity: 'rare', image: '💎', power: '+35%' },
  ];

  const shopItems = [
    { id: 1, name: 'Легендарный Сундук', price: 2500, image: '🎁', type: 'chest' },
    { id: 2, name: 'Эпический Меч', price: 1800, image: '⚔️', type: 'weapon' },
    { id: 3, name: 'Боевой Пропуск', price: 999, image: '🎫', type: 'pass' },
    { id: 4, name: 'Набор Зелий', price: 350, image: '🧪', type: 'consumable' },
  ];

  const rarityColors = {
    legendary: 'from-yellow-500 to-orange-500',
    epic: 'from-purple-500 to-pink-500',
    rare: 'from-blue-500 to-cyan-500',
    common: 'from-gray-400 to-gray-500'
  };

  const MainMenu = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        <h1 className="text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl animate-pulse-glow">
          BATTLE LEGENDS
        </h1>
        <p className="text-xl text-muted-foreground">Фэнтезийная королевская битва</p>
        
        <div className="flex flex-col gap-4 max-w-md mx-auto mt-12">
          <Button 
            size="lg" 
            className="h-16 text-xl font-bold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-scale-in"
            onClick={() => setCurrentSection('profile')}
          >
            <Icon name="Play" className="mr-2" size={24} />
            ИГРАТЬ
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="h-14 text-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => setCurrentSection('profile')}
          >
            <Icon name="User" className="mr-2" size={20} />
            Профиль
          </Button>
          
          <div className="grid grid-cols-3 gap-3">
            <Button 
              variant="outline"
              className="h-12 border-accent/50 hover:border-accent hover:bg-accent/10"
              onClick={() => setCurrentSection('shop')}
            >
              <Icon name="ShoppingBag" size={20} />
            </Button>
            <Button 
              variant="outline"
              className="h-12 border-secondary/50 hover:border-secondary hover:bg-secondary/10"
              onClick={() => setCurrentSection('inventory')}
            >
              <Icon name="Package" size={20} />
            </Button>
            <Button 
              variant="outline"
              className="h-12 border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => setCurrentSection('leaderboard')}
            >
              <Icon name="Trophy" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const Profile = () => (
    <div className="min-h-screen p-6 space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => setCurrentSection('menu')}
        className="mb-4"
      >
        <Icon name="ArrowLeft" className="mr-2" size={20} />
        Назад
      </Button>

      <Card className="p-6 bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/30">
        <div className="flex items-center gap-6">
          <Avatar className="w-24 h-24 border-4 border-primary animate-float">
            <AvatarImage src={playerData.avatar} />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl font-bold">{playerData.name}</h2>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold">
                {playerData.rank}
              </Badge>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Icon name="Star" size={16} className="text-primary" />
                Уровень {playerData.level}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Award" size={16} className="text-secondary" />
                Рейтинг {playerData.rating}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Опыт до {playerData.level + 1} уровня</span>
                <span className="text-primary font-bold">{playerData.xp} / {playerData.xpToNext}</span>
              </div>
              <Progress value={(playerData.xp / playerData.xpToNext) * 100} className="h-3" />
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 text-center border-2 border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
          <Icon name="Trophy" className="mx-auto mb-2 text-yellow-500" size={32} />
          <div className="text-3xl font-bold text-primary">{playerData.wins}</div>
          <div className="text-sm text-muted-foreground">Побед</div>
        </Card>
        
        <Card className="p-6 text-center border-2 border-destructive/20 hover:border-destructive/50 transition-all hover:scale-105">
          <Icon name="X" className="mx-auto mb-2 text-red-500" size={32} />
          <div className="text-3xl font-bold text-destructive">{playerData.losses}</div>
          <div className="text-sm text-muted-foreground">Поражений</div>
        </Card>
        
        <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent/50 transition-all hover:scale-105">
          <Icon name="Target" className="mx-auto mb-2 text-accent" size={32} />
          <div className="text-3xl font-bold text-accent">{playerData.winRate}%</div>
          <div className="text-sm text-muted-foreground">Винрейт</div>
        </Card>
      </div>
    </div>
  );

  const Leaderboard = () => (
    <div className="min-h-screen p-6 space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => setCurrentSection('menu')}
        className="mb-4"
      >
        <Icon name="ArrowLeft" className="mr-2" size={20} />
        Назад
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
          Рейтинг Легенд
        </h2>
        <p className="text-muted-foreground">Лучшие воины королевства</p>
      </div>

      <div className="space-y-3 max-w-2xl mx-auto">
        {leaderboard.map((player, index) => (
          <Card 
            key={index}
            className={`p-4 transition-all hover:scale-102 ${
              player.isPlayer 
                ? 'border-2 border-primary bg-primary/5 animate-pulse-glow' 
                : 'border border-border hover:border-primary/30'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`text-3xl font-bold w-12 text-center ${
                player.rank === 1 ? 'text-yellow-500' :
                player.rank === 2 ? 'text-gray-400' :
                player.rank === 3 ? 'text-orange-600' :
                'text-muted-foreground'
              }`}>
                {player.rank}
              </div>
              
              <div className="text-4xl">{player.avatar}</div>
              
              <div className="flex-1">
                <div className="font-bold text-lg">{player.name}</div>
                <div className="text-sm text-muted-foreground">Рейтинг: {player.rating}</div>
              </div>

              {player.rank <= 3 && (
                <Icon name="Crown" className="text-yellow-500" size={24} />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const Inventory = () => (
    <div className="min-h-screen p-6 space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => setCurrentSection('menu')}
        className="mb-4"
      >
        <Icon name="ArrowLeft" className="mr-2" size={20} />
        Назад
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Инвентарь</h2>
        <p className="text-muted-foreground">Ваше снаряжение и предметы</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {inventory.map((item) => (
          <Card 
            key={item.id}
            className={`p-4 text-center cursor-pointer transition-all hover:scale-105 border-2 bg-gradient-to-br ${
              rarityColors[item.rarity as keyof typeof rarityColors]
            } bg-opacity-10 hover:shadow-xl`}
          >
            <div className="text-6xl mb-3 animate-float">
              {item.image.startsWith('http') ? (
                <img src={item.image} alt={item.name} className="w-full h-24 object-contain rounded-lg" />
              ) : (
                item.image
              )}
            </div>
            <div className="font-bold mb-1">{item.name}</div>
            <Badge className={`bg-gradient-to-r ${rarityColors[item.rarity as keyof typeof rarityColors]} text-white text-xs`}>
              {item.rarity}
            </Badge>
            <div className="text-sm text-muted-foreground mt-2">
              {item.damage || item.defense || item.heal || item.power}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const Shop = () => (
    <div className="min-h-screen p-6 space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => setCurrentSection('menu')}
        className="mb-4"
      >
        <Icon name="ArrowLeft" className="mr-2" size={20} />
        Назад
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Магазин</h2>
        <div className="flex items-center justify-center gap-2 text-2xl text-secondary">
          <Icon name="Coins" size={28} />
          <span className="font-bold">25,420</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {shopItems.map((item) => (
          <Card 
            key={item.id}
            className="p-6 text-center border-2 border-primary/20 hover:border-primary transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-7xl mb-4 animate-float">{item.image}</div>
            <div className="font-bold text-lg mb-2">{item.name}</div>
            <div className="flex items-center justify-center gap-2 mb-4 text-secondary text-xl font-bold">
              <Icon name="Coins" size={20} />
              {item.price}
            </div>
            <Button 
              className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
            >
              Купить
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {currentSection === 'menu' && <MainMenu />}
      {currentSection === 'profile' && <Profile />}
      {currentSection === 'leaderboard' && <Leaderboard />}
      {currentSection === 'inventory' && <Inventory />}
      {currentSection === 'shop' && <Shop />}
    </div>
  );
};

export default Index;
