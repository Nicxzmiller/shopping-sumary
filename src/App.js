import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ItemDetails from './components/ItemDetails/ItemDetails';
import './App.css';
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from './components/Pickupsavings/PickupSavings';
import Taxes from './components/Taxes/Taxes';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import PromoCodeDiscount from './components/PromoCode/PromoCode';
import { connect } from 'react-redux';
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            total:400,
            PickupSavings: -3.85,
            taxes: 0,
            estimatedTotal:0,
            disablePromoButton:false
        };
    }

    componentDidMount = () => {
        this.setState({
            taxes: (this.state.total + this.state.PickupSavings) * 0.0875
        },
            function () {
                this.setState({
                    estimatedTotal:
                    this.state.total + this.state.PickupSavings + this.state.taxes
                });
            }
            );
    };

    giveDiscountHandler = () => {
        if(this.props.promoCode === 'DISCOUNT'){
            this.setState({
                estimatedTotal: this.state.estimatedTotal * 0.9
            },
                function(){
                this.setState({
                    disablePromoButton: true
                    });
                });
        }
    };

  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
            <Subtotal price={this.state.total.toFixed(2)}/>
            <PickupSavings price={this.state.PickupSavings}/><br/>
            <Taxes taxes={this.state.taxes.toFixed(2)} />
            <hr/>
            <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
            <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/>
            <hr/>
            <PromoCodeDiscount
                giveDiscount={ () => this.giveDiscountHandler()}
                isDisabled={this.state.disablePromoButton}
            />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App);
