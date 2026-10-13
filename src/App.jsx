import ikawLamangImg from './assets/ikaw-lamang.jpg';
import lanyImg from './assets/lany.jpg';
import fallingForYouImg from './assets/falling-for-you.jpg';
import './style.css';

function App() {
  const songs = [
    { title: "Malibu Nights", artist: "Lany", image: lanyImg },
    { title: "Ikaw lamang", artist: "Silent Sanctuary", image: ikawLamangImg},
    { title: "Falling for you", artist: "The 1975", image: fallingForYouImg },
    { title: "MYSB", artist: "Skusta Clee", image: "images/mysb.jpg" },
    { title: "Shuloks", artist: "RapProjectSix", image: "images/shuloks.jpg" },
    { title: "Pa-umaga", artist: "Al James", image: "images/pa-umaga.jpg" },
  ];

  return (
    <section className="playlist">
      <h1>SPOTI-BAI</h1>
      <div className="grid">
        {songs.map((song, index) => (
          <div className="card" key={index}>
            <img src={song.image} alt={song.title} className="song-img" />
            <p>{song.title} - {song.artist}</p>
            <button>Play</button>
            <button>Download</button>
          </div>
        ))}
      </div>
      <button className="upload-btn">Shuffle</button>
    </section>
  );
}

export default App;
