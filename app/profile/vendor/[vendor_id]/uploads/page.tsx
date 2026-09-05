import ProductInfo from "@/app/components/productInfoCard";
import { trashCan } from "@/app/assets/fontAwesome";
export default function Uploads(){
    return(
        <ProductInfo
        imgSrc="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"
        allParagraphTextsKey={["name","description", "qty", "cost"]}
        allParagraphTexts={["sung-jinwoo","this product does this this that and that", "5", "$50"]}
        hasEditDeleteIcon={trashCan}
        />
    );
}