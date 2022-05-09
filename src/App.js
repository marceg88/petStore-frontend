import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import CreatePet from './components/createPet/createPet';
import HomePet from './components/homePet/homePet';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      {/* <CreatePet /> */}
      {/* <HomePet /> */}
      <AppRoutes />
    </div>
  );
}

export default App;
