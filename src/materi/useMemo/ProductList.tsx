import React, { useState, useMemo } from "react";
import { type Product, type SortBy, type SortDir } from "./types/Product";

type ProductProps = {
  product: Product[];
};

const ProductList: React.FC<ProductProps> = ({ product }) => {
  const [query, setQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  // Filter by search
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return product.filter((prev) => prev.name.toLowerCase().includes(q));
  }, [product, query]);

  // Sorting
  const sorted = useMemo(() => {
    const list = [...filtered];
    const dir = sortDir === "asc" ? 1 : -1;

    list.sort((a, b) => {
      const av = sortBy === "name" ? a.name.toLowerCase() : a.price;
      const bv = sortBy === "name" ? b.name.toLowerCase() : b.price;

      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;

      return 0;
    });

    return list;
  }, [filtered, sortBy, sortDir]);

  // Total harga
  const totalPrice = useMemo(
    () => filtered.reduce((sum, p) => sum + p.price, 0),
    [filtered]
  );

  console.log(product);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama produk..."
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
        >
          <option value="name">Nama</option>
          <option value="price">Harga</option>
        </select>
        <select
          value={sortDir}
          onChange={(e) => setSortDir(e.target.value as SortDir)}
        >
          <option value="asc">Naik</option>
          <option value="desc">Turun</option>
        </select>

        <p>
          Ditemukan : <b>{filtered.length} </b> produk . Total harga (filtered)
          : <b>Rp {totalPrice.toLocaleString("id-ID")}</b>
        </p>

        <ul>
          {sorted.map((product) => (
            <li key={product.id}>
              <b>{product.name}</b> - Rp {product.price.toLocaleString("id-ID")}{" "}
              <small>{product.category}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
