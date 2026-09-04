import { trashCan } from "@/app/assets/fontAwesome";
import ProductInfo from "@/app/components/productInfoCard";

export default function PendingOrders(){
    return(
        <ProductInfo
        imgSrc="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"
        allParagraphTextsKey={["status", "order-id", "name", "description", "qty", "cost"]}
        allParagraphTexts={["Ongoing ⭕","746583837475858","sung-jinwoo","this product does this this that and that", "5", "$50"]}
        hasEditDeleteIcon={trashCan}
        />
    );
}