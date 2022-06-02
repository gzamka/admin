import { Choose } from './components'

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', width: "100%", }}>
        <Choose/>
        <Choose/>
        <Choose/>
    </div>
  );
}