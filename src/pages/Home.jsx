import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="page">
            <h1>Welcome Estate Agent App</h1>
            <p>
                Browser properties , Search by criteria, and save your Favourites
            </p>

            <Link to="/search">Go to Search</Link>
        </div>
    );
};

export default Home;