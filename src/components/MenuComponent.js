import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

    function RenderMenuItem({ dish, onClick}) {
        return (
            <Card onClick={() => onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
            </Card>
        );
    }

//So, the onclick which was sent in by the main component,
// that I am parsing in to the render menu component as the function here. 
//So, I'm just parsing in the function from here into the render menu item component, that does change. 
//I am now making use of the Render menu item functional components to construct the view for each dish 
//and this in turn is inside the div which is going to construct a list of all the dishes, 
//and on that I am now making use of within here to render the menu item. 

    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick} />  
                </div>
            );
        });
        console.log('Menu Component render is invoked');


        return (
            <div className="container">
                <div className="row">
                     {menu}
                </div>
            </div>

        );
    }


export default Menu;