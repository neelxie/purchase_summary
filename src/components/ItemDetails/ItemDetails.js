import React, { Component } from "react";
import { Button, Collapse, Card, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="itemDetails"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    src="./../../img/myproject.jpeg"
                    alt="thumbnail"
                  />
                </Media.Left>
                <Media.Body>
                  <p>Essentials by OFM OSS-3035 Leather Gaming Chair Red</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}> Qty: 1 </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
