import './App.css'
import ButtonComponent from "./components/ButtonComponent/ButtonComponent.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'

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
              <article>
                  <span>Best seller</span>
                  <img src={bag1} alt="afbeelding mist"/>
                  <p>Roze tas</p>
                  <h4>€1000,-</h4>
              </article>

              <article>
                  <span>Duuuuuur!</span>
                  <img src={bag2} alt="afbeelding mist"/>
                  <p>Bruine tas</p>
                  <h4>€1.000.000,-</h4>
              </article>

              <article>
                  <span>New collection</span>
                  <img src={bag3} alt="afbeelding mist"/>
                  <p>Groene tas</p>
                  <h4>€7,50</h4>
              </article>

              <article>
                  <span>New collection</span>
                  <img src={bag4} alt="afbeelding mist"/>
                  <p>Gele tas</p>
                  <h4>Prijs onbekend</h4>
              </article>
          </main>
  </>
        )
}

export default App
