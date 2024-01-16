import Accueil from './pages/BackOffice/Accueil';
import BoiteVitesse from './pages/BackOffice/Components/BoiteVitesse';
import Couleur from './pages/BackOffice/Components/Couleur';
import Energie from './pages/BackOffice/Components/Energie';
import Gestion from './pages/BackOffice/Components/Gestion';
import ListeAnnonce from './pages/BackOffice/Components/ListeAnnonces';
import ListeBoite from './pages/BackOffice/Components/ListeBoite';
import ListeCouleur from './pages/BackOffice/Components/ListeCouleur';
import ListeEnergie from './pages/BackOffice/Components/ListeEnergie';
import ListeMarque from './pages/BackOffice/Components/ListeMarque';
import ListeModele from './pages/BackOffice/Components/ListeModele';
import ListeType from './pages/BackOffice/Components/ListeType';
import Marque from './pages/BackOffice/Components/Marque';
import Model from './pages/BackOffice/Components/Model';
import Type from './pages/BackOffice/Components/Type';
import Login from './pages/BackOffice/Login';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element= {<Login/>}/>
              <Route path="accueil" element={<Accueil />}/>
              <Route path="/Component" element= {<Gestion/>}/>
              <Route path="/gestion_type" element= {<ListeType/>}/>
              <Route path="/gestion_boite" element= {<ListeBoite/>}/>
              <Route path="/gestion_modele" element= {<ListeModele/>}/>
              <Route path="/gestion_marque" element= {<ListeMarque/>}/>
              <Route path="/gestion_energie" element= {<ListeEnergie/>}/>
              <Route path="/gestion_couleur" element= {<ListeCouleur/>}/>
              <Route path="/add_type" element= {<Type/>}/>
              <Route path="/add_model" element= {<Model/>}/>
              <Route path="/add_marque" element= {<Marque/>}/>
              <Route path="/add_energie" element= {<Energie/>}/>
              <Route path="/add_couleur" element= {<Couleur/>}/>
              <Route path="/add_boite" element= {<BoiteVitesse/>}/>
              <Route path="/liste_annonce" element= {<ListeAnnonce/>}/>
          </Routes>
      </>
  );
}

export default App;
