import "./Home.css"; 

const Home = () => {
    return (
        <section className="home-feature-section">
            <h2>Why Choose Our Platform?</h2>

            <div className="home-feature">
                <div className="feature-card">
                    <h3>Advanced Property Search</h3>
                    <p>
                    Easily search properties using filters such as price, location,
                    property type, and number of bedrooms.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>Save Your Favourites</h3>
                    <p>
                        Add properties to your favourites list and manage them across
                        different pages of the application.
                    </p>
                </div>

                <div className="feature-card">
                    <h3>Client-Side Performance</h3>
                    <p>
                        Built as a single-page application using React, ensuring fast
                        navigation without page reloads.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Home;