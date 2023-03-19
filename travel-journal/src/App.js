import './App.css';
import TravelCard from './TravelCard';
import data from './data';
import Header from './Header';
function App() {
  const TravelData= data.map(
    item=>{
      return(
        <TravelCard
        title={item.title}
        location={item.location}
        map={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
        />
      )
    }
  )
  return (
    <div className="App">
      <Header/>
      {TravelData}
      <></>
    </div>
  );
}

export default App;
