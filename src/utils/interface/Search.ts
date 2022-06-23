import { Dispatch } from 'react';
import { SetStateAction } from 'react';
export interface ISearchProps {
  visible: boolean;
  searchRecords: SearchRecord[];
  onDelete: (SearchRecordId: number) => void;
  onReset: () => void;
}

export interface SearchRecord {
  id: number;
  title: string;
}
