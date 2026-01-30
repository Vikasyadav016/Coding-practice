import { Card, Container } from "react-bootstrap";

const CheckEvenOrOdd = () => {

    const functionToCheckEvenOrOdd = (number: number) => {
        if (number % 2 === 0) {
            return true;
        } else {
            return false
        }
    }

    return (
        <Container>
            <Card>
                <Card.Header> Check number is odd or even.</Card.Header>
                <Card.Body></Card.Body>
                <Card.Footer></Card.Footer>
            </Card>
        </Container>
    )
}
export default CheckEvenOrOdd;