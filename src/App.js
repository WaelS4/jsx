import logo from './img/imageInSrc.jpg'
import './App.css';
import './style.css';
import video from './img/video.mp4'
function App() {
  return (
    <div style={{
      border: "solid 1px black", maxWidth: "100vw"
    }}>
      <h1 className="title red">Wael Sellami</h1>
      <br />
      <img src={logo} alt="" className="image" />
      <br />
      <img src="img/imageInPublic.jpg" alt="" className="image" />
      <br />
      <video src={video} width="750" height="500" controls autoPlay="true" loop>
      </video>
    </div>

  );
}
export default App;
