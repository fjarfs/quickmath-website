import BackToTop from "@/app/backToTop";

const { default: KonsultasiLayout } = require("./(konsultasi)")


const KonsultasiPage = () => {
    return (
        <>
            <KonsultasiLayout/>

            <BackToTop/>
        </>
    )
}

export default KonsultasiPage;