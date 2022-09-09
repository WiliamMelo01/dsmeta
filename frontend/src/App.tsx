import Header from './components/Header'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SalesCard from './components/SalesCard'


function App() {
  return (
    <>

      <ToastContainer />
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard></SalesCard>
          </div>
        </section>
      </main>
    </>
  )
}
export default App
