export interface ICommon {
  created_at: string | Date;
  updated_at: null | string | Date;
  deleted_at: null | string | Date;
  id: number | string;
}



export type readCommonDto = { id: number };
