import Card from './Card';
import data from './data';
import './App.css';

function App() {
  return (
    <>
    <h1 className='heading'>Breakfast Menu</h1>
    {
      data.map((list)=>{
        console.log(list.img);
        return(
        <Card 
        imgSrc={list.img}
        title={list.title}
        price={list.price}
        />
        )
      })
    }
    

    </>
  );
}

export default App;
