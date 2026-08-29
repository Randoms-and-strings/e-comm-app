import searchProductSheet from "../../styles/search-products.module.css";

export default function ProductsSearch(){
    return (
        <div>
            <a>
            <div className={searchProductSheet.productContainer}>
                <div className={searchProductSheet.imgContainer}>
                    <img 
                    src="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                    {/* TODO: remember to scale products photo down to 200x200px */}
                </div>

                <div className={searchProductSheet.textsContainer}>
                    <div>
                        <h3>Product Name</h3>
                        <p>View product info....</p>
                    </div>
                    
                </div>
            </div>
            </a>

            <div className={searchProductSheet.productContainer}>
                <div className={searchProductSheet.imgContainer}>
                    <img 
                    src="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"/>
                    {/* TODO: remember to scale products photo down to 200x200px */}
                </div>

                <div className={searchProductSheet.textsContainer}>
                    <div>
                        <h3>Product Name</h3>
                        <p>View product info....</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );

}