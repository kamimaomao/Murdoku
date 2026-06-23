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
  briefing: '案件简报',
  board: '犯罪棋盘',
  clues: '当前嫌疑人线索',
  suspects: '嫌疑人',
  closed: '已结案',
  selectedSuspect: '已选择嫌疑人',
  noSuspectSelected: '未选择嫌疑人',
  chooseSuspect: '选择嫌疑人',
  chooseHint: '选择嫌疑人，然后点击格子。',
  placed: '已放置',
  undo: '撤销',
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
  'Back Yard': '后院',
  Bank: '银行',
  Bedroom: '卧室',
  Canyon: '峡谷',
  Chapel: '礼拜堂',
  Clearing: '空地',
  Desert: '沙漠',
  'Discussion Circle': '讨论圈',
  'East Court': '东庭院',
  Entrance: '入口',
  'Front Yard': '前院',
  'General Store': '杂货店',
  'Grazing Pasture': '放牧场',
  Kitchen: '厨房',
  Library: '图书馆',
  'Living Room': '客厅',
  Outside: '室外',
  "Pastor's House": '牧师屋',
  Path: '小径',
  Porch: '门廊',
  Preparation: '备货区',
  Refreshments: '茶点区',
  Restroom: '洗手间',
  Sand: '沙地',
  Shack: '棚屋',
  Stable: '马厩',
  Storage: '储藏室',
  'Store Floor': '店面',
  Tavern: '酒馆',
  'Tent A': '帐篷 A',
  'Tent B': '帐篷 B',
  'Tent C': '帐篷 C',
  'The Barrels': '木桶区',
  'The Desert': '沙漠区',
  'The Island': '岛上',
  'Tool Shed': '工具棚',
  'Training Ring': '训练场',
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
  Table: '桌子',
  'Table / Carpet': '桌子 / 地毯',
  Television: '电视',
  Tree: '树'
};

const cases: Record<string, { title: string; intro: string; clues: Record<string, string[]> }> = {
  'case-01': {
    title: '无名之马',
    intro: '嫌疑人中正好有一名法外之徒。法外之徒可能是凶手，也可能不是。法外之徒骑在马上。',
    clues: {
      'a-aldous': ['他在一株仙人掌旁边。'],
      'b-blanche': ['她不在沙漠。她和 Aldous 在同一条对角线上。'],
      'c-cornelius': ['他在 Aldous 的北边。'],
      'd-dahlia': ['她在桌子旁边。'],
      'e-emeric': ['他在一块巨石旁边。'],
      'f-vin': ['受害者。不是法外之徒。他和凶手单独在一起。']
    }
  },
  'case-02': {
    title: '边境小镇',
    intro: '嫌疑人中正好有一名法外之徒。法外之徒可能是凶手，也可能不是。法外之徒在一张桌子旁边。',
    clues: {
      'a-abigail': ['她在一台收银机旁边。'],
      'b-bessie': ['她在自己区域的一个角落。'],
      'c-curtis': ['他坐在一把椅子上。'],
      'd-duke': ['不是法外之徒。他在一把椅子旁边。'],
      'e-etta': ['她在银行里。'],
      'f-frank': ['他骑在马上。'],
      'g-garrett': ['他在一株仙人掌旁边。'],
      'h-hazel': ['她坐在一把椅子上。她和法外之徒在一起。'],
      'i-ivy': ['她在 Hazel 的南边，并且在不同区域。'],
      'j-virgil': ['受害者。不是法外之徒。他和凶手单独在一起。']
    }
  },
  'case-03': {
    title: '偏远村庄',
    intro: '正好有一个人坐在椅子上。',
    clues: {
      'a-arnold': ['在他正南一行的汽车里有一名女性。'],
      'b-bruce': ['他在一棵树旁边。'],
      'c-connor': ['他在 Ethan 的北边。'],
      'd-delilah': ['她所在区域里没有男性。'],
      'e-ethan': ['他所在区域里至少有一名女性。'],
      'f-fern': ['她在地毯上。'],
      'g-graham': ['他在第五列。'],
      'h-hedda': ['她在一丛灌木旁边。'],
      'i-vaughn': ['受害者。他和凶手单独在一起。']
    }
  },
  'case-04': {
    title: '迷你高尔夫',
    intro: '正好有一个人在桌子旁边。正好有一个人在木桶旁边。',
    clues: {
      'a-albert': ['他在某个站在旗帜上的人正南一行。'],
      'b-burma': ['她坐在一把椅子上。'],
      'c-craig': ['他不在角落。'],
      'd-duncan': ['他是唯一一个站在小径格子上的人。'],
      'e-elyana': ['她在沙地格子上。'],
      'f-faith': ['她独自一人。'],
      'g-ginny': ['她在最上面一行。'],
      'h-hugo': ['他在一些鲜花旁边。'],
      'i-idril': ['她在沙漠区，并且和某个人单独在一起。'],
      'j-valeria': ['受害者。她和凶手单独在一起。']
    }
  },
  'case-05': {
    title: '灰熊之夜',
    intro: '正好有一个人在地毯上。',
    clues: {
      'a-alicia': ['她在帐篷 A 或帐篷 C。'],
      'b-brenda': ['她不在地毯上。她在最上面一行或最下面一行。'],
      'c-clark': ['他是唯一一个在灌木旁边的人。'],
      'd-dylan': ['他在床上。'],
      'e-ezequiel': ['他是唯一一个在汽车里的人。'],
      'f-florence': ['她在最后一列。她在 Clark 的南边。'],
      'g-george': ['他坐在一把椅子上。'],
      'h-holden': ['他在树林里。另一个人在熊旁边。'],
      'i-victor': ['受害者。他和凶手单独在一起。']
    }
  },
  'case-06': {
    title: '读书会',
    intro: '根据案件线索，把所有嫌疑人放进读书会场景。',
    clues: {
      'a-ada': ['她在一株植物旁边。'],
      'b-brigitte': ['她在 Cameron 的南边。'],
      'c-cameron': ['她在地毯上。'],
      'd-darlene': ['她是唯一一个坐在椅子上的人。'],
      'e-edison': ['他在图书馆里。他不在书架旁边。'],
      'f-vinita': ['受害者。她和凶手单独在一起。']
    }
  },
  'case-07': {
    title: '花店',
    intro: '根据案件线索，把所有嫌疑人放进花店场景。',
    clues: {
      'a-amir': ['他在盆景旁边。'],
      'b-bianca': ['她在备货区。'],
      'c-carly': ['她在地毯上。'],
      'd-diane': ['她坐在一把椅子上。'],
      'e-emmett': ['他在第一列。'],
      'f-felicia': ['她在店面。她所在区域里有一名男性。'],
      'g-vickie': ['受害者。她和凶手单独在一起。']
    }
  },
  'case-08': {
    title: '一团糟',
    intro: '没有空区域。',
    clues: {
      'a-abigail': ['她独自一人。'],
      'b-ben': ['他在 Abigail 的东南方，并且在 Hawa 的西北方。'],
      'c-carl': ['他在泥水坑上。'],
      'd-david': ['他和 Carl 单独在一起。'],
      'e-edgar': ['他在一棵树旁边。'],
      'f-france': ['她在泥水坑上。'],
      'g-grace': ['她坐在一把椅子上。她在 France 正北一行。'],
      'h-hawa': ['她不在桌子旁边。'],
      'i-valentino': ['受害者。他和凶手单独在一起。']
    }
  },
  'case-09': {
    title: '骑术课',
    intro: '根据案件线索，把所有嫌疑人放进骑术课场景。',
    clues: {
      'a-ayla': ['她在一丛灌木旁边。'],
      'b-brandon': ['他在桌子旁边。'],
      'c-christa': ['她在某个骑马女性的西边一列。'],
      'd-dolores': ['她在第五列。'],
      'e-evangeline': ['她在马厩里。'],
      'f-finn': ['他在训练场里骑在马上。'],
      'g-gabby': ['她和 Brandon 一起在工具棚里。'],
      'h-heidi': ['她在泥水坑上。'],
      'i-vanessa': ['受害者。她和凶手单独在一起。']
    }
  },
  'case-10': {
    title: '白色婚礼',
    intro: '祭坛上有一名男性和一名女性。',
    clues: {
      'a-archer': ['他在桌子旁边。'],
      'b-brooke': ['她在一些鲜花旁边。'],
      'c-crystal': ['她在第五列。'],
      'd-daisy': ['她在门廊上。'],
      'e-ernie': ['他在 Crystal 的东北方。'],
      'f-finn': ['他在自己区域的一个角落。'],
      'g-giulia': ['她和一个在树旁边的人在一起。'],
      'h-harper': ['她坐在一把椅子上。'],
      'i-vikram': ['受害者。他和凶手单独在一起。']
    }
  }
};

export function caseTitle(caseDef: CaseDefinition): string {
  return cases[caseDef.id]?.title ?? caseDef.title;
}

export function caseIntro(caseDef: CaseDefinition): string {
  return cases[caseDef.id]?.intro ?? caseDef.intro;
}

export function suspectClues(caseId: string, suspect: Suspect): string[] {
  return cases[caseId]?.clues[suspect.id] ?? suspect.clues;
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
