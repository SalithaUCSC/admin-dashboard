import Card from "../components/Card";

const Home = () => {
    return (
        <div className="main-content">
            <section className="section">
                <div className="section-header">
                    <h1>Home</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <Card/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <Card/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <Card/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;