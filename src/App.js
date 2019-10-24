import React, { Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }
  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    },
    function (){
      this.setState({
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
      })
    })
  }
  render(){
    return (
      <div className="containe">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.PickupSavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
          <hr />
          <PromoCode 
            giveDiscount={ () => this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}/>
        </Container>
      </div>
      
    );
  }
}

export default App;
