import { Choose, Footer } from './components'

export const App = () => {
  return (
    <div>

      <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', width: "80%", }}>
          <Choose/>
          <Choose/>
          <Choose/>
      </div>
      <Footer/>
    </div>
  );
}
