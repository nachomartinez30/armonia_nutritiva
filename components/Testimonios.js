import Testimonio from './Testimonio';
const Testimonios = ({ data }) => {
    return (
        <section className="text-cafe-dark body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-8xl script-font font-bold text-rosa mb-12 text-center">Testimonios</h1>
                <div className="flex flex-wrap m-4">
                    {data && data.map(testimonio => <Testimonio data={testimonio} />)}
                </div>
            </div>
        </section>
    );
}

export default Testimonios;