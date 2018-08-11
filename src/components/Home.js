import React from 'react';
import {Jumbotron, NavLink } from 'reactstrap';
import { Line } from 'rc-progress';
import {userSignedIn} from "../utils";
import Login from './Login';

class Home extends React.Component
{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h1 className="display-3">Hello, my dear Calory Counter!</h1>
                    <p className="lead">
                        Let me guess - you're here to add some products for mobile app or what?
                        Hurry up! Add some products - make people's life better!
                    </p>
                    <hr className="my-2" />
                    { userSignedIn() ?
                        <div>
                            <h3>Products {this.props.currentAmount} / {this.props.totalAmount}</h3>
                                <Line percent={this.props.progressPercent} strokeWidth="1" strokeColor="#2db7f5" />
                                <hr className="my-2"/>
                            <NavLink href='/products/new' className='btn btn-success'>Add Product</NavLink>
                        </div>
                        : <Login /> }
                </Jumbotron>
            </div>
        );
    }
}

export default Home;