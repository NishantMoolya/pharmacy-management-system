import HeroImg from "../assets/images/hero.jpg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";

export default function Contact() {
    return (
        <main>
            <div
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100%",
                }}
                className="w-full h-screen font-workSans relative flex flex-col justify-center items-center"
            >
                <div className="absolute text-white z-0 opacity-65 bg-black w-full h-screen top-0 left-0"></div>
                <NavBar />
                {/* Hero Section  */}
                <section className="w-full text-center flex flex-col justify-center items-center h-full relative z-10">
                    <div className="w-[690px] mx-auto">
                        <h1 className="text-white text-[20px] tracking-normal -mb-6">Home / Patients</h1>
                        <p className="text-white font-bold text-6xl tracking-wide mt-6">DashBoard & Stats</p>
                        <div className="flex justify-center mt-8 p-5">
                            <button className="bg-green-600 border-2 border-green-600 tracking-wider text-white text-xl font-workSans rounded w-fit flex items-center justify-center py-2 px-5 hover:bg-transparent hover:border-2 hover:border-green-600 transition-all ease-in btn-info font-normal">Get Started</button>
                            <p className="tracking-wider text-white font-workSans text-base w-fit flex items-center justify-center py-4 px-5 btn-info ml-4 cursor-pointer font-medium font-workSans">Learn More</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer Section  */}
            <section className="w-screen h-full px-5 py-0 flex flex-col gap-5 items-center bg-white">
                <div>
                    <div className="w-screen">
                        <Footer />
                    </div>
                </div>
            </section>
            {/* Go To Top Component  */}
            <GoToTop />
        </main>
    )
}