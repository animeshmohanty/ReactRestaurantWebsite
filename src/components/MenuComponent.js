import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

    function RenderMenuItem({ dish, onClick}) {
        return (
            <Card>
                <Link to= {`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
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
        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />  
                </div>
            );
        });
         
        if(props.dishes.isLoading) {
            return (
                <div className="container">
                  <div className="row">
                    <Loading /> 
                  </div>
                </div>
              );
            }
        else if(props.dishes.errMess) {
            return (
               <div className="container">
                 <div className="row">
                   <h4>{props.dishes.errMess}</h4> 
                 </div>
               </div>
              );
            }    
        else
          return ( 
            <div className="container">
                <div clasName="row">
                    <Breadcrumb>
                       <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                       <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                     {menu}
                </div>
            </div>
          );
    }


export default Menu;