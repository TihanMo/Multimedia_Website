import ParallaxComponent from './ParallaxComponent';
import MyPicture from '../assets/Tram_Closeup.jpg';

const Home = () => {
  return (
    <div>
      <ParallaxComponent bgImage={MyPicture} strength={250}>
        <div style={{ width: '100%', height: '100vh' }}>
          <div
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1 style={{ color: 'white', textAlign: 'center' }}>Welcome to My Website</h1>
          </div>
        </div>
      </ParallaxComponent>
      <h1>Hellooooo</h1>
    </div>
  );
};

export default Home;
