interface Lalin {
  id: number;
  IdCabang: number;
  IdGerbang: number;
  Tanggal: string;
  Shift: number;
  IdGardu: number;
  Golongan: number;
  IdAsalGerbang: number;
  Tunai: number;
  DinasOpr: number;
  DinasMitra: number;
  DinasKary: number;
  eMandiri: number;
  eBri: number;
  eBni: number;
  eBca: number;
  eNobu: number;
  eDKI: number;
  eMega: number;
  eFlo: number;
}

interface Lalins {
  count: number;
  rows: Lalin[];
}

interface DataLalin {
  total_pages: number;
  current_page: number;
  count: number;
  rows: Lalins;
}

interface ModelLalin {
  status: boolean;
  message: string;
  code: number;
  data: DataLalin;
}

interface LalinFilter {
  IdCabang: number;
  IdGerbang: number;
  IdGardu:number
  Tanggal: string;
  metodePembayaran: string;
  gol1: number;
  gol2: number;
  gol3: number;
  gol4: number;
  gol5: number;
  tolalLalin: number;
}
