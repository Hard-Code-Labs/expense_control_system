export interface newCategory {
  cat_id: number;
  cat_name: string;
  cat_type: string;
  cat_icon: string;
  cat_editable: boolean;
}

export interface Categories {
  cat_id?: number;
  cat_icon: string;
  cat_name: string;
  cat_type: string;
  cat_editable?: boolean;
  is_delete?: boolean;
}