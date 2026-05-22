import './App.css'
import DynamicForm from './Advance/DynamicForm/ReactJsPart'
import AdvanceAccordian from './Advance/Accordian/ReactJs'
import TabSelection from './Advance/TabSelection/ReactJs'
import Todo from './Advance/Todo/ReactJs'

function App() {
  

  return (
    <>
      <section id="center">
        <DynamicForm />
        <AdvanceAccordian />
        <TabSelection />
        <Todo />
      </section>
    </>
  )
}

export default App
