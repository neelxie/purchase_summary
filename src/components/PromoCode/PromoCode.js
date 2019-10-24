import React, { Component } from "react";
import {Card, Row, Collapse, Col, Form, FormGroup, FormLabel, FormControl, Button} from "react-bootstrap";
import {connect} from 'react-redux';
import handleChange from './../../actions/promoCodeActions';

export default class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ''
    };
  }
  render(){
    return (
      <div>
        <Button 
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}

        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="FormInLineName">
                      <FormLabel>Promo Code</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}>
                      </FormControl>
                    </FormGroup>
                    <Button
                      block
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                      >

                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    )
  }
}
