export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  merk?: "HP" | "Lenovo";
};

export type SortBy = "name" | "price";
export type SortDir = "asc" | "desc";
