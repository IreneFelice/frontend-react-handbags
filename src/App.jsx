import './App.css'
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.jsx";
// import bag1 from './assets/bag_1.png'
// import bag2 from './assets/bag_2.png'
// import bag3 from './assets/bag_3.png'
// import bag4 from './assets/bag_4.png'
import ProductItem from "./components/ProductItems/ProductItem.jsx";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav>
            <ButtonComponent buttonimput="to the collection" logText="to the collection" disabled={false}/>
            <ButtonComponent buttonimput="shop all bags" logText="shop all bags" disabled={false} />
            <ButtonComponent buttonimput="pre-orders" logText="pre-orders" disabled={true} />
        </nav>


          <main>
              <ProductItem
              extraAttention={true}
              contentExtraAttention="Best Seller"
              productPlace="1"
              productTitle="The handy bag"
              productPrize="400,-"
              />
              <ProductItem
                  extraAttention={true}
                  contentExtraAttention="Best Seller"
                  productPlace="2"
                  productTitle="The stylish bag"
                  productPrize="250,-"
              />
              <ProductItem
                  extraAttention={true}
                  contentExtraAttention="New collection"
                  productPlace="3"
                  productTitle="The simple bag"
                  productPrize="300,-"
              />
              <ProductItem
                  extraAttention={true}
                  contentExtraAttention="New collection"
                  productPlace="4"
                  productTitle="The trendy bag"
                  productPrize="150,-"
              />
          </main>
  </>
        )
}

export default App
