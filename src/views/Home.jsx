import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center p-5">
            <h1>Bienvenido a <span className="fw-bold">Happy Cake</span></h1>
            <p>Los mejores Happy Precios!.</p>
            <p className="cake">🎂</p>
        </Container>
    )
}

export default Home;