import './App.css'
import ButtonComponent from "./components/ButtonComponent.jsx";


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
                  {/*<span className={}></span>*/}
                  {/*<img src={} alt="afbeelding mist"/>*/}
                  <p>naam tas</p>
                  <h4>prijs</h4>
              </article>

              <article>
                  {/*<span className={}></span>*/}
                  {/*<img src={} alt="afbeelding mist"/>*/}
                  <p>naam tas</p>
                  <h4>prijs</h4>
              </article>

              <article>
                  {/*<span className={}></span>*/}
                  {/*<img src={} alt="afbeelding mist"/>*/}
                  <p>naam tas</p>
                  <h4>prijs</h4>
              </article>

              <article>
                  {/*<span className={}></span>*/}
                  {/*<img src={} alt="afbeelding mist"/>*/}
                  <p>naam tas</p>
                  <h4>prijs</h4>
              </article>
          </main>
  </>
        )
}

export default App
