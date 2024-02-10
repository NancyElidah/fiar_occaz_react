import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import Header from "../../Header";
import Footer from '../../Footer';
import StatistiqueBord from '../services/StatistiqueBord';
import withRouter  from "../Navigation/WithRouter";
 
class Statistique extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title_vendu:'',
      title_nonvendu:'',
      type : '',
      etat : this.props.params.etat,
      data_vendu :  [],
      data_nonVendu :  []
    }
  }
  componentDidMount(){
    let token = sessionStorage.getItem("token");
    let id = sessionStorage.getItem("utilisateur");
    console.log(this.state.etat)
    StatistiqueBord.getStatistique(token,id,this.state.etat ,2).then((res)=> {
      const formData = res.data.map(item => {
        if(this.state.etat ===":type"){
            return {
                name : item.type,
                value : item.nombre 
            }
        }else if (this.state.etat===":marque"){
          return{
            name : item.marque ,
            value : item.nombre
          }
        }else if (this.state.etat===":model"){
          return {
            name : item.modele,
            value : item.nombre
          }
        }
      });
      this.setState({
        data_vendu:formData,
        title_vendu: 'statistique par '+this.state.etat + " pour les voitures  Vendues",
        type:this.state.etat
      });
    }); 
    StatistiqueBord.getStatistique(token,id,this.state.etat ,0).then((res)=> {
      const formData = res.data.map(item => {
        if(this.state.etat ===":type"){
            return {
                name : item.type,
                value : item.nombre 
            }
        }else if (this.state.etat===":marque"){
          return{
            name : item.marque ,
            value : item.nombre
          }
        }else if (this.state.etat===":model"){
          return {
            name : item.modele,
            value : item.nombre
          }
        }
      });
      this.setState({
        data_nonVendu:formData,
        title_nonvendu: 'statistique par '+this.state.etat + " Pour les voitures non vendues ",
        type:this.state.etat
      });
    }); 
}
 render() {
   return (
    <>
    <Header></Header>
    <div className="main-container" style={{marginTop:-150}}>
    <div className="pd-ltr-20 xs-pd-20-10">
                        <div className="min-height-200px">
                            <div className="page-header">
                            <div className="clearfix mb-20">
                            <div className="pull-left">
                                <h4 className="text-blue h4" style={{color:"blue"}}>{this.state.title_vendu} </h4>
                                <p>Stat <code>.{this.state.type}</code></p>
                                <div className="form-group row" style={{marginLeft:300}}>

            <PieChart width={450} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={this.state.data_vendu}
                cx={200}
                cy={200}
                outerRadius={125}
                fill="pink"
                label
              >
              </Pie>
              <Tooltip />
              <Legend  />
            </PieChart>
</div>
</div>
<div className="pd-ltr-20 xs-pd-20-10">
          <h4 className="text-blue h4" style={{color:"blue"}}>{this.state.title_nonvendu} </h4>
                                <p>Stat <code>.{this.state.type}</code></p>
              <div className="form-group row" style={{marginLeft:300}}>

                <PieChart width={450} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={this.state.data_nonVendu}
                    cx={200}
                    cy={200}
                    outerRadius={125}
                    fill="pink"
                    label
                  >
                  </Pie>
                  <Tooltip />
                  <Legend  />
                </PieChart>
          </div>
          </div>
</div>
</div>
</div>
    </div>
    </div>
    <Footer/>
    </>
 
     
   );
 }
}

export default withRouter(Statistique);
