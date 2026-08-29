import searchVendorSheet from "../../styles/search-vendor.module.css"

export default function Search(){
    return (
        <div>
            <a>
            <div className={searchVendorSheet.container}>
                <h3>A Vendor Name</h3>
                <p>View profile details....</p>
            </div>
            </a>
            <a>
            <div className={searchVendorSheet.container}>
                <h3>A Vendor Name</h3>
                <p>View profile details....</p>
            </div>
            </a>
        </div>
    );
}