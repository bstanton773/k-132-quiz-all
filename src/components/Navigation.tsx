import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


type Props = {}
export default function Navigation({}: Props) {
    return (
        <Navbar className='bg-primary' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand>Quiz Up</Navbar.Brand>
            </Container>
        </Navbar>
    )
}