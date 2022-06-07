import Button  from "../src/components/UI/Button/button";

function App() {

  return (
    <div className="App">
     <p className="text-3xl font-bold text-blue-red text-center">Hello Vite + React!</p>
     <Button 
      onClick={()=> alert('Button 1 is clicked !')}
      variant="default"
      size="xl"
      > Submit </Button>
    </div>
  )
}

export default App
