interface Gerbang {
  id: number;
  IdCabang: number;
  NamaGerbang: string;
  NamaCabang: string;
}

interface Gerbangs {
  count: number;
  rows: Gerbang[];
}

interface Data {
  total_pages: number;
  current_page: number;
  count: number;
  rows: Gerbangs;
}

interface ModelGerbang {
  status: boolean;
  message: string;
  code: number;
  data: Data;
}
