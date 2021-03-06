import "./featuredInfo.css"
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function FeaturedInfo2() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Total de marcas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">5</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cantidad Total <ClearAllIcon className="featuredIcon"/></span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">22</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vendidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">12</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Producto mas caro</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Logitech G Pro</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Ultimo Producto ingresado</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Hyperx Pulsefire Dart</span>
                    
                </div>
                
            </div>
        </div>
    )
}
