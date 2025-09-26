import UseRefExample from "./materi/UseRef/UseRefExample";
import RefCallback from "./materi/UseRef/RefCallback";
import ProductList from "./materi/useMemo/ProductList";
import Component from "@materi/TestComponent/Component";

import { PRODUCT } from "./materi/useMemo/data";

function App() {
  return (
    <>
      <div>
        <UseRefExample />
        <RefCallback />
        <ProductList product={PRODUCT} />
      </div>
    </>
  );
}

export default App;
