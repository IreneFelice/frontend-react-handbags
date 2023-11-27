import './App.css'
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.jsx";
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import ProductItem from "./components/ProductItems/ProductItem.jsx";
import TileSection from "./components/Tiles/Tile.jsx";

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


          <footer>
              <TileSection
                  tileImage={false}
                  tileImageName={brand}
                  tileTitle='The Brand'
                  tileContent='blablabla'
                  tileExtraParagraph1='lalala'
                  tileExtraParagraph2='blablabla'
              />
              <TileSection
                  tileImage={true}
                  tileImageName={brand}
                  tileTitle='Afbeelding'
                  tileContent=''
                  tileExtraParagraph1=''
                  tileExtraParagraph2=''
              />
              <TileSection
                  tileImage={true}
                  tileImageName={story}
                  tileTitle='Afbeelding'
                  tileContent=''
                  tileExtraParagraph1=''
                  tileExtraParagraph2=''
              />
              <TileSection
                  tileImage={false}
                  tileImageName={brand}
                  tileTitle='our story'
                  tileContent='blablabla lalala blablabla'
                  tileExtraParagraph1=''
                  tileExtraParagraph2=''
              />

          </footer>
      </>)
}

export default App
