import Header from "../components/Header"
import Footer from "../components/Footer"

export default function WebsiteLayout(props){
    return (
        <>
        <Header/>
        {props.children}
        <Footer/>
        </>
    )
}