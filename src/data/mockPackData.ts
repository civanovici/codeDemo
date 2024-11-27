export interface PackData {
  packType: string
  initialQuantity: number
  minOrderQuantity: number
  maxOrderQuantity: number
  minBuffer: number
  maxBuffer: number
  shortWindow: number
  longWindow: number
  includeInOrders: boolean
}

export const mockPackData: PackData[] = [
  {
    packType: 'A.01',
    initialQuantity: 100,
    minOrderQuantity: 50,
    maxOrderQuantity: 200,
    minBuffer: 20,
    maxBuffer: 50,
    shortWindow: 7,
    longWindow: 30,
    includeInOrders: true,
  },
  {
    packType: 'B.02',
    initialQuantity: 150,
    minOrderQuantity: 75,
    maxOrderQuantity: 300,
    minBuffer: 25,
    maxBuffer: 60,
    shortWindow: 5,
    longWindow: 25,
    includeInOrders: true,
  },
  {
    packType: 'C.03',
    initialQuantity: 80,
    minOrderQuantity: 40,
    maxOrderQuantity: 160,
    minBuffer: 15,
    maxBuffer: 40,
    shortWindow: 6,
    longWindow: 28,
    includeInOrders: false,
  },
  {
    packType: 'D.04',
    initialQuantity: 200,
    minOrderQuantity: 100,
    maxOrderQuantity: 400,
    minBuffer: 30,
    maxBuffer: 70,
    shortWindow: 8,
    longWindow: 35,
    includeInOrders: true,
  },
  {
    packType: 'E.05',
    initialQuantity: 120,
    minOrderQuantity: 60,
    maxOrderQuantity: 240,
    minBuffer: 22,
    maxBuffer: 55,
    shortWindow: 6,
    longWindow: 28,
    includeInOrders: true,
  },
  {
    packType: 'F.06',
    initialQuantity: 90,
    minOrderQuantity: 45,
    maxOrderQuantity: 180,
    minBuffer: 18,
    maxBuffer: 45,
    shortWindow: 5,
    longWindow: 25,
    includeInOrders: false,
  },
  {
    packType: 'G.07',
    initialQuantity: 175,
    minOrderQuantity: 85,
    maxOrderQuantity: 350,
    minBuffer: 28,
    maxBuffer: 65,
    shortWindow: 7,
    longWindow: 32,
    includeInOrders: true,
  },
  {
    packType: 'H.08',
    initialQuantity: 130,
    minOrderQuantity: 65,
    maxOrderQuantity: 260,
    minBuffer: 24,
    maxBuffer: 58,
    shortWindow: 6,
    longWindow: 30,
    includeInOrders: true,
  },
  {
    packType: 'I.09',
    initialQuantity: 110,
    minOrderQuantity: 55,
    maxOrderQuantity: 220,
    minBuffer: 21,
    maxBuffer: 52,
    shortWindow: 5,
    longWindow: 26,
    includeInOrders: true,
  },
  {
    packType: 'J.10',
    initialQuantity: 160,
    minOrderQuantity: 80,
    maxOrderQuantity: 320,
    minBuffer: 26,
    maxBuffer: 62,
    shortWindow: 7,
    longWindow: 33,
    includeInOrders: false,
  },
] 