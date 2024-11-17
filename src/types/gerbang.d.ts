interface Gerbang {
  id: number;
  IdCabang: number;
  NamaGerbang: string;
  NamaCabang: string;
}

interface Rows {
  count: number;
  rows: Gerbang[];
}

interface Data {
  total_pages: number;
  current_page: number;
  count: number;
  rows: Rows;
}

interface ModelGerbang {
  status: boolean;
  message: string;
  code: number;
  data: Data;
}
