import React, { Component,useEffect } from 'react';
import "./featuredInfo.css"
import ClearAllIcon from '@mui/icons-material/ClearAll';


class FeaturedInfo extends Component {

    
    constructor(props) {
        super(props);   
        this.state = {
            total: 0,
            category: 0
        }
    }
    
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    
    

    componentDidMount() {
        this.apiCall("http://localhost:3001/apiProducts/total", this.totalProductos);
        this.apiCall("http://localhost:3001/apiProducts/categories", this.totalCategorias)
        

    }

    totalProductos = (data) => {
        
        this.setState({
            total: data.meta.total 
           
        })
    }
    totalCategorias = (data) => {
        this.setState({
            category: data.meta.category,
        })
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total de marcas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">10</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cantidad Total <ClearAllIcon className="featuredIcon"/></span>
                <div className="featuredMoneyContainer">
                <span className="featuredMoney">{this.state.total}</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vendidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">10</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Producto mas caro</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Hyperx</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Ultimo Producto ingresado</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Hyperx</span>
                    
                </div>
                
            </div>
        </div>
    )
}}
export default FeaturedInfo;