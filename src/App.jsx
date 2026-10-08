import './style.css';

function App() {
  return (
    <section className="playlist">
      <h1>SPOTI-BAI</h1>
      <div className="grid">
        <div className="card">
          <p>Tatlong Wife - Bugoy ng Cute Cute</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p> Ikaw lamang - Silent Sanctuary</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p>Baha - Lucky</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p>MYSB - Skusta Clee</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p> Shuloks - RapProjectSix</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p>Falling for you - The 1975</p>
          <button>Play</button>
          <button>Download</button>
        </div>

        <div className="card">
          <p>Pa-umaga - Al James</p>
          <button>Play</button>
          <button>Download</button>
        </div>
      </div>
      <button className="upload-btn">Shuffle</button>
    </section>
  );
}

export default App;
