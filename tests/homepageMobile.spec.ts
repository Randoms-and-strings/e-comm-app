import {test, expect} from "playwright/test";




test.describe("homepage navbar", ()=>{
    // test.use({
    //     ...devices['Pixel 5'],
    //     ...devices["iphone 14"],
    //     ...devices["iphone 15 Pro Max"],
    //     ...devices["Pixel 7"],
    //     ...devices["Galaxy S24"],
    //     ...devices["Galaxy S9+"],
    //     ...devices["ipad Mini"],
        
    // });

    test.beforeEach(async ({page})=>{
        await page.goto("http:localhost:3000/");
    });
    
    
    test("desktop navbar present", async ({page, isMobile})=>{
        test.skip(isMobile, "desktop only tests");
        
        await expect(page.getByText("Home")).toBeInViewport();
        await expect(page.getByText("Profile")).toBeInViewport();
        await expect(page.getByText("Messages")).toBeInViewport();
        await expect(page.getByText("Logout")).toBeInViewport();
        await expect(page.getByPlaceholder("Search")).toBeInViewport();
    });

    test("mobile navbar present", async ({page, isMobile})=>{
        test.skip(!isMobile, "mobile only tests");
        

        // hamburger button present
        const hamburger = page.getByTitle("mobile->hamburger to display navigation");
        await expect(hamburger).toBeInViewport();
       

        await expect(page.getByText("Home")).toBeHidden();
        await expect(page.getByText("Profile")).toBeHidden();
        await expect(page.getByText("Messages")).toBeHidden();
        await expect(page.getByText("Logout")).toBeHidden();
        await expect(page.getByPlaceholder("Search")).toBeInViewport();
        
        // hamburger button shows nav
        hamburger.click();
        
        await expect(page.getByText("Home")).toBeInViewport();
        await expect(page.getByText("Profile")).toBeInViewport();
        await expect(page.getByText("Messages")).toBeInViewport();
        await expect(page.getByText("Logout")).toBeInViewport();
        await expect(page.getByPlaceholder("Search")).toBeVisible();

        
    });

});
