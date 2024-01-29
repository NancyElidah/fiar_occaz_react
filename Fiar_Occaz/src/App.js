import Accueil from './pages/BackOffice/Accueil';
import Annonce from './pages/BackOffice/Components/Annonce';
import BoiteVitesse from './pages/BackOffice/Components/BoiteVitesse';
import Commission from './pages/BackOffice/Components/Commission';
import Couleur from './pages/BackOffice/Components/Couleur';
import Energie from './pages/BackOffice/Components/Energie';
import Gestion from './pages/BackOffice/Components/Gestion';
import ListeAnnonce from './pages/BackOffice/Components/ListeAnnonces';
import ListeBoite from './pages/BackOffice/Components/ListeBoite';
import ListeCommission from './pages/BackOffice/Components/ListeCommission';
import ListeCouleur from './pages/BackOffice/Components/ListeCouleur';
import ListeEnergie from './pages/BackOffice/Components/ListeEnergie';
import ListeMarque from './pages/BackOffice/Components/ListeMarque';
import ListeModele from './pages/BackOffice/Components/ListeModele';
import ListePays from './pages/BackOffice/Components/ListePays';
import ListeType from './pages/BackOffice/Components/ListeType';
import ListeVoiture from './pages/BackOffice/Components/ListeVoiture';
import Marque from './pages/BackOffice/Components/Marque';
import Model from './pages/BackOffice/Components/Model';
import Pays from './pages/BackOffice/Components/Pays';
import StatChiffre from './pages/BackOffice/Components/StatChiffre';
import Statistique from './pages/BackOffice/Components/Statistique';
import Type from './pages/BackOffice/Components/Type';
import BoiteUp from './pages/BackOffice/Components/update/BoiteUp';
import CouleurUp from './pages/BackOffice/Components/update/CouleurUp';
import MarqueUp from './pages/BackOffice/Components/update/MarqueUp';
import ModelUp from './pages/BackOffice/Components/update/ModelUp';
import PaysUp from './pages/BackOffice/Components/update/PaysUp';
import TypeUp from './pages/BackOffice/Components/update/TypeUp';
import Inscription from './pages/BackOffice/Inscription';
import SelectType from './pages/BackOffice/Components/SelectType';
import Login from './pages/BackOffice/Login';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element= {<Login/>}/>
              <Route path="/inscription" element= {<Inscription/>}/>

              <Route path="/:token/accueil" element={<Accueil />}/>
              <Route path="/:token/Component" element= {<Gestion/>}/>

              {/* liste */}
              <Route path="/:token/gestion_type" element= {<ListeType/>}/>
              <Route path="/:token/gestion_boite" element= {<ListeBoite/>}/>
              <Route path="/:token/gestion_modele" element= {<ListeModele/>}/>
              <Route path="/:token/gestion_marque" element= {<ListeMarque/>}/>
              <Route path="/:token/gestion_energie" element= {<ListeEnergie/>}/>
              <Route path="/:token/gestion_couleur" element= {<ListeCouleur/>}/>
              <Route path="/:token/gestion_pays" element= {<ListePays/>}/>
              <Route path="/:token/liste_voiture" element= {<ListeVoiture/>}/>

                {/* add */}
              <Route path="/:token/add_type" element= {<Type/>}/>
              <Route path="/:token/add_model" element= {<Model/>}/>
              <Route path="/:token/add_marque" element= {<Marque/>}/>
              <Route path="/:token/add_energie" element= {<Energie/>}/>
              <Route path="/:token/add_couleur" element= {<Couleur/>}/>
              <Route path="/:token/add_boite" element= {<BoiteVitesse/>}/>
              <Route path="/:token/add_pays" element= {<Pays/>}/>

            {/* update */}
            <Route path="/:token/gestion_boite/update_boite/:idboite" element= {<BoiteUp/>}/>
            <Route path="/:token/gestion_couleur/update_couleur/:idboite" element= {<CouleurUp/>}/>
            <Route path="/:token/gestion_type/update_type/:idboite" element= {<TypeUp/>}/>
            <Route path="/:token/gestion_modele/update_modele/:idboite" element= {<ModelUp/>}/>
            <Route path="/:token/gestion_marque/update_marque/:idboite" element= {<MarqueUp/>}/>
            <Route path="/:token/gestion_pays/update_pays/:idboite" element= {<PaysUp/>}/>
            {/* <Route path="/:token/gestion_pays/update_pays/:idboite" element= {<Energie/>}/> */}

            {/* other */}
              <Route path="/:token/liste_annonce" element= {<ListeAnnonce/>}/>
              <Route path="/:token/liste_annonce/view_annonce/:idannonce" element= {<Annonce/>}/>
              <Route path="/:token/add_commission" element= {<Commission/>}/>
              <Route path="/:token/liste_commission" element= {<ListeCommission/>}/>
              <Route path="/:token/select_type" element= {<SelectType/>}/>
              <Route path="/:token/stat_chiffre/:idType/:annee" element= {<StatChiffre/>}/>
              <Route path="/:token/stat_element/:etat" element= {<Statistique/>}/>
          </Routes>
      </>
  );
}

export default App;
