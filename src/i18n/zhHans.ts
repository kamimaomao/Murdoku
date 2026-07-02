import type { CaseDefinition, Suspect, ValidationIssue } from '../game/types';

export const difficultyLabels: Record<CaseDefinition['difficulty'], string> = {
  'very-easy': '非常简单',
  easy: '简单',
  medium: '中等',
  hard: '困难',
  expert: '专家'
};

export const uiText = {
  appLabel: 'Murdoku 移动端',
  caseProgress: '案件进度',
  cases: '案件列表',
  casePicker: '选择关卡',
  openCases: '关卡',
  close: '关闭',
  currentCase: '当前关卡',
  briefing: '案件简报',
  board: '犯罪棋盘',
  clues: '当前嫌疑人线索',
  suspects: '嫌疑人',
  closed: '已结案',
  selectedSuspect: '已选择嫌疑人',
  noSuspectSelected: '未选择嫌疑人',
  chooseSuspect: '选择嫌疑人',
  chooseHint: '选择嫌疑人，然后点击格子。',
  moveHint: '已选中，点击目标格移动。',
  moved: '已移动。',
  coreRule: '规则：每一行、每一列只能放一个角色。',
  placed: '已放置',
  undo: '撤销',
  hint: '提示',
  answer: '答案',
  chooseSuspectForHint: '先选择一个嫌疑人再看提示。',
  hintConfirmed: '的位置已确认。',
  answerRevealed: '答案已显示。',
  accuse: '结案',
  modeSuffix: '模式',
  caseClosed: '案件已结。',
  murdererPrefix: '凶手是',
  unsupportedAccusation: '证据不支持这次指认。'
};

export const toolLabels = {
  place: '放置',
  x: '标记不可用',
  erase: '擦除'
};

export const rooms: Record<string, string> = {
  Altar: '祭坛',
  'Abtract Art': '抽象艺术区',
  'Back Yard': '后院',
  Bank: '银行',
  Bathroom: '浴室',
  Beach: '海滩',
  Bedroom: '卧室',
  Canyon: '峡谷',
  Cabin: '小屋',
  Cafe: '咖啡厅',
  'Changing Room': '更衣室',
  Chapel: '礼拜堂',
  Clearing: '空地',
  Desert: '沙漠',
  'Dining Room': '餐厅',
  'Discussion Circle': '讨论圈',
  'East Court': '东庭院',
  Entrance: '入口',
  Exposition: '展厅',
  'Forest (East)': '东侧森林',
  'Forest (West)': '西侧森林',
  'Front Yard': '前院',
  'General Store': '杂货店',
  'Guest Bedroom': '客房',
  'Grazing Pasture': '放牧场',
  Kitchen: '厨房',
  Lake: '湖面',
  "Lifeguard's Tower": '救生员塔',
  Library: '图书馆',
  'Living Room': '客厅',
  Lobby: '大厅',
  'Main Bedroom': '主卧室',
  'Main Gallery': '主画廊',
  Outside: '室外',
  "Pastor's House": '牧师屋',
  Path: '小径',
  Porch: '门廊',
  Preparation: '备货区',
  Reception: '前台',
  Refreshments: '茶点区',
  Restroom: '洗手间',
  Sand: '沙地',
  Sea: '海域',
  Security: '安保室',
  Shack: '棚屋',
  Shed: '棚屋',
  Stable: '马厩',
  Storage: '储藏室',
  'Store Floor': '店面',
  Tavern: '酒馆',
  'Tent A': '帐篷甲',
  'Tent B': '帐篷乙',
  'Tent C': '帐篷丙',
  'The Barrels': '木桶区',
  'The Desert': '沙漠区',
  'The Island': '岛上',
  'Tool Shed': '工具棚',
  'Training Ring': '训练场',
  Vault: '保险库',
  Walkway: '走道',
  Water: '水域',
  'West Court': '西庭院',
  Woods: '树林',
  cashier: '收银台'
};

export const objects: Record<string, string> = {
  Barrel: '木桶',
  Bear: '熊',
  Bed: '床',
  Boulder: '巨石',
  Box: '箱子',
  Bush: '灌木',
  Cactus: '仙人掌',
  Car: '汽车',
  Carpet: '地毯',
  Chair: '椅子',
  Crate: '木箱',
  Flowers: '鲜花',
  Horse: '马',
  'Object 33': '空物件',
  'Object 44': '盆景',
  'Object 58': '旗帜',
  Plant: '植物',
  Puddle: '水坑',
  Register: '收银机',
  Rubble: '碎石',
  Sack: '麻袋',
  Safe: '保险箱',
  Shelf: '书架',
  Statue: '雕像',
  Table: '桌子',
  'Table / Carpet': '桌子 / 地毯',
  Television: '电视',
  Tree: '树'
};

const cases: Record<string, { title: string; intro: string; clues: Record<string, string[]> }> = {
  'case-01': {
    title: '小镇入口',
    intro: '教学关：每一行、每一列最多只能放一名嫌疑人。根据线索把 4 名嫌疑人放进 4x4 棋盘。',
    clues: {
      'a-aldous': ['他在仙人掌格。'],
      'b-blanche': ['她在第 4 列。'],
      'c-cornelius': ['他在棚屋里。'],
      'd-dahlia': ['她在第 4 行。']
    }
  },
  'case-02': {
    title: '前厅访客',
    intro: '5x5 教学关：继续练习行列排除，并加入相邻物件线索。',
    clues: {
      'a-abigail': ['她在收银机格。'],
      'b-bessie': ['她在第 2 行。'],
      'c-curtis': ['他在椅子格。'],
      'd-duke': ['他在桌子格。'],
      'e-etta': ['她在第 5 行。']
    }
  },
  'case-03': {
    title: '图书会',
    intro: '6x6 入门关：棋盘变大，但线索仍然直接。',
    clues: {
      'a-arnold': ['他在书架格。'],
      'b-bruce': ['他在第 3 列。'],
      'c-connor': ['他在地毯格。'],
      'd-delilah': ['她在茶点区。'],
      'e-ethan': ['他在第 5 行。'],
      'f-fern': ['她在桌子格。']
    }
  },
  'case-04': {
    title: '花店盘点',
    intro: '6x6 练习关：开始出现更多区域边界，先不用处理特殊身份。',
    clues: {
      'a-albert': ['他在鲜花格。'],
      'b-burma': ['她在备货区。'],
      'c-craig': ['他在第 1 列。'],
      'd-duncan': ['他在椅子格。'],
      'e-elyana': ['她在茶点区。'],
      'f-faith': ['她在书架格。']
    }
  },
  'case-05': {
    title: '马厩疑云',
    intro: '本关首次引入法外之徒：法外之徒是一名特殊身份的人；他可能是关键人物，也可能不是。线索会告诉你法外之徒相关条件。',
    clues: {
      'a-alicia': ['她在灌木格。'],
      'b-brenda': ['她在第 6 列。'],
      'c-clark': ['他在椅子格。'],
      'd-dylan': ['他是法外之徒；法外之徒在水坑格。'],
      'e-ezequiel': ['他在第 5 行。'],
      'f-florence': ['她在工具棚里。']
    }
  },
  'case-06': {
    title: '无名之马',
    intro: '从本关开始接入原版关卡，房间形状和物件分布会更接近原作。',
    clues: {}
  },
  'case-07': {
    title: '边境小镇',
    intro: '原版高难关：区域边界更自然，线索组合更复杂。',
    clues: {}
  },
  'case-08': {
    title: '偏远村庄',
    intro: '原版高难关：结合人物关系、房间限制和格子物件。',
    clues: {}
  },
  'case-09': {
    title: '迷你高尔夫',
    intro: '原版高难关：地块不再规则分区，推理空间更开阔。',
    clues: {}
  },
  'case-10': {
    title: '灰熊之夜',
    intro: '原版高难关：帐篷、树林和物件线索混合出现。',
    clues: {}
  },
  'case-11': {
    title: '图书会',
    intro: '原版非常简单关：重新熟悉原版房间和物件表达。',
    clues: {}
  },
  'case-12': {
    title: '花店',
    intro: '原版简单关：区域和物件分布更接近原作。',
    clues: {}
  },
  'case-13': {
    title: '一团糟',
    intro: '原版高难关：更多人物与更复杂的空间条件。',
    clues: {}
  },
  'case-14': {
    title: '骑术课',
    intro: '原版简单关：马、帐篷、树林等物件和区域混合出现。',
    clues: {}
  },
  'case-15': {
    title: '白色婚礼',
    intro: '原版中等关：礼拜堂和庭院形成更自然的空间形状。',
    clues: {}
  },
  'case-16': {
    title: '海滩',
    intro: '原版简单关：海滩、海域和更衣室构成新的场景。',
    clues: {}
  },
  'case-17': {
    title: '地狱厨房',
    intro: '原版中等关：厨房、餐厅和前台组成更密集的空间。',
    clues: {}
  },
  'case-18': {
    title: '湖畔小屋',
    intro: '原版中等关：湖面、小屋和森林区域混合。',
    clues: {}
  },
  'case-19': {
    title: '意外的访客',
    intro: '原版中等关：房间式布局更接近原作视觉。',
    clues: {}
  },
  'case-20': {
    title: '废弃的博物馆',
    intro: '原版高难关：博物馆空间更碎片化，线索密度更高。',
    clues: {}
  }
};

export function caseTitle(caseDef: CaseDefinition): string {
  return cases[caseDef.id]?.title ?? caseDef.title;
}

export function caseIntro(caseDef: CaseDefinition): string {
  return cases[caseDef.id]?.intro ?? caseDef.intro;
}

function pronounText(text: string): string {
  return /^She\b/i.test(text) ? '她' : /^He\b/i.test(text) ? '他' : '';
}

function areaText(pronoun: string): string {
  return /^her$/i.test(pronoun) ? '她所在区域' : '他所在区域';
}

function normalizeEnglishTerm(term: string): string {
  return term
    .toLowerCase()
    .replace(/\b(a|an|the|some)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function objectTerm(term: string): string {
  const normalized = normalizeEnglishTerm(term)
    .replace('cash register', 'register')
    .replace('mud puddle', 'puddle')
    .replace('tv', 'television')
    .replace('shrub', 'bush')
    .replace('bonsai', 'object 44')
    .replace('flag', 'object 58')
    .replace('table and carpet', 'table / carpet');
  const objectKey = Object.keys(objects).find((key) => normalizeEnglishTerm(key) === normalized);
  return objectKey ? objects[objectKey] : term.trim();
}

function exactRoomTerm(term: string): string | undefined {
  const trimmed = term.trim();
  const exactKey = Object.keys(rooms).find((key) => key.toLowerCase() === trimmed.toLowerCase());
  if (exactKey) return rooms[exactKey];

  const withoutArticle = trimmed.replace(/^(a|an|the)\s+/i, '');
  const articleKey = Object.keys(rooms).find((key) => key.toLowerCase() === withoutArticle.toLowerCase());
  if (articleKey) return rooms[articleKey];

  const withoutArea = withoutArticle.replace(/\s+area$/i, '');
  const areaKey = Object.keys(rooms).find((key) => key.toLowerCase() === withoutArea.toLowerCase());
  if (areaKey) return rooms[areaKey];

  return undefined;
}

function roomTerm(term: string): string {
  const exact = exactRoomTerm(term);
  if (exact) return exact;

  const normalized = normalizeEnglishTerm(term);
  const roomKey = Object.keys(rooms).find((key) => normalizeEnglishTerm(key) === normalized);
  return roomKey ? rooms[roomKey] : term.trim();
}

function gridPlacementTerm(term: string): string {
  const normalized = normalizeEnglishTerm(term);
  if (normalized === 'path square') return `${rooms.Path}格`;
  if (normalized === 'sand tile') return `${rooms.Sand}格`;

  const room = exactRoomTerm(term);
  if (room) return room;

  return `${objectTerm(term)}格`;
}

const ordinalNumbers: Record<string, number> = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9
};

const directions: Record<string, string> = {
  north: '上方区域',
  south: '下方区域',
  east: '右侧区域',
  west: '左侧区域',
  northeast: '右上方区域',
  northwest: '左上方区域',
  southeast: '右下方区域',
  southwest: '左下方区域',
  above: '上方区域',
  below: '下方区域'
};

const exactDirections: Record<string, string> = {
  north: '上方',
  south: '下方',
  east: '右侧',
  west: '左侧',
  above: '上方',
  below: '下方'
};

function directionText(direction: string): string {
  return directions[direction.toLowerCase()] ?? direction;
}

function rowOrColumnText(kind: string, direction: string): string {
  const axis = kind.toLowerCase() === 'row' ? '一行' : '一列';
  return `正${exactDirections[direction.toLowerCase()] ?? direction}${axis}`;
}

function translateObjectGridSentence(sentence: string): string | undefined {
  const besideMatch = sentence.match(/^(He|She) was beside (?:a |an |the |some )?(.+)$/i);
  if (besideMatch) return `${pronounText(sentence)}靠近${objectTerm(besideMatch[2])}。`;

  const byMatch = sentence.match(/^(He|She) was (?:by|on|at) (?:a |an |the |some )?(.+)$/i);
  if (byMatch) return `${pronounText(sentence)}在${gridPlacementTerm(byMatch[2])}。`;

  const sittingInRoomMatch = sentence.match(/^(He|She) was sitting (?:in|on) (?:a |an |the )?(.+) in (?:the )?(.+)$/i);
  if (sittingInRoomMatch) {
    return `${pronounText(sentence)}在${roomTerm(sittingInRoomMatch[3])}的${gridPlacementTerm(sittingInRoomMatch[2])}。`;
  }

  const sittingMatch = sentence.match(/^(He|She) was sitting (?:in|on) (?:a |an |the )?(.+)$/i);
  if (sittingMatch) return `${pronounText(sentence)}在${gridPlacementTerm(sittingMatch[2])}。`;

  const notSittingMatch = sentence.match(/^(He|She) was not sitting (?:in|on) (?:a |an |the )?(.+)$/i);
  if (notSittingMatch) return `${pronounText(sentence)}不在${gridPlacementTerm(notSittingMatch[2])}。`;

  const notBesideOnlyMatch = sentence.match(/^(He|She) was not beside (?:a |an |the |some )?(.+)$/i);
  if (notBesideOnlyMatch) return `${pronounText(sentence)}不靠近${objectTerm(notBesideOnlyMatch[2])}。`;

  const notBesideMatch = sentence.match(/^(He|She) was not (?:by|on|at) (?:a |an |the |some )?(.+)$/i);
  if (notBesideMatch) return `${pronounText(sentence)}不在${gridPlacementTerm(notBesideMatch[2])}。`;

  const onlyBesideMatch = sentence.match(/^(He|She) was the only person beside (?:a |an |the |some )?(.+)$/i);
  if (onlyBesideMatch) return `${pronounText(sentence)}是唯一靠近${objectTerm(onlyBesideMatch[2])}的人。`;

  const onlyPersonMatch = sentence.match(/^(He|She) was the only person (?:by|in|on|at|sitting in|sitting on) (?:a |an |the |some )?(.+)$/i);
  if (onlyPersonMatch) return `${pronounText(sentence)}是唯一在${gridPlacementTerm(onlyPersonMatch[2])}的人。`;

  return undefined;
}

function translateSimpleClueSentence(sentence: string): string {
  const clean = sentence.replace(/\s+/g, ' ').trim().replace(/\.$/, '');
  if (!clean) return '';

  if (/^The Victim$/i.test(clean)) return '受害者。';
  if (/^Not the outlaw$/i.test(clean)) return '不是法外之徒。';
  if (/^The Victim\.? Not the outlaw$/i.test(clean)) return '受害者。不是法外之徒。';
  if (/^(He|She) is in the last remaining position$/i.test(clean)) return `${pronounText(clean)}在最后剩下的位置。`;

  const objectGrid = translateObjectGridSentence(clean);
  if (objectGrid) return objectGrid;

  const columnMatch = clean.match(/^(He|She) was in the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|last) column$/i);
  if (columnMatch) {
    return columnMatch[2].toLowerCase() === 'last'
      ? `${pronounText(clean)}在最后一列。`
      : `${pronounText(clean)}在第 ${ordinalNumbers[columnMatch[2].toLowerCase()]} 列。`;
  }

  const rowMatch = clean.match(/^(He|She) was in the (top|bottom|first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|last) row$/i);
  if (rowMatch) {
    const row = rowMatch[2].toLowerCase();
    if (row === 'top' || row === 'first') return `${pronounText(clean)}在第 1 行。`;
    if (row === 'bottom' || row === 'last') return `${pronounText(clean)}在最后一行。`;
    return `${pronounText(clean)}在第 ${ordinalNumbers[row]} 行。`;
  }

  if (/^(He|She) was in the top or in the bottom row$/i.test(clean)) {
    return `${pronounText(clean)}在最上行或最下行。`;
  }

  if (/^(He|She) was in a corner of (?:his|her) area$/i.test(clean)) {
    return `${pronounText(clean)}在自己区域的角落。`;
  }

  if (/^(He|She) was not in a corner$/i.test(clean)) return `${pronounText(clean)}不在角落。`;

  const sameDiagonalMatch = clean.match(/^(He|She) was in the same diagonal as (.+)$/i);
  if (sameDiagonalMatch) return `${pronounText(clean)}和 ${sameDiagonalMatch[2]} 在同一条对角线上。`;

  const exactOffsetMatch = clean.match(/^(He|She) was exactly one (row|column) (north|south|east|west|above|below) of (.+)$/i);
  if (exactOffsetMatch) {
    return `${pronounText(clean)}在 ${exactOffsetMatch[4]} 的${rowOrColumnText(exactOffsetMatch[2], exactOffsetMatch[3])}。`;
  }

  const exactAboveBelowMatch = clean.match(/^(He|She) was exactly one (row|column) (above|below) (.+)$/i);
  if (exactAboveBelowMatch) {
    return `${pronounText(clean)}在 ${exactAboveBelowMatch[4]} 的${rowOrColumnText(exactAboveBelowMatch[2], exactAboveBelowMatch[3])}。`;
  }

  const personOnObjectOffsetMatch = clean.match(/^(He|She) was (?:exactly )?one (row|column) (north|south|east|west|above|below) of someone (?:by|on|at|sitting in|sitting on) (?:a |an |the |some )?(.+)$/i);
  if (personOnObjectOffsetMatch) {
    return `${pronounText(clean)}在某个在${gridPlacementTerm(personOnObjectOffsetMatch[4])}的人物的${rowOrColumnText(personOnObjectOffsetMatch[2], personOnObjectOffsetMatch[3])}。`;
  }

  const womanOnObjectOffsetMatch = clean.match(/^(He|She) was (?:exactly )?one (row|column) (north|south|east|west|above|below) of a woman (?:by|on|at|sitting in|sitting on) (?:a |an |the |some )?(.+)$/i);
  if (womanOnObjectOffsetMatch) {
    return `${pronounText(clean)}在某名在${gridPlacementTerm(womanOnObjectOffsetMatch[4])}的女性的${rowOrColumnText(womanOnObjectOffsetMatch[2], womanOnObjectOffsetMatch[3])}。`;
  }

  const compoundDirectionMatch = clean.match(/^(He|She) was (north|south|east|west|northeast|northwest|southeast|southwest) of ([^,]+?)(?:, in a different area)? and (north|south|east|west|northeast|northwest|southeast|southwest) of (.+)$/i);
  if (compoundDirectionMatch) {
    return `${pronounText(clean)}在 ${compoundDirectionMatch[3]} 的${directionText(compoundDirectionMatch[2])}，且在 ${compoundDirectionMatch[5]} 的${directionText(compoundDirectionMatch[4])}。`;
  }

  const directionMatch = clean.match(/^(He|She) was (north|south|east|west|northeast|northwest|southeast|southwest) of ([^,]+)(?:, in a different area)?$/i);
  if (directionMatch) {
    const differentArea = /different area$/i.test(clean) ? '，且不在同一区域' : '';
    return `${pronounText(clean)}在 ${directionMatch[3]} 的${directionText(directionMatch[2])}${differentArea}。`;
  }

  const aloneWithMatch = clean.match(/^(He|She) was alone with (.+)$/i);
  if (aloneWithMatch) {
    const normalized = normalizeEnglishTerm(aloneWithMatch[2]);
    const companion = normalized === 'murderer' ? '凶手' : normalized === 'man' ? '一名男性' : aloneWithMatch[2];
    return `${pronounText(clean)}和${companion}独处。`;
  }

  const aloneInRoomMatch = clean.match(/^(He|She) was alone (?:in|inside|on) (?:the )?(.+)$/i);
  if (aloneInRoomMatch) return `${pronounText(clean)}独自在${roomTerm(aloneInRoomMatch[2])}。`;

  const roomAloneWithWomanMatch = clean.match(/^(He|She) was in (?:the )?(.+) alone with another woman$/i);
  if (roomAloneWithWomanMatch) return `${pronounText(clean)}在${roomTerm(roomAloneWithWomanMatch[2])}，和另一名女性独处。`;

  const aloneOnRoomWithSomeoneMatch = clean.match(/^(He|She) was alone on (.+) with someone$/i);
  if (aloneOnRoomWithSomeoneMatch) return `${pronounText(clean)}和另一人在${roomTerm(aloneOnRoomWithSomeoneMatch[2])}独处。`;

  if (/^(He|She) was alone$/i.test(clean)) return `${pronounText(clean)}独处。`;

  if (/^(He|She) was with the outlaw$/i.test(clean)) return `${pronounText(clean)}和法外之徒在同一区域。`;
  if (/^(He|She) was with someone who was beside a tree$/i.test(clean)) {
    return `${pronounText(clean)}和一名靠近树的人在同一区域。`;
  }

  const inRoomWithPersonMatch = clean.match(/^(He|She) was in (?:the )?(.+) with (.+)$/i);
  if (inRoomWithPersonMatch) {
    return `${pronounText(clean)}和 ${inRoomWithPersonMatch[2]} 在${roomTerm(inRoomWithPersonMatch[1])}。`;
  }

  const someoneElseBesideMatch = clean.match(/^Someone else was beside (?:a |an |the |some )?(.+)$/i);
  if (someoneElseBesideMatch) return `另一个人靠近${objectTerm(someoneElseBesideMatch[1])}。`;

  const someoneDirectionBesideSameMatch = clean.match(/^Someone (north|south|east|west|northeast|northwest|southeast|southwest) of him was beside the same (.+)$/i);
  if (someoneDirectionBesideSameMatch) {
    return `他${directionText(someoneDirectionBesideSameMatch[1])}有人靠近同一个${objectTerm(someoneDirectionBesideSameMatch[2])}。`;
  }

  const thereWomanInCarMatch = clean.match(/^There was a woman inside a car exactly one row (north|south|east|west|above|below) of him$/i);
  if (thereWomanInCarMatch) return `有一名女性在他${rowOrColumnText('row', thereWomanInCarMatch[1])}的汽车格。`;

  const thereNoPersonAreaMatch = clean.match(/^There was no (man|woman) in (his|her) area$/i);
  if (thereNoPersonAreaMatch) {
    const person = thereNoPersonAreaMatch[1].toLowerCase() === 'man' ? '男性' : '女性';
    return `${areaText(thereNoPersonAreaMatch[2])}没有${person}。`;
  }

  const thereAtLeastPersonAreaMatch = clean.match(/^There was at least one (man|woman) in (his|her) area$/i);
  if (thereAtLeastPersonAreaMatch) {
    const person = thereAtLeastPersonAreaMatch[1].toLowerCase() === 'man' ? '男性' : '女性';
    return `${areaText(thereAtLeastPersonAreaMatch[2])}至少有一名${person}。`;
  }

  const therePersonOnObjectAreaMatch = clean.match(/^There was a (man|woman) (?:by|on|at|sitting in|sitting on) (?:a |an |the |some )?(.+) in (his|her) area$/i);
  if (therePersonOnObjectAreaMatch) {
    const person = therePersonOnObjectAreaMatch[1].toLowerCase() === 'man' ? '男性' : '女性';
    return `${areaText(therePersonOnObjectAreaMatch[3])}有一名在${gridPlacementTerm(therePersonOnObjectAreaMatch[2])}的${person}。`;
  }

  const therePersonInAreaMatch = clean.match(/^There was a (man|woman) in (his|her) area$/i);
  if (therePersonInAreaMatch) {
    const person = therePersonInAreaMatch[1].toLowerCase() === 'man' ? '男性' : '女性';
    return `${areaText(therePersonInAreaMatch[2])}有一名${person}。`;
  }

  const eitherBesideMatch = clean.match(/^(He|She) was either beside (?:a |an |the |some )?(.+) or (?:a |an |the |some )?(.+)$/i);
  if (eitherBesideMatch) {
    return `${pronounText(clean)}靠近${objectTerm(eitherBesideMatch[2])}或${objectTerm(eitherBesideMatch[3])}。`;
  }

  const roomOrRoomMatch = clean.match(/^(He|She) was in (.+) or (.+)$/i);
  if (roomOrRoomMatch) return `${pronounText(clean)}在${roomTerm(roomOrRoomMatch[2])}或${roomTerm(roomOrRoomMatch[3])}。`;

  const notRoomMatch = clean.match(/^(He|She) was not (?:in|inside|on) (?:the )?(.+)$/i);
  if (notRoomMatch) return `${pronounText(clean)}不在${roomTerm(notRoomMatch[2])}。`;

  const roomMatch = clean.match(/^(He|She) was (?:in|inside|on) (?:the )?(.+)$/i);
  if (roomMatch) return `${pronounText(clean)}在${roomTerm(roomMatch[2])}。`;

  if (/^The Victim/i.test(clean)) return clean.replace(/^The Victim/i, '受害者') + '。';
  return clean + '。';
}

function translateClue(clue: string): string {
  return clue
    .replace(/\s+/g, ' ')
    .split(/\.\s+/)
    .map(translateSimpleClueSentence)
    .filter(Boolean)
    .join('');
}

export function suspectClues(caseId: string, suspect: Suspect): string[] {
  return cases[caseId]?.clues[suspect.id] ?? suspect.clues.map(translateClue);
}

export function roomName(room: string | undefined): string | undefined {
  return room ? rooms[room] ?? room : undefined;
}

export function objectName(object: string | undefined): string | undefined {
  return object ? objects[object] ?? object : undefined;
}

export function cellLabel(row: number, column: number, suspectName?: string, marked?: boolean): string {
  const parts = [`第 ${row + 1} 行第 ${column + 1} 列`];
  if (suspectName) parts.push(suspectName);
  if (marked) parts.push('已标记');
  return parts.join('，');
}

export function issueText(issue: ValidationIssue | undefined): string {
  if (!issue) return uiText.unsupportedAccusation;
  if (issue.type === 'incomplete') return '提交前需要放置所有嫌疑人。';
  if (issue.type === 'duplicate-suspect') return '每名嫌疑人只能放置一次。';
  if (issue.type === 'duplicate-row') return '每一行只能放置一名嫌疑人。';
  if (issue.type === 'duplicate-column') return '每一列只能放置一名嫌疑人。';
  return '至少有一名嫌疑人的位置与证据冲突。';
}
