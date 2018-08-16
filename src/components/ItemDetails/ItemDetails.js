import React from 'react';
import { Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

class ItemDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
            <Button
                className="item-details-button"
                bsStyle="link"
                onClick={() => this.setState({open: !this.state.open})}>
                {this.state.open === false ? `See` : `Hide`} Item Details
                {this.state.open === false ? `+` : `-`}
            </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Well>
                            <Media>
                                <Media.Left>
                                    <img
                                        width={100}
                                        height={100}
                                        alt="thumbnail"
                                        src="https://i5.walmartimages.com/asr/e9f682c4-8513-46c9-9a55-bd09faee1b98_1.1df9f1c6cd832cd1b150e4afadf88d55.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                                </Media.Left>
                                <Media.Body>
                                    <p>High Precision gaming PC</p>
                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong>{`$${this.props.price}`}</strong> <br/>
                                            <strong className="price-strike">{`$${this.props.price}`}</strong>
                                        </Col>
                                        <Col md={6}>Qty: 1</Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        </Well>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default ItemDetails;