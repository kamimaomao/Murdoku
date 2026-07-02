export type PortraitSex = 'male' | 'female';

export interface PortraitAppearance {
  theme: number;
  body: number;
  skincolor: number;
  hair: string;
  haircolor: number;
  facial: string;
  clothes: string;
  clothescolor: number;
  hat: string;
  accessory: string;
}

export interface PortraitDefinition {
  name: string;
  sex: PortraitSex;
  bgColor: string;
  appearance: PortraitAppearance;
}

export interface PortraitLayer {
  key: string;
  src: string;
  zIndex: number;
  tintColor?: string;
  transform?: string;
}

export const portraitDefinitions: Record<string, PortraitDefinition> = {
  "case-01-a-aldous": {
    "name": "Aldous",
    "sex": "male",
    "bgColor": "#ecb998",
    "appearance": {
      "theme": 0,
      "body": 2,
      "skincolor": 2,
      "hair": "00000",
      "haircolor": 6,
      "facial": "00025",
      "clothes": "01003",
      "clothescolor": 17,
      "hat": "00000",
      "accessory": "0"
    }
  },
  "case-01-b-blanche": {
    "name": "Blanche",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "00025",
      "haircolor": 1,
      "facial": "0",
      "clothes": "01001",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-01-c-cornelius": {
    "name": "Cornelius",
    "sex": "male",
    "bgColor": "#e4d695",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "20",
      "haircolor": 7,
      "facial": "00027",
      "clothes": "01002",
      "clothescolor": 17,
      "hat": "01003",
      "accessory": "0"
    }
  },
  "case-01-d-dahlia": {
    "name": "Dahlia",
    "sex": "female",
    "bgColor": "#556D57",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "01005",
      "haircolor": 6,
      "facial": "0",
      "clothes": "01005",
      "clothescolor": 20,
      "hat": "13",
      "accessory": "0"
    }
  },
  "case-01-e-emeric": {
    "name": "Emeric",
    "sex": "male",
    "bgColor": "#825E59",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "00051",
      "haircolor": 4,
      "facial": "2",
      "clothes": "01001",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "10"
    }
  },
  "case-01-f-vin": {
    "name": "Vin",
    "sex": "male",
    "bgColor": "#a86767",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "00000",
      "haircolor": 6,
      "facial": "00021",
      "clothes": "01008",
      "clothescolor": 20,
      "hat": "01005",
      "accessory": "0"
    }
  },
  "case-02-a-abigail": {
    "name": "Abigail",
    "sex": "female",
    "bgColor": "#ebecd0",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "01003",
      "haircolor": 6,
      "facial": "0",
      "clothes": "01003",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-b-bessie": {
    "name": "Bessie",
    "sex": "female",
    "bgColor": "#817355",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "3",
      "haircolor": 4,
      "facial": "0",
      "clothes": "01005",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "7"
    }
  },
  "case-02-c-curtis": {
    "name": "Curtis",
    "sex": "male",
    "bgColor": "#938153",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "00052",
      "haircolor": 14,
      "facial": "00027",
      "clothes": "01001",
      "clothescolor": 20,
      "hat": "01003",
      "accessory": "0"
    }
  },
  "case-02-d-duke": {
    "name": "Duke",
    "sex": "male",
    "bgColor": "#92b1bf",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "00000",
      "haircolor": 12,
      "facial": "00026",
      "clothes": "01006",
      "clothescolor": 19,
      "hat": "01004",
      "accessory": "0"
    }
  },
  "case-02-e-etta": {
    "name": "Etta",
    "sex": "female",
    "bgColor": "#826D54",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "01005",
      "haircolor": 15,
      "facial": "0",
      "clothes": "01001",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-f-frank": {
    "name": "Frank",
    "sex": "male",
    "bgColor": "#945262",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "00046",
      "haircolor": 10,
      "facial": "00020",
      "clothes": "01002",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-g-garrett": {
    "name": "Garrett",
    "sex": "male",
    "bgColor": "#6D6050",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "3",
      "haircolor": 9,
      "facial": "00021",
      "clothes": "01005",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-h-hazel": {
    "name": "Hazel",
    "sex": "female",
    "bgColor": "#92af83",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "01003",
      "haircolor": 5,
      "facial": "0",
      "clothes": "01004",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-i-ivy": {
    "name": "Ivy",
    "sex": "female",
    "bgColor": "#958651",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "01002",
      "haircolor": 14,
      "facial": "0",
      "clothes": "01004",
      "clothescolor": 6,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-02-j-virgil": {
    "name": "Virgil",
    "sex": "male",
    "bgColor": "#b08582",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "00050",
      "haircolor": 6,
      "facial": "00019",
      "clothes": "01008",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-a-arnold": {
    "name": "Arnold",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "23",
      "haircolor": 6,
      "facial": "6",
      "clothes": "13",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-b-bruce": {
    "name": "Bruce",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "20",
      "haircolor": 2,
      "facial": "15",
      "clothes": "17",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-c-connor": {
    "name": "Connor",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 3,
      "skincolor": 0,
      "hair": "25",
      "haircolor": 9,
      "facial": "6",
      "clothes": "13",
      "clothescolor": 11,
      "hat": "8",
      "accessory": "0"
    }
  },
  "case-03-d-delilah": {
    "name": "Delilah",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "13",
      "haircolor": 4,
      "facial": "7",
      "clothes": "13",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-e-ethan": {
    "name": "Ethan",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 0,
      "hair": "28",
      "haircolor": 8,
      "facial": "1",
      "clothes": "22",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-f-fern": {
    "name": "Fern",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "21",
      "haircolor": 12,
      "facial": "5",
      "clothes": "18",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-g-graham": {
    "name": "Graham",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "20",
      "haircolor": 9,
      "facial": "13",
      "clothes": "10",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-h-hedda": {
    "name": "Hedda",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "45",
      "haircolor": 6,
      "facial": "2",
      "clothes": "20",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-03-i-vaughn": {
    "name": "Vaughn",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "12",
      "haircolor": 0,
      "facial": "0",
      "clothes": "18",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-a-albert": {
    "name": "Albert",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "23",
      "haircolor": 3,
      "facial": "4",
      "clothes": "9",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-b-burma": {
    "name": "Burma",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "1",
      "haircolor": 14,
      "facial": "0",
      "clothes": "13",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-c-craig": {
    "name": "Craig",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "5",
      "haircolor": 2,
      "facial": "7",
      "clothes": "2",
      "clothescolor": 8,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-d-duncan": {
    "name": "Duncan",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "27",
      "haircolor": 6,
      "facial": "11",
      "clothes": "2",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-e-elyana": {
    "name": "Elyana",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "0",
      "haircolor": 13,
      "facial": "0",
      "clothes": "8",
      "clothescolor": 11,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-f-faith": {
    "name": "Faith",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "20",
      "haircolor": 2,
      "facial": "2",
      "clothes": "18",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-g-ginny": {
    "name": "Ginny",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "21",
      "haircolor": 1,
      "facial": "8",
      "clothes": "11",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-h-hugo": {
    "name": "Hugo",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 2,
      "skincolor": 2,
      "hair": "28",
      "haircolor": 6,
      "facial": "1",
      "clothes": "17",
      "clothescolor": 16,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-i-idril": {
    "name": "Idril",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "46",
      "haircolor": 3,
      "facial": "0",
      "clothes": "22",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-04-j-valeria": {
    "name": "Valeria",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "40",
      "haircolor": 11,
      "facial": "0",
      "clothes": "8",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-a-alicia": {
    "name": "Alicia",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "22",
      "haircolor": 14,
      "facial": "0",
      "clothes": "19",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-b-brenda": {
    "name": "Brenda",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "16",
      "haircolor": 6,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-c-clark": {
    "name": "Clark",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "22",
      "haircolor": 4,
      "facial": "0",
      "clothes": "19",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-d-dylan": {
    "name": "Dylan",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "6",
      "haircolor": 7,
      "facial": "1",
      "clothes": "11",
      "clothescolor": 14,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-e-ezequiel": {
    "name": "Ezequiel",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 3,
      "skincolor": 0,
      "hair": "29",
      "haircolor": 11,
      "facial": "2",
      "clothes": "12",
      "clothescolor": 3,
      "hat": "6",
      "accessory": "0"
    }
  },
  "case-05-f-florence": {
    "name": "Florence",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "21",
      "haircolor": 5,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 9,
      "hat": "3",
      "accessory": "0"
    }
  },
  "case-05-g-george": {
    "name": "George",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "17",
      "haircolor": 3,
      "facial": "7",
      "clothes": "14",
      "clothescolor": 14,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-h-holden": {
    "name": "Holden",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "10",
      "haircolor": 6,
      "facial": "1",
      "clothes": "10",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-05-i-victor": {
    "name": "Victor",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "11",
      "haircolor": 15,
      "facial": "0",
      "clothes": "11",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-06-a-ada": {
    "name": "Ada",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "16",
      "haircolor": 12,
      "facial": "0",
      "clothes": "15",
      "clothescolor": 3,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-06-b-brigitte": {
    "name": "Brigitte",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "23",
      "haircolor": 10,
      "facial": "0",
      "clothes": "8",
      "clothescolor": 6,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-06-c-cameron": {
    "name": "Cameron",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "16",
      "haircolor": 14,
      "facial": "6",
      "clothes": "21",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-06-d-darlene": {
    "name": "Darlene",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "38",
      "haircolor": 4,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-06-e-edison": {
    "name": "Edison",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "21",
      "haircolor": 9,
      "facial": "7",
      "clothes": "19",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-06-f-vinita": {
    "name": "Vinita",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "12",
      "haircolor": 2,
      "facial": "0",
      "clothes": "7",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-a-amir": {
    "name": "Amir",
    "sex": "male",
    "bgColor": "#a2d9e6",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 4,
      "hair": "50",
      "haircolor": 14,
      "facial": "0",
      "clothes": "18",
      "clothescolor": 11,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-b-bianca": {
    "name": "Bianca",
    "sex": "female",
    "bgColor": "#ceb3db",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "19",
      "haircolor": 2,
      "facial": "0",
      "clothes": "0",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-c-carly": {
    "name": "Carly",
    "sex": "female",
    "bgColor": "#88e7b4",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "53",
      "haircolor": 10,
      "facial": "6",
      "clothes": "24",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-d-diane": {
    "name": "Diane",
    "sex": "female",
    "bgColor": "#cfa4db",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "20",
      "haircolor": 17,
      "facial": "4",
      "clothes": "6",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "6"
    }
  },
  "case-07-e-emmett": {
    "name": "Emmett",
    "sex": "male",
    "bgColor": "#e9a196",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "13",
      "haircolor": 11,
      "facial": "2",
      "clothes": "13",
      "clothescolor": 6,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-f-felicia": {
    "name": "Felicia",
    "sex": "female",
    "bgColor": "#ba6d81",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "40",
      "haircolor": 1,
      "facial": "0",
      "clothes": "22",
      "clothescolor": 6,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-07-g-vickie": {
    "name": "Vickie",
    "sex": "female",
    "bgColor": "#ff9ea8",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "11",
      "haircolor": 0,
      "facial": "0",
      "clothes": "17",
      "clothescolor": 6,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-a-abigail": {
    "name": "Abigail",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "55",
      "haircolor": 4,
      "facial": "0",
      "clothes": "1",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-b-ben": {
    "name": "Ben",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "23",
      "haircolor": 6,
      "facial": "0",
      "clothes": "2",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-c-carl": {
    "name": "Carl",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "42",
      "haircolor": 7,
      "facial": "0",
      "clothes": "9",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "3"
    }
  },
  "case-08-d-david": {
    "name": "David",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "23",
      "haircolor": 9,
      "facial": "7",
      "clothes": "12",
      "clothescolor": 16,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-e-edgar": {
    "name": "Edgar",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "33",
      "haircolor": 2,
      "facial": "20",
      "clothes": "6",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-f-france": {
    "name": "France",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "35",
      "haircolor": 2,
      "facial": "0",
      "clothes": "5",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "8"
    }
  },
  "case-08-g-grace": {
    "name": "Grace",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "42",
      "haircolor": 13,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 15,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-08-h-hawa": {
    "name": "Hawa",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "38",
      "haircolor": 6,
      "facial": "0",
      "clothes": "14",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-08-i-valentino": {
    "name": "Valentino",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "1",
      "haircolor": 6,
      "facial": "24",
      "clothes": "7",
      "clothescolor": 8,
      "hat": "3",
      "accessory": "0"
    }
  },
  "case-09-a-ayla": {
    "name": "Ayla",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "10",
      "haircolor": 11,
      "facial": "0",
      "clothes": "15",
      "clothescolor": 3,
      "hat": "15",
      "accessory": "0"
    }
  },
  "case-09-b-brandon": {
    "name": "Brandon",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "1",
      "haircolor": 11,
      "facial": "8",
      "clothes": "11",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-c-christa": {
    "name": "Christa",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "27",
      "haircolor": 5,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-d-dolores": {
    "name": "Dolores",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "43",
      "haircolor": 10,
      "facial": "15",
      "clothes": "13",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-e-evangeline": {
    "name": "Evangeline",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "13",
      "haircolor": 8,
      "facial": "0",
      "clothes": "25",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-f-finn": {
    "name": "Finn",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "12",
      "haircolor": 3,
      "facial": "0",
      "clothes": "11",
      "clothescolor": 16,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-g-gabby": {
    "name": "Gabby",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "46",
      "haircolor": 10,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 5,
      "hat": "13",
      "accessory": "0"
    }
  },
  "case-09-h-heidi": {
    "name": "Heidi",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "3",
      "haircolor": 7,
      "facial": "0",
      "clothes": "26",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-09-i-vanessa": {
    "name": "Vanessa",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "38",
      "haircolor": 15,
      "facial": "0",
      "clothes": "14",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-a-archer": {
    "name": "Archer",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 0,
      "hair": "15",
      "haircolor": 3,
      "facial": "9",
      "clothes": "16",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-b-brooke": {
    "name": "Brooke",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "22",
      "haircolor": 10,
      "facial": "0",
      "clothes": "2",
      "clothescolor": 18,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-c-crystal": {
    "name": "Crystal",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "18",
      "haircolor": 2,
      "facial": "2",
      "clothes": "19",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-d-daisy": {
    "name": "Daisy",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "12",
      "haircolor": 6,
      "facial": "0",
      "clothes": "19",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-e-ernie": {
    "name": "Ernie",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "9",
      "haircolor": 6,
      "facial": "0",
      "clothes": "16",
      "clothescolor": 16,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-f-finn": {
    "name": "Finn",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "22",
      "haircolor": 8,
      "facial": "14",
      "clothes": "22",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-g-giulia": {
    "name": "Giulia",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "15",
      "haircolor": 11,
      "facial": "8",
      "clothes": "16",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-10-h-harper": {
    "name": "Harper",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "5",
      "haircolor": 10,
      "facial": "0",
      "clothes": "9",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "3"
    }
  },
  "case-10-i-vikram": {
    "name": "Vikram",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "12",
      "haircolor": 6,
      "facial": "3",
      "clothes": "16",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-a-ashton": {
    "name": "Ashton",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 2,
      "skincolor": 0,
      "hair": "9",
      "haircolor": 8,
      "facial": "6",
      "clothes": "0",
      "clothescolor": 17,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-b-brenda": {
    "name": "Brenda",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "24",
      "haircolor": 6,
      "facial": "0",
      "clothes": "19",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-c-carla": {
    "name": "Carla",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "18",
      "haircolor": 14,
      "facial": "0",
      "clothes": "22",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-d-daryl": {
    "name": "Daryl",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "0",
      "haircolor": 4,
      "facial": "0",
      "clothes": "17",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-e-earl": {
    "name": "Earl",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "9",
      "haircolor": 5,
      "facial": "4",
      "clothes": "9",
      "clothescolor": 11,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-f-fabian": {
    "name": "Fabian",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "25",
      "haircolor": 8,
      "facial": "3",
      "clothes": "10",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-16-g-valentino": {
    "name": "Valentino",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "1",
      "haircolor": 9,
      "facial": "0",
      "clothes": "0",
      "clothescolor": 3,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-a-amelia": {
    "name": "Amelia",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "11",
      "haircolor": 6,
      "facial": "8",
      "clothes": "22",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-b-brittney": {
    "name": "Brittney",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "18",
      "haircolor": 10,
      "facial": "8",
      "clothes": "24",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-c-claude": {
    "name": "Claude",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "16",
      "haircolor": 9,
      "facial": "6",
      "clothes": "21",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-d-douglas": {
    "name": "Douglas",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "9",
      "haircolor": 4,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-e-enid": {
    "name": "Enid",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "20",
      "haircolor": 6,
      "facial": "0",
      "clothes": "3",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-f-fiona": {
    "name": "Fiona",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 2,
      "hair": "0",
      "haircolor": 1,
      "facial": "0",
      "clothes": "5",
      "clothescolor": 14,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-g-giovanni": {
    "name": "Giovanni",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "8",
      "haircolor": 12,
      "facial": "0",
      "clothes": "1",
      "clothescolor": 5,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-17-h-vala": {
    "name": "Vala",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "4",
      "haircolor": 9,
      "facial": "7",
      "clothes": "15",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-18-a-alice": {
    "name": "Alice",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "47",
      "haircolor": 3,
      "facial": "0",
      "clothes": "10",
      "clothescolor": 11,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-18-b-bonnie": {
    "name": "Bonnie",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "7",
      "haircolor": 6,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 3,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-18-c-camila": {
    "name": "Camila",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "5",
      "haircolor": 9,
      "facial": "0",
      "clothes": "12",
      "clothescolor": 10,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-18-d-daniel": {
    "name": "Daniel",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "7",
      "haircolor": 6,
      "facial": "9",
      "clothes": "6",
      "clothescolor": 4,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-18-e-eliza": {
    "name": "Eliza",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "11",
      "haircolor": 8,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "2"
    }
  },
  "case-18-f-finlay": {
    "name": "Finlay",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 0,
      "hair": "14",
      "haircolor": 6,
      "facial": "5",
      "clothes": "1",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-18-g-gilbert": {
    "name": "Gilbert",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "3",
      "haircolor": 1,
      "facial": "0",
      "clothes": "2",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-18-h-harper": {
    "name": "Harper",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "6",
      "haircolor": 2,
      "facial": "0",
      "clothes": "17",
      "clothescolor": 4,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-18-i-vincenzo": {
    "name": "Vincenzo",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 0,
      "hair": "3",
      "haircolor": 6,
      "facial": "0",
      "clothes": "1",
      "clothescolor": 15,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-a-angelo": {
    "name": "Angelo",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "10",
      "haircolor": 3,
      "facial": "9",
      "clothes": "9",
      "clothescolor": 15,
      "hat": "0",
      "accessory": "2"
    }
  },
  "case-19-b-brigitte": {
    "name": "Brigitte",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "42",
      "haircolor": 18,
      "facial": "0",
      "clothes": "23",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "3"
    }
  },
  "case-19-c-catherine": {
    "name": "Catherine",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "5",
      "haircolor": 12,
      "facial": "0",
      "clothes": "0",
      "clothescolor": 16,
      "hat": "0",
      "accessory": "7"
    }
  },
  "case-19-d-dalton": {
    "name": "Dalton",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "19",
      "haircolor": 11,
      "facial": "7",
      "clothes": "1",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-e-elliot": {
    "name": "Elliot",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "2",
      "haircolor": 3,
      "facial": "12",
      "clothes": "21",
      "clothescolor": 2,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-f-fabrice": {
    "name": "Fabrice",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "5",
      "haircolor": 1,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 19,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-g-genevieve": {
    "name": "Genevieve",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "26",
      "haircolor": 0,
      "facial": "0",
      "clothes": "13",
      "clothescolor": 12,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-h-hayden": {
    "name": "Hayden",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 2,
      "skincolor": 0,
      "hair": "21",
      "haircolor": 5,
      "facial": "0",
      "clothes": "6",
      "clothescolor": 14,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-19-i-virginia": {
    "name": "Virginia",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "11",
      "haircolor": 3,
      "facial": "0",
      "clothes": "6",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-20-a-alysson": {
    "name": "Alysson",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "45",
      "haircolor": 11,
      "facial": "0",
      "clothes": "20",
      "clothescolor": 18,
      "hat": "0",
      "accessory": "8"
    }
  },
  "case-20-b-brenda": {
    "name": "Brenda",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "32",
      "haircolor": 9,
      "facial": "0",
      "clothes": "3",
      "clothescolor": 15,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-20-c-cynthia": {
    "name": "Cynthia",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "50",
      "haircolor": 4,
      "facial": "0",
      "clothes": "0",
      "clothescolor": 14,
      "hat": "0",
      "accessory": "9"
    }
  },
  "case-20-d-dylan": {
    "name": "Dylan",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 3,
      "hair": "33",
      "haircolor": 6,
      "facial": "0",
      "clothes": "2",
      "clothescolor": 15,
      "hat": "8",
      "accessory": "1"
    }
  },
  "case-20-e-elsa": {
    "name": "Elsa",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 1,
      "hair": "35",
      "haircolor": 6,
      "facial": "0",
      "clothes": "15",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-20-f-freya": {
    "name": "Freya",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "40",
      "haircolor": 7,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 7,
      "hat": "0",
      "accessory": "1"
    }
  },
  "case-20-g-george": {
    "name": "George",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 4,
      "hair": "21",
      "haircolor": 12,
      "facial": "15",
      "clothes": "2",
      "clothescolor": 20,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-20-h-hugh": {
    "name": "Hugh",
    "sex": "male",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 1,
      "skincolor": 0,
      "hair": "55",
      "haircolor": 4,
      "facial": "9",
      "clothes": "2",
      "clothescolor": 9,
      "hat": "0",
      "accessory": "0"
    }
  },
  "case-20-i-vicky": {
    "name": "Vicky",
    "sex": "female",
    "bgColor": "#e3e5d7",
    "appearance": {
      "theme": 0,
      "body": 0,
      "skincolor": 0,
      "hair": "42",
      "haircolor": 3,
      "facial": "0",
      "clothes": "4",
      "clothescolor": 13,
      "hat": "0",
      "accessory": "0"
    }
  }
};

const skinColors: Record<number, string> = {
  "0": "#efba90",
  "1": "#95775e",
  "2": "#9e7b74",
  "3": "#c59d86",
  "4": "#f7ccaa",
  "5": "#61bf55",
  "6": "#a6d5d8",
  "7": "#fff8f2",
  "8": "#b7c1a2",
  "9": "#1e1e1e"
};
const hairColors: Record<number, string> = {
  "0": "#e9851a",
  "1": "#f5f9fb",
  "2": "#ffeb7d",
  "3": "#855f48",
  "4": "#533e36",
  "5": "#fff072",
  "6": "#2d2e37",
  "7": "#bf9e57",
  "8": "#8a7267",
  "9": "#a85858",
  "10": "#cbced3",
  "11": "#5a535d",
  "12": "#cbced3",
  "13": "#959ab2",
  "14": "#997d5f",
  "15": "#b96946",
  "16": "#82b473",
  "17": "#c88ecd",
  "18": "#91d7e8",
  "19": "#91d7e8",
  "20": "#91d7e8"
};
const clothesColors: Record<number, string> = {
  "0": "#2ebfbc",
  "1": "#72bf5a",
  "2": "#618fbf",
  "3": "#a579bf",
  "4": "#d8c248",
  "5": "#b97676",
  "6": "#f1adc0",
  "7": "#e38d40",
  "8": "#9be9c9",
  "9": "#a8a9c6",
  "10": "#c5e2e2",
  "11": "#5e9745",
  "12": "#3ba7cb",
  "13": "#f26f7b",
  "14": "#7a71a4",
  "15": "#2a2a2a",
  "16": "#80bbba",
  "17": "#f6f6f6",
  "18": "#f6f6f6",
  "19": "#f6f6f6",
  "20": "#f5f5dc"
};

const bodyLayerAdjustments: Record<string, { scaleX?: number; scaleY?: number; layers?: Record<string, { offsetX?: number; offsetY?: number; scaleX?: number; scaleY?: number }> }> = {
  man_1: { scaleX: 1.2, scaleY: 1.05, layers: { clothes: { offsetY: -6 } } },
  man_2: { scaleX: 1.21, scaleY: 1.05, layers: { clothes: { offsetY: -6 } } },
  man_3: { scaleX: 0.9, scaleY: 1 },
  woman_1: { scaleX: 1.15, scaleY: 1, layers: { clothes: { offsetY: -8 } } }
};

function normalizePart(value: string | number | undefined): string {
  const raw = String(value ?? '0').trim();
  if (/^\d{4,5}$/.test(raw)) {
    const prefix = raw.slice(0, 2);
    const rest = raw.slice(2).padStart(3, '0');
    if (prefix === '01') return `wildwest_${rest}`;
  }
  return String(Math.floor(Number(raw) || 0)).padStart(3, '0');
}

function personPrefix(sex: PortraitSex): string {
  return sex === 'female' ? 'woman' : 'man';
}

function layerPath(sex: PortraitSex, kind: string, value: string | number | undefined): string {
  const person = personPrefix(sex);
  return `theme-0/${person}/${kind}/${person}_${kind}_${normalizePart(value)}.svg`;
}

function hairBackPath(sex: PortraitSex, value: string | number | undefined): string | undefined {
  const code = normalizePart(value);
  if (!code.includes('_')) return undefined;
  const split = code.lastIndexOf('_');
  const person = personPrefix(sex);
  return `theme-0/${person}/hair/${person}_hair_${code.slice(0, split)}_back${code.slice(split)}.svg`;
}

function tintColor(kind: 'skin' | 'hair' | 'clothes', value: number): string | undefined {
  if (kind === 'skin') return skinColors[value];
  if (kind === 'hair') return hairColors[value];
  return clothesColors[value];
}

function layerTransform(sex: PortraitSex, body: number, layerKind: string): string | undefined {
  const bodyKey = `${personPrefix(sex)}_${body}`;
  const bodyAdjustment = bodyLayerAdjustments[bodyKey];
  if (!bodyAdjustment) return undefined;
  const layerAdjustment = bodyAdjustment.layers?.[layerKind] ?? {};
  const scaleX = (bodyAdjustment.scaleX ?? 1) * (layerAdjustment.scaleX ?? 1);
  const scaleY = (bodyAdjustment.scaleY ?? 1) * (layerAdjustment.scaleY ?? 1);
  const offsetX = layerAdjustment.offsetX ?? 0;
  const offsetY = layerAdjustment.offsetY ?? 0;
  const transforms = [];
  if (offsetX || offsetY) transforms.push(`translate(${offsetX}%, ${offsetY}%)`);
  if (scaleX !== 1 || scaleY !== 1) transforms.push(`scale(${scaleX}, ${scaleY})`);
  return transforms.length > 0 ? transforms.join(' ') : undefined;
}

export function portraitDefinitionFor(portraitKey: string | undefined): PortraitDefinition | undefined {
  return portraitKey ? portraitDefinitions[portraitKey] : undefined;
}

export function portraitLayersFor(portraitKey: string | undefined, baseUrl: string): PortraitLayer[] {
  const definition = portraitDefinitionFor(portraitKey);
  if (!definition) return [];
  const { sex, appearance } = definition;
  const layers: PortraitLayer[] = [];
  const pushLayer = (kind: string, value: string | number | undefined, zIndex: number, tint?: string) => {
    layers.push({
      key: kind,
      src: `${baseUrl}${layerPath(sex, kind, value)}`,
      zIndex,
      tintColor: tint,
      transform: layerTransform(sex, appearance.body, kind)
    });
  };
  const backPath = hairBackPath(sex, appearance.hair);
  if (backPath) {
    layers.push({
      key: 'hair-back',
      src: `${baseUrl}${backPath}`,
      zIndex: 0,
      tintColor: tintColor('hair', appearance.haircolor),
      transform: layerTransform(sex, appearance.body, 'hair')
    });
  }
  pushLayer('body', appearance.body, 1, tintColor('skin', appearance.skincolor));
  pushLayer('clothes', appearance.clothes, 2, tintColor('clothes', appearance.clothescolor));
  pushLayer('hair', appearance.hair, 3, tintColor('hair', appearance.haircolor));
  if (Number(appearance.facial) > 0) pushLayer('facial', appearance.facial, 4, tintColor('hair', appearance.haircolor));
  if (Number(appearance.hat) > 0) pushLayer('hat', appearance.hat, 5);
  if (Number(appearance.accessory) > 0) pushLayer('accessory', appearance.accessory, 6);
  return layers;
}
