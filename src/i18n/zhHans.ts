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
  hint: '提示',
  chooseSuspectForHint: '先选择一个嫌疑人再看提示。',
  hintConfirmed: '的位置已确认。',
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
    title: '小镇入口',
    intro: '教学关：每一行、每一列最多只能放一名嫌疑人。根据线索把 4 名嫌疑人放进 4x4 棋盘。',
    clues: {
      'a-aldous': ['他在一株仙人掌旁边。'],
      'b-blanche': ['她在第 2 列。'],
      'c-cornelius': ['他在峡谷里。'],
      'd-dahlia': ['她在第 4 行。']
    }
  },
  'case-02': {
    title: '前厅访客',
    intro: '5x5 教学关：继续练习行列排除，并加入相邻物件线索。',
    clues: {
      'a-abigail': ['她在收银台旁边。'],
      'b-bessie': ['她在第 2 行。'],
      'c-curtis': ['他坐在椅子上。'],
      'd-duke': ['他在桌子旁边。'],
      'e-etta': ['她在最后一列。']
    }
  },
  'case-03': {
    title: '图书会',
    intro: '6x6 入门关：棋盘变大，但线索仍然直接。',
    clues: {
      'a-arnold': ['他在书架旁边。'],
      'b-bruce': ['他在第 2 列。'],
      'c-connor': ['他在地毯上。'],
      'd-delilah': ['她在茶点区。'],
      'e-ethan': ['他在第 5 行。'],
      'f-fern': ['她在植物旁边。']
    }
  },
  'case-04': {
    title: '花店盘点',
    intro: '6x6 练习关：开始出现更多区域边界，先不用处理特殊身份。',
    clues: {
      'a-albert': ['他在盆景旁边。'],
      'b-burma': ['她在备货区。'],
      'c-craig': ['他在第 3 列。'],
      'd-duncan': ['他坐在椅子上。'],
      'e-elyana': ['她在店面。'],
      'f-faith': ['她在鲜花旁边。']
    }
  },
  'case-05': {
    title: '马厩疑云',
    intro: '本关首次引入法外之徒：法外之徒是一名特殊身份的人；他可能是凶手，也可能不是。线索会告诉你法外之徒相关条件。',
    clues: {
      'a-alicia': ['她在灌木旁边。'],
      'b-brenda': ['她在第 2 列。'],
      'c-clark': ['他坐在椅子上。'],
      'd-dylan': ['他是法外之徒；法外之徒在马旁边。'],
      'e-ezequiel': ['他在第 5 行。'],
      'f-florence': ['她在树林里。']
    }
  },
  'case-06': {
    title: '市场角落',
    intro: '第 6 关开始进入 7x7：人数增加，但仍然用明确的区域和物件线索推进。',
    clues: {
      'a-abigail': ['她在收银机旁边。'],
      'b-bessie': ['她在第 2 行。'],
      'c-curtis': ['他坐在椅子上。'],
      'd-duke': ['他在桌子旁边。'],
      'e-etta': ['她在储藏室。'],
      'f-frank': ['他在保险箱旁边。'],
      'g-garrett': ['他在木桶旁边。']
    }
  },
  'case-07': {
    title: '温室小径',
    intro: '7x7 进阶关：物件更多，开始要求你结合区域和行列排除。',
    clues: {
      'a-amir': ['他在盆景旁边。'],
      'b-bianca': ['她在备货区。'],
      'c-carly': ['她在植物旁边。'],
      'd-diane': ['她在地毯上。'],
      'e-emmett': ['他坐在椅子上。'],
      'f-felicia': ['她在桌子旁边。'],
      'g-vickie': ['她在书架旁边。']
    }
  },
  'case-08': {
    title: '高尔夫后九洞',
    intro: '第一个 8x8 关卡：格子更多，提示功能可以用来确认一个关键人物。',
    clues: {
      'a-albert': ['他在仙人掌旁边。'],
      'b-burma': ['她在旗帜旁边。'],
      'c-craig': ['他坐在椅子上。'],
      'd-duncan': ['他在鲜花旁边。'],
      'e-elyana': ['她在木桶旁边。'],
      'f-faith': ['她在桌子旁边。'],
      'g-ginny': ['她在碎石旁边。'],
      'h-hugo': ['他在树旁边。']
    }
  },
  'case-09': {
    title: '营地收拾',
    intro: '第二个 8x8 关卡：帐篷、树林和物件线索混合出现。',
    clues: {
      'a-abigail': ['她在熊旁边。'],
      'b-ben': ['他在床旁边。'],
      'c-carl': ['他在泥水坑上。'],
      'd-david': ['他在汽车旁边。'],
      'e-edgar': ['他在灌木旁边。'],
      'f-france': ['她坐在椅子上。'],
      'g-grace': ['她在桌子旁边。'],
      'h-hawa': ['她在树旁边。']
    }
  },
  'case-10': {
    title: '婚礼大厅',
    intro: '9x9 终局关：人数和空间都更大，需要综合使用已学规则。',
    clues: {
      'a-archer': ['他在鲜花旁边。'],
      'b-brooke': ['她坐在椅子上。'],
      'c-crystal': ['她在桌子旁边。'],
      'd-daisy': ['她在植物旁边。'],
      'e-ernie': ['他在地毯上。'],
      'f-finn': ['他在书架旁边。'],
      'g-giulia': ['她在树旁边。'],
      'h-harper': ['她在桌子和地毯旁边。'],
      'i-vikram': ['他在巨石旁边。']
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
