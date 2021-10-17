import "./featuredInfo.css"
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function FeaturedInfo() {
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
                    <span className="featuredMoney">25</span>
                    
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
}
