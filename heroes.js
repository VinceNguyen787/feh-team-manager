const heroes = {
  abel: {
    name: "Abel",
    epithet: "The Panther",
    image: "/images/hero-portraits/abel.png",
    type: "Blue Lance",
    blueLance: true,
    typeImg: "/images/weapon-icons/blue-lance.png",
    movement: "Cavalry",
    movementImg: "/images/movement-icons/cavalry.png",
    weapon: 8,
    weaponName: "Brave Lance+",
    special: "Aegis",
    skillA: "HP +5",
    skillC: "Swordbreaker 3",
    hp: [35, 39, 42],
    atk: [30, 33, 36],
    spd: [29, 32, 35],
    def: [22, 25, 28],
    res: [22, 25, 29],
    hpMin: [16, 17, 18],
    atkMin: [6, 7, 8],
    spdMin: [7, 8, 9],
    defMin: [7, 8, 9],
    resMin: [5, 6, 7]
  },
  alfonse: {
    name: "Alfonse",
    epithet: "Prince of Askr",
    image: "/images/hero-portraits/alfonse.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "Infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Fólkvangr",
    special: "Sol",
    skillA: "Death Blow 3",
    skillC: "Spur Atk 3",
    hp: [43, 43, 43],
    atk: [35, 35, 35],
    spd: [25, 25, 25],
    def: [32, 32, 32],
    res: [22, 22, 22],
    hpMin: [19, 19, 19],
    atkMin: [9, 9, 9],
    spdMin: [6, 6, 6],
    defMin: [8, 8, 8],
    resMin: [5, 5, 5]
  },
  alm: {
    name: "Alm",
    epithet: "Hero of Prophecy",
    image: "/images/hero-portraits/alm.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "Infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Falchion",
    special: "Draconic Aura",
    skillA: "Attack +3",
    skillB: "Windsweep 3",
    hp: [42, 45, 48],
    atk: [30, 33, 36],
    spd: [27, 30, 33],
    def: [24, 28, 31],
    res: [19, 22, 25],
    hpMin: [20, 21, 22],
    atkMin: [8, 9, 10],
    spdMin: [5, 6, 7],
    defMin: [5, 6, 7],
    resMin: [4, 5, 6]
  },
  amelia: {
    name: "Amelia",
    epithet: "Rose of the War",
    image: "/images/hero-portraits/amelia.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "armored",
    movementImg: "/images/movement-icons/armored.png",
    weapon: 14,
    weaponName: "Slaying Axe+",
    special: "Sacred Cowl",
    skillA: "Earth Boost 3",
    skillC: "Armor March 3",
    hp: [44, 47, 50],
    atk: [31, 34, 37],
    spd: [31, 34, 37],
    def: [32, 35, 38],
    res: [20, 23, 27],
    hpMin: [18, 19, 20],
    atkMin: [5, 6, 7],
    spdMin: [7, 8, 9],
    defMin: [8, 9, 10],
    resMin: [3, 4, 5]
  },
  anna: {
    name: "Anna",
    epithet: "Commander",
    image: "/images/hero-portraits/anna.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "Infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Nóatún",
    special: "Astra",
    skillB: "Vantage 3",
    skillC: "Spur Res 3",
    hp: [41, 41, 41],
    atk: [29, 29, 29],
    spd: [38, 38, 38],
    def: [22, 22, 22],
    res: [28, 28, 28],
    hpMin: [19, 19, 19],
    atkMin: [7, 7, 7],
    spdMin: [10, 10, 10],
    defMin: [5, 5, 5],
    resMin: [6, 6, 6]
  },
  arden: {
    name: "Arden",
    epithet: "Strong and Tough",
    image: "/images/hero-portraits/arden.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "Armored",
    movementImg: "/images/movement-icons/armored.png",
    weapon: 8,
    weaponName: "Brave Sword+",
    special: "Pavise",
    skillB: "Follow-Up Ring",
    skillC: "Drive Def 2",
    hp: [60, 60, 60],
    atk: [36, 36, 36],
    spd: [16, 16, 16],
    def: [41, 41, 41],
    res: [16, 16, 16],
    hpMin: [25, 25, 25],
    atkMin: [10, 10, 10],
    spdMin: [3, 3, 3],
    defMin: [13, 13, 13],
    resMin: [3, 3, 3]
  },
  arthur: {
    name: "Arthur",
    epithet: "Hapless Hero",
    image: "/images/hero-portraits/arthur.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 12,
    weaponName: "Emerald Axe+",
    assist: "Swap",
    skillA: "HP +5",
    skillB: "Lancebreaker 3",
    hp: [40, 43, 46],
    atk: [29, 32, 35],
    spd: [25, 29, 32],
    def: [26, 30, 33],
    res: [21, 24, 28],
    hpMin: [18, 19, 20],
    atkMin: [7, 8, 9],
    spdMin: [6, 7, 8],
    defMin: [7, 8, 9],
    resMin: [4, 5, 6]
  },
  arvis: {
    name: "Arvis",
    epithet: "Emperor of Flame",
    image: "/images/hero-portraits/arvis.png",
    type: "Red Tome",
    typeImg: "/images/weapon-icons/red-tome.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 14,
    weaponName: "Valflame",
    special: "Growing Flame",
    skillB: "Recover Ring",
    skillC: "Def Ploy 3",
    hp: [33, 33, 33],
    atk: [34, 34, 34],
    spd: [31, 31, 31],
    def: [17, 17, 17],
    res: [33, 33, 33],
    hpMin: [18, 18, 18],
    atkMin: [8, 8, 8],
    spdMin: [7, 7, 7],
    defMin: [4, 4, 4],
    resMin: [7, 7, 7]
  },
  athena: {
    name: "Athena",
    epithet: "Borderland Sword",
    image: "/images/hero-portraits/athena.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 13,
    weaponName: "Wo Dao+",
    special: "Moonbow",
    skillA: "Sturdy Blow 2",
    skillC: "Sword Exp. 3",
    hp: [33, 36, 40],
    atk: [28, 31, 34],
    spd: [35, 38, 41],
    def: [24, 27, 28],
    res: [21, 24, 28],
    hpMin: [16, 17, 18],
    atkMin: [6, 7, 8],
    spdMin: [9, 10, 11],
    defMin: [7, 8, 9],
    resMin: [4, 5, 6]
  },
  ayra: {
    name: "Ayra",
    epithet: "Astra's Wielder",
    image: "/images/hero-portraits/ayra.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Ayra's Blade",
    special: "Regnal Astra",
    skillA: "Swift Sparrow 2",
    skillB: "Desperation 3",
    spdBonus: true,
    hp: [37, 41, 44],
    atk: [30, 33, 36],
    spd: [34, 37, 40],
    def: [28, 31, 34],
    res: [18, 21, 24],
    hpMin: [18, 19, 20],
    atkMin: [6, 7, 8],
    spdMin: [10, 11, 12],
    defMin: [6, 7, 8],
    resMin: [3, 4, 5]
  },
  azama: {
    name: "Azama",
    epithet: "Carefree Monk",
    image: "/images/hero-portraits/azama.png",
    type: "Staff",
    typeImg: "/images/weapon-icons/staff.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 10,
    weaponName: "Pain+",
    assist: "Martyr+",
    special: "Solid-Earth Balm",
    skillC: "Threaten Atk 3",
    hp: [40, 43, 46],
    atk: [18, 21, 24],
    spd: [23, 26, 30],
    def: [29, 32, 35],
    res: [22, 25, 29],
    hpMin: [18, 19, 20],
    atkMin: [3, 4, 5],
    spdMin: [6, 7, 8],
    defMin: [7, 8, 9],
    resMin: [5, 6, 7]
  },
  azura: {
    name: "Azura",
    epithet: "Lady of the Lake",
    image: "/images/hero-portraits/azura.png",
    type: "Blue Lance",
    typeImg: "/images/weapon-icons/blue-lance.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 12,
    weaponName: "Sapphire Lance+",
    assist: "Sing",
    skillA: "Speed +3",
    skillC: "Fortify Res 3",
    hp: [33, 36, 40],
    atk: [28, 31, 34],
    spd: [30, 33, 36],
    def: [18, 21, 24],
    res: [24, 28, 31],
    hpMin: [16, 17, 18],
    atkMin: [4, 5, 6],
    spdMin: [6, 7, 8],
    defMin: [3, 4, 5],
    resMin: [5, 6, 7]
  },
  azura_ny: {
    name: "Azura",
    epithet: "Celebratory Spirit",
    image: "/images/hero-portraits/azura_ny.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "flying",
    movementImg: "/images/movement-icons/flying.png",
    weapon: 14,
    weaponName: "Hagoita+",
    assist: "Sing",
    skillB: "Earth Dance 3",
    skillC: "Hone Fliers",
    hp: [33, 37, 40],
    atk: [27, 30, 33],
    spd: [32, 35, 38],
    def: [19, 22, 25],
    res: [22, 26, 29],
    hpMin: [14, 15, 16],
    atkMin: [5, 6, 7],
    spdMin: [8, 9, 10],
    defMin: [4, 5, 6],
    resMin: [3, 4, 5]
  },
  azura_pa: {
    name: "Azura",
    epithet: "Lady of Ballads",
    image: "/images/hero-portraits/azura_pa.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Urðr",
    assist: "Sing",
    skillA: "Triangle Adept 3",
    skillC: "Drive Res 2",
    hp: [32, 35, 39],
    atk: [29, 32, 35],
    spd: [31, 34, 37],
    def: [17, 20, 23],
    res: [24, 28, 31],
    hpMin: [15, 16, 17],
    atkMin: [5, 6, 7],
    spdMin: [7, 8, 9],
    defMin: [2, 3, 4],
    resMin: [5, 6, 7]
  },
  barst: {
    name: "Barst",
    epithet: "The Hatchet",
    image: "/images/hero-portraits/barst.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 8,
    weaponName: "Brave Axe+",
    assist: "Reposition",
    skillB: "Knock Back",
    skillC: "Spur Atk 3",
    hp: [43, 46, 49],
    atk: [30, 33, 36],
    spd: [29, 32, 35],
    def: [27, 30, 33],
    res: [13, 17, 20],
    hpMin: [19, 20, 21],
    atkMin: [8, 9, 10],
    spdMin: [7, 8, 9],
    defMin: [5, 6, 7],
    resMin: [3, 4, 5]
  },
  bartre: {
    name: "Bartre",
    epithet: "Fearless Warrior",
    image: "/images/hero-portraits/bartre.png",
    type: "Green-Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 12,
    weaponName: "Hammer+",
    assist: "Smite",
    skillA: "Fury 3",
    skillB: "Brash Assault 3",
    hp: [46, 49, 52],
    atk: [33, 36, 39],
    spd: [22, 25, 29],
    def: [30, 33, 36],
    res: [10, 13, 17],
    hpMin: [20, 21, 22],
    atkMin: [9, 10, 11],
    spdMin: [5, 6, 7],
    defMin: [6, 7, 8],
    resMin: [2, 3, 4]
  },
  berkut: {
    name: "Berkut",
    epithet: "Prideful Prince",
    image: "/images/hero-portraits/berkut.png",
    type: "Blue Lance",
    typeImg: "/images/weapon-icons/blue-lance.png",
    movement: "cavalry",
    movementImg: "/images/movement-icons/cavalry.png",
    weapon: 14,
    weaponName: "Berkut's Lance",
    speecial: "Blazing Flame",
    skillA: "Water Boost 3",
    skillC: "Ward Cavalry",
    hp: [43, 43, 43],
    atk: [34, 34, 34],
    spd: [22, 22, 22],
    def: [31, 31, 31],
    res: [24, 24, 24],
    hpMin: [19, 19, 19],
    atkMin: [8, 8, 8],
    spdMin: [5, 5, 5],
    defMin: [7, 7, 7],
    resMin: [7, 7, 7]
  },
  beruka: {
    name: "Beruka",
    epithet: "Quiet Assassin",
    image: "/images/hero-portraits/beruka.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "Flying",
    movementImg: "/images/movement-icons/flying.png",
    weapon: 11,
    weaponName: "Killer Axe+",
    special: "Glimmer",
    skillA: "Defiant Def 3",
    skillB: "Lunge",
    hp: [43, 46, 49],
    atk: [25, 29, 32],
    spd: [20, 23, 26],
    def: [34, 37, 40],
    res: [19, 22, 25],
    hpMin: [19, 20, 21],
    atkMin: [6, 7, 8],
    spdMin: [5, 6, 7],
    defMin: [8, 9, 10],
    resMin: [4, 5, 6]
  },
  blackKnight: {
    name: "Black Knight",
    epithet: "Sinister General",
    image: "/images/hero-portraits/blackKnight.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "armored",
    movementImg: "/images/movement-icons/armored.png",
    weapon: 16,
    weaponName: "Alondite",
    special: "Black Luna",
    skillA: "Steady Stance 3",
    skillB: "Wings of Mercy 3",
    hp: [48, 48, 48],
    atk: [34, 34, 34],
    spd: [34, 34, 34],
    def: [35, 35, 35],
    res: [18, 18, 18],
    hpMin: [22, 22, 22],
    atkMin: [10, 10, 10],
    spdMin: [8, 8, 8],
    defMin: [9, 9, 9],
    resMin: [5, 5, 5]
  },
  boey: {
    name: "Boey",
    epithet: "Skillful Survivor",
    image: "/images/hero-portraits/boey.png",
    type: "Green Tome",
    typeImg: "/images/weapon-icons/green-tome.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 10,
    weaponName: "Gronnowl+",
    special: "Ignis",
    skillA: "Earth Boost 3",
    skillB: "Renewal 3",
    hp: [40, 43, 46],
    atk: [25, 29, 32],
    spd: [23, 27, 30],
    def: [29, 32, 35],
    res: [14, 18, 21],
    hpMin: [18, 19, 20],
    atkMin: [6, 7, 8],
    spdMin: [4, 5, 6],
    defMin: [7, 8, 9],
    resMin: [4, 5, 6]
  },
  caeda: {
    name: "Caeda",
    epithet: "Talys's Heart",
    image: "/images/hero-portraits/caeda.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "flying",
    movementImg: "/images/movement-icons/Flying.png",
    weapon: 12,
    weaponName: "Armorslayer+",
    assist: "Rally Speed",
    skillA: "Darting Blow 3",
    skillC: "Fortify Fliers",
    hp: [33, 36, 40],
    atk: [22, 25, 29],
    spd: [34, 37, 40],
    def: [21, 24, 28],
    res: [31, 34, 37],
    hpMin: [16, 17, 18],
    atkMin: [5, 6, 7],
    spdMin: [8, 9, 10],
    defMin: [4, 5, 6],
    resMin: [9, 10, 11]
  },
  caeda_bb: {
    name: "Caeda",
    epithet: "Talys's Bride",
    image: "/images/hero-portraits/caeda_bb.png",
    type: "Blue Tome",
    typeImg: "/images/weapon-icons/blue-tome.png",
    movement: "infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 12,
    weaponName: "Blessed Bouquet+",
    special: "Iceberg",
    skillA: "Attack/Res 2",
    skillC: "Hone Spd 3",
    hp: [30, 33, 36],
    atk: [25, 29, 32],
    spd: [34, 37, 40],
    def: [16, 19, 22],
    res: [26, 30, 33],
    hpMin: [15, 16, 17],
    atkMin: [6, 7, 8],
    spdMin: [8, 9, 10],
    defMin: [3, 4, 5],
    resMin: [7, 8, 9]
  },
  cain: {
    name: "Cain",
    epithet: "The Bull",
    image: "/images/hero-portraits/cain.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "cavalry",
    movementImg: "/images/movement-icons/cavalry.png",
    weapon: 8,
    weaponName: "Brave Sword+",
    special: "Escutcheon",
    skillB: "Wings of Mercy 3",
    skillC: "Threaten Atk 3",
    hp: [39, 42, 45],
    atk: [29, 32, 35],
    spd: [29, 32, 35],
    def: [24, 27, 31],
    res: [18, 21, 24],
    hpMin: [17, 18, 19],
    atkMin: [7, 8, 9],
    spdMin: [5, 6, 7],
    defMin: [7, 8, 9],
    resMin: [5, 6, 7]
  },
  camilla: {
    name: "Camilla",
    epithet: "Bewitching Beauty",
    image: "/images/hero-portraits/camilla.png",
    type: "Green Axe",
    typeImg: "/images/weapon-icons/green-axe.png",
    movement: "flying",
    movementImg: "/images/movement-icons/flying.png",
    weapon: 8,
    weaponName: "Brave Axe+",
    special: "Draconic Aura",
    skillA: "Darting Blow 3",
    skillC: "Savage Blow 3",
    hp: [34, 37, 41],
    atk: [26, 30, 33],
    spd: [29, 32, 35],
    def: [24, 28, 31],
    res: [28, 31, 34],
    hpMin: [17, 18, 19],
    atkMin: [7, 8, 9],
    spdMin: [7, 8, 9],
    defMin: [5, 6, 7],
    resMin: [6, 7, 8]
  },
  camilla_ny: {
    name: "Camilla",
    epithet: "Holiday Traveler",
    image: "/images/hero-portraits/camilla_ny.png",
    type: "Red Sword",
    typeImg: "/images/weapon-icons/red-sword.png",
    movement: "flying",
    movementImg: "/images/movement-icons/flying.png",
    weapon: 14,
    weaponName: "Kadomatsu+",
    special: "Draconic Aura",
    skillA: "Spd/Def Bond 3",
    skillC: "Ward Fliers",
    hp: [36, 40, 43],
    atk: [30, 33, 36],
    spd: [32, 35, 38],
    def: [28, 31, 34],
    res: [20, 23, 27],
    hpMin: [17, 18, 19],
    atkMin: [8, 9, 10],
    spdMin: [8, 9, 10],
    defMin: [6, 7, 8],
    resMin: [3, 4, 5]
  },
  fjorm: {
    name: "Fjorm",
    epithet: "Princess of Ice",
    image: "/images/hero-portraits/fjorm.png",
    type: "Blue Lance",
    typeImg: "/images/weapon-icons/blue-lance.png",
    movement: "Infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Leiptr",
    special: "Ice Mirror",
    skillA: "Atk/Def Bond 3",
    skillB: "Shield Pulse 3",
    skillC: "Drive Atk 2",
    hp: [35, 39, 42],
    atk: [26, 30, 33],
    spd: [28, 31, 34],
    def: [26, 30, 33],
    res: [31, 34, 37],
    hpMin: [16, 17, 18],
    atkMin: [7, 8, 9],
    spdMin: [6, 7, 8],
    defMin: [7, 8, 9],
    resMin: [7, 8, 9]
  },
  sharena: {
    name: "Sharena",
    epithet: "Princess of Askr",
    image: "/images/hero-portraits/sharena.png",
    type: "Blue Lance",
    typeImg: "/images/weapon-icons/blue-lance.png",
    movement: "Infantry",
    movementImg: "/images/movement-icons/infantry.png",
    weapon: 16,
    weaponName: "Fensalir",
    assist: "Rally Attack",
    skillA: "Speed +3",
    skillC: "Fortify Def 3",
    hp: [43, 43, 43],
    atk: [32, 32, 32],
    spd: [32, 32, 32],
    def: [29, 29, 29],
    res: [22, 22, 22],
    hpMin: [19, 19, 19],
    atkMin: [8, 8, 8],
    spdMin: [8, 8, 8],
    defMin: [7, 7, 7],
    resMin: [5, 5, 5]
  }
};

/* 
  : {
    name: "",
    epithet: "",
    image: "/images/hero-portraits/.png",
    type: "",
    typeImg: "/images/weapon-icons/.png",
    movement: "",
    movementImg: "/images/movement-icons/.png",
    weapon: ,
    weaponName: ,
    hp: [],
    atk: [],
    spd: [],
    def: [],
    res: []
    hpMin:[],
    atkMin:[],
    spdMin:[],
    defMin:[],
    resMin:[],
  },
*/

export default heroes;
