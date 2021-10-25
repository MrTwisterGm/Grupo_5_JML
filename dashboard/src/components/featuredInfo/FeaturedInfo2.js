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
                    <span className="featuredMoney">15</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vendidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">8</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Producto mas caro</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Asus Tuf</span>
                    
                </div>
                
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Ultimo Producto ingresado</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">Logitech G213</span>
                    
                </div>
                
            </div>
        </div>
    )
}
