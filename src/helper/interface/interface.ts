export interface DataItem {
    id: string;
    name: string;
    priceUsd: string;
    marketCapUsd: string;
    vwap24Hr: string;
    supply: string;
    volumeUsd24Hr: string;
    changePercent24Hr: string;
    background?: string;
  }
  
  export interface Error {
    message: string;
    bool: boolean;
  }