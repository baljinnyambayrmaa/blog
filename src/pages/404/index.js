import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
 export const PageNotFound=() => {
    return (
        <div className="flex flex-col gap-[100px]">
            <Header/>
            <div className="flex justify-center">
                <div className="flex w-[642px] h-[208px] gap-[90px]">
                    <p className="text-[74px] workSansText">404</p>
                    <div className="flex flex-col workSansText ">
                        <p className="text-[24px]">Page Not Found</p>
                        <p className="text-[18px]">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                        <div className="text-[14px] workSansText">
                            <button>Back To Home</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
 }