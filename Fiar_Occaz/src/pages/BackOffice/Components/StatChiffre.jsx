import React, { Component } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
 {name: 'Jan', Montant: 4000},
 {name: 'Feb', Montant: 3000},
 {name: 'Mar', Montant: 2000},
 {name: 'Apr', Montant: 2780},
 {name: 'May', Montant: 1890},
 {name: 'Jun', Montant: 2890},
 {name: 'Jul', Montant: 3890},
 {name: 'Aug', Montant: 4890},
 {name: 'Sep', Montant:5890},
 {name: 'Oct', Montant: 6890},
 {name: 'Nov', Montant: 7890},
 {name: 'Dec', Montant: 8890},
];

class  StatChiffre extends Component{
    render(){
        return(
            <>
                <Header></Header>
                <div className="main-container" style={{marginTop:-150}}>
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
					        <div className="clearfix">
						        <div className="pull-left">
                                    <h4 className="text-blue h4" style={{color:"blue"}}>Chiffre d'affaire</h4>
						        </div>
                                <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="Montant" stroke="#8884d8" activeDot={{r: 8}}/>
                    </LineChart>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <Footer></Footer>
            </>
        );
    }
}

export default StatChiffre;
