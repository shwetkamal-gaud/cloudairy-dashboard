import './App.css'
import DashboardTop from './components/DashboardTop'
import MainSection from './components/MainSection'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='grid grid-cols-12 '>
      <div className='col-span-3'>
        <Sidebar />
      </div>
      <div className='col-span-9 w-full'>
        <DashboardTop/>
        <MainSection/>
      </div>
    </div>
  )
}

export default App
