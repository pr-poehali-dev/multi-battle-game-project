import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

type GameSection = 'menu' | 'profile' | 'leaderboard' | 'inventory' | 'shop' | 'lobby' | 'achievements' | 'settings';

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

  const achievements = [
    { id: 1, name: 'Первая Кровь', description: 'Одержите первую победу', progress: 100, total: 100, icon: '⚔️', unlocked: true },
    { id: 2, name: 'Воин', description: 'Одержите 100 побед', progress: 234, total: 100, icon: '🛡️', unlocked: true },
    { id: 3, name: 'Легенда', description: 'Достигните рейтинга 2500', progress: 2847, total: 2500, icon: '👑', unlocked: true },
    { id: 4, name: 'Коллекционер', description: 'Соберите 50 предметов', progress: 38, total: 50, icon: '📦', unlocked: false },
    { id: 5, name: 'Богач', description: 'Накопите 50,000 монет', progress: 25420, total: 50000, icon: '💰', unlocked: false },
    { id: 6, name: 'Непобедимый', description: 'Выиграйте 10 боев подряд', progress: 7, total: 10, icon: '🔥', unlocked: false },
  ];

  const maps = [
    { 
      id: 1, 
      name: 'Парящие Острова', 
      description: 'Магические острова в небесах',
      image: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/235a5fac-c858-44af-b756-fa8577fe3968.jpg',
      players: '100',
      difficulty: 'medium',
      icon: '🏝️'
    },
    { 
      id: 2, 
      name: 'Пустыня Руин', 
      description: 'Древние развалины в песках',
      image: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/cbedaebc-9b09-4962-b8a1-b356609c8d4a.jpg',
      players: '100',
      difficulty: 'hard',
      icon: '🏜️'
    },
    { 
      id: 3, 
      name: 'Ледяная Крепость', 
      description: 'Замерзшие горы и пещеры',
      image: 'https://cdn.poehali.dev/projects/559a1f74-c645-493c-a5d5-6a16e5024e2e/files/6efa0dd9-38bf-496c-bbb4-3e3815983b36.jpg',
      players: '100',
      difficulty: 'easy',
      icon: '❄️'
    },
  ];

  const playerNames = [
    'DragonKnight', 'ShadowBlade', 'FireMage', 'IceWizard', 'ThunderStrike',
    'NightHunter', 'BloodRaven', 'StormBreaker', 'DarkPhoenix', 'LightningFist',
    'MysticSage', 'WarriorKing', 'FrostQueen', 'BlazeRunner', 'VoidWalker',
    'CrimsonBlade', 'SilverArrow', 'GoldenLion', 'IronFist', 'SteelHeart'
  ];

  const playerAvatars = ['⚔️', '🛡️', '🏹', '🔮', '⚡', '🌙', '🔥', '❄️', '💀', '👑', '🐉', '🦅', '🐺', '🦁', '🐯'];

  const generateRandomPlayers = (count: number) => {
    const players = [];
    const usedNames = new Set();
    
    for (let i = 0; i < count; i++) {
      let name;
      do {
        name = playerNames[Math.floor(Math.random() * playerNames.length)];
      } while (usedNames.has(name));
      usedNames.add(name);
      
      players.push({
        name,
        avatar: playerAvatars[Math.floor(Math.random() * playerAvatars.length)],
        level: Math.floor(Math.random() * 50) + 1,
        isReady: Math.random() > 0.3
      });
    }
    return players;
  };

  const [lobbyTimer, setLobbyTimer] = useState(30);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMode, setSelectedMode] = useState<'solo' | 'duo' | 'squad'>('solo');
  const [selectedMap, setSelectedMap] = useState(1);
  const [foundPlayers, setFoundPlayers] = useState<Array<{name: string; avatar: string; level: number; isReady: boolean}>>([]);
  const [settings, setSettings] = useState({
    soundVolume: 80,
    musicVolume: 60,
    graphics: 'high' as 'low' | 'medium' | 'high' | 'ultra',
    showFPS: true,
    vibration: true,
    notifications: true
  });

  useEffect(() => {
    if (isSearching && lobbyTimer > 0) {
      const timer = setTimeout(() => setLobbyTimer(lobbyTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isSearching, lobbyTimer]);

  useEffect(() => {
    if (isSearching) {
      const playerCount = selectedMode === 'solo' ? 99 : selectedMode === 'duo' ? 49 : 24;
      const interval = setInterval(() => {
        const currentCount = Math.min(Math.floor((30 - lobbyTimer) * (playerCount / 30)), playerCount);
        setFoundPlayers(generateRandomPlayers(Math.min(currentCount, 12)));
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setFoundPlayers([]);
    }
  }, [isSearching, lobbyTimer, selectedMode]);

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
            onClick={() => setCurrentSection('lobby')}
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
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button 
              variant="outline"
              className="h-12 border-purple/50 hover:border-purple hover:bg-purple/10"
              onClick={() => setCurrentSection('achievements')}
            >
              <Icon name="Award" className="mr-2" size={20} />
              Достижения
            </Button>
            <Button 
              variant="outline"
              className="h-12 border-muted/50 hover:border-muted hover:bg-muted/10"
              onClick={() => setCurrentSection('settings')}
            >
              <Icon name="Settings" className="mr-2" size={20} />
              Настройки
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

  const Lobby = () => (
    <div className="min-h-screen p-6 space-y-6 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => {
          setIsSearching(false);
          setLobbyTimer(30);
          setCurrentSection('menu');
        }}
        className="mb-4"
      >
        <Icon name="ArrowLeft" className="mr-2" size={20} />
        Назад
      </Button>

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Лобби</h2>
        <p className="text-muted-foreground">Выберите режим игры</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Выберите режим</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card 
              className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                selectedMode === 'solo' ? 'border-2 border-primary bg-primary/10' : 'border border-border'
              }`}
              onClick={() => setSelectedMode('solo')}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">👤</div>
                <div className="font-bold text-xl mb-1">Соло</div>
                <div className="text-sm text-muted-foreground">1 игрок</div>
              </div>
            </Card>

            <Card 
              className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                selectedMode === 'duo' ? 'border-2 border-primary bg-primary/10' : 'border border-border'
              }`}
              onClick={() => setSelectedMode('duo')}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">👥</div>
                <div className="font-bold text-xl mb-1">Дуо</div>
                <div className="text-sm text-muted-foreground">2 игрока</div>
              </div>
            </Card>

            <Card 
              className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                selectedMode === 'squad' ? 'border-2 border-primary bg-primary/10' : 'border border-border'
              }`}
              onClick={() => setSelectedMode('squad')}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">👨‍👩‍👧‍👦</div>
                <div className="font-bold text-xl mb-1">Отряд</div>
                <div className="text-sm text-muted-foreground">4 игрока</div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Выберите карту</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {maps.map((map) => (
              <Card 
                key={map.id}
                className={`cursor-pointer transition-all hover:scale-105 overflow-hidden ${
                  selectedMap === map.id ? 'border-2 border-primary bg-primary/5' : 'border border-border'
                }`}
                onClick={() => setSelectedMap(map.id)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={map.image} 
                    alt={map.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{map.icon}</span>
                      <span className="font-bold text-white text-lg">{map.name}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">{map.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Icon name="Users" size={12} />
                      {map.players}
                    </Badge>
                    <Badge 
                      className={
                        map.difficulty === 'easy' ? 'bg-green-600' :
                        map.difficulty === 'medium' ? 'bg-yellow-600' :
                        'bg-red-600'
                      }
                    >
                      {map.difficulty === 'easy' ? 'Легко' : map.difficulty === 'medium' ? 'Средне' : 'Сложно'}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 border-2 border-primary/30">
          {!isSearching ? (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold">Готовы к бою?</h3>
              <div className="flex items-center justify-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  <span>Режим: {selectedMode === 'solo' ? 'Соло' : selectedMode === 'duo' ? 'Дуо' : 'Отряд'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Map" size={20} />
                  <span>Карта: {maps.find(m => m.id === selectedMap)?.name}</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="h-14 text-lg w-full max-w-md bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
                onClick={() => {
                  setIsSearching(true);
                  setLobbyTimer(30);
                  setFoundPlayers([]);
                }}
              >
                <Icon name="Search" className="mr-2" size={20} />
                Найти игру
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse-glow">⏱️</div>
                <h3 className="text-3xl font-bold">Поиск игры...</h3>
                <div className="text-5xl font-black text-primary mt-2">{lobbyTimer}с</div>
                <Progress value={((30 - lobbyTimer) / 30) * 100} className="h-4 max-w-md mx-auto mt-4" />
                <div className="flex items-center justify-center gap-2 text-muted-foreground mt-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>Игроков найдено: {foundPlayers.length}/{selectedMode === 'solo' ? '100' : selectedMode === 'duo' ? '50' : '25'}</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={16} />
                    {selectedMode === 'solo' ? 'Соло' : selectedMode === 'duo' ? 'Дуо' : 'Отряд'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Map" size={16} />
                    {maps.find(m => m.id === selectedMap)?.icon} {maps.find(m => m.id === selectedMap)?.name}
                  </span>
                </div>
              </div>

              {foundPlayers.length > 0 && (
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-lg font-bold mb-3 text-center">Найденные игроки</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto p-2">
                    {foundPlayers.map((player, index) => (
                      <Card key={index} className="p-3 border border-primary/30 animate-fade-in">
                        <div className="flex items-center gap-2">
                          <div className="text-2xl">{player.avatar}</div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{player.name}</div>
                            <div className="text-xs text-muted-foreground">Lvl {player.level}</div>
                          </div>
                          {player.isReady && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-destructive text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    setIsSearching(false);
                    setLobbyTimer(30);
                    setFoundPlayers([]);
                  }}
                >
                  Отменить поиск
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );

  const Achievements = () => (
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
        <h2 className="text-4xl font-bold mb-2">Достижения</h2>
        <p className="text-muted-foreground">Ваши успехи и прогресс</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id}
            className={`p-6 transition-all ${
              achievement.unlocked 
                ? 'border-2 border-primary/50 bg-primary/5 hover:scale-102' 
                : 'border border-border opacity-60 hover:opacity-100'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`text-5xl ${
                achievement.unlocked ? 'animate-float' : 'grayscale'
              }`}>
                {achievement.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg">{achievement.name}</h3>
                  {achievement.unlocked && (
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс</span>
                    <span className="font-bold">
                      {Math.min(achievement.progress, achievement.total)} / {achievement.total}
                    </span>
                  </div>
                  <Progress 
                    value={(Math.min(achievement.progress, achievement.total) / achievement.total) * 100} 
                    className="h-2" 
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const Settings = () => (
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
        <h2 className="text-4xl font-bold mb-2">Настройки</h2>
        <p className="text-muted-foreground">Персонализируйте игру</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="p-6 border-2 border-primary/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Volume2" size={24} className="text-primary" />
            Звук
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Громкость звуков</label>
                <span className="text-sm text-primary font-bold">{settings.soundVolume}%</span>
              </div>
              <Slider 
                value={[settings.soundVolume]} 
                onValueChange={([value]) => setSettings({...settings, soundVolume: value})}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Громкость музыки</label>
                <span className="text-sm text-primary font-bold">{settings.musicVolume}%</span>
              </div>
              <Slider 
                value={[settings.musicVolume]} 
                onValueChange={([value]) => setSettings({...settings, musicVolume: value})}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-primary/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Monitor" size={24} className="text-accent" />
            Графика
          </h3>
          
          <div className="grid grid-cols-4 gap-2">
            {(['low', 'medium', 'high', 'ultra'] as const).map((quality) => (
              <Button
                key={quality}
                variant={settings.graphics === quality ? 'default' : 'outline'}
                onClick={() => setSettings({...settings, graphics: quality})}
                className={settings.graphics === quality ? 'bg-primary' : ''}
              >
                {quality === 'low' ? 'Низко' : quality === 'medium' ? 'Средне' : quality === 'high' ? 'Высоко' : 'Ультра'}
              </Button>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-2 border-primary/20">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Sliders" size={24} className="text-secondary" />
            Интерфейс
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Показывать FPS</div>
                <div className="text-sm text-muted-foreground">Отображение частоты кадров</div>
              </div>
              <Switch 
                checked={settings.showFPS} 
                onCheckedChange={(checked) => setSettings({...settings, showFPS: checked})}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Вибрация</div>
                <div className="text-sm text-muted-foreground">Тактильная обратная связь</div>
              </div>
              <Switch 
                checked={settings.vibration} 
                onCheckedChange={(checked) => setSettings({...settings, vibration: checked})}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Уведомления</div>
                <div className="text-sm text-muted-foreground">Push-уведомления об игре</div>
              </div>
              <Switch 
                checked={settings.notifications} 
                onCheckedChange={(checked) => setSettings({...settings, notifications: checked})}
              />
            </div>
          </div>
        </Card>
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
      {currentSection === 'lobby' && <Lobby />}
      {currentSection === 'achievements' && <Achievements />}
      {currentSection === 'settings' && <Settings />}
    </div>
  );
};

export default Index;