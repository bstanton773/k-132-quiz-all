import Navigation from "./components/Navigation"
import AllQuestions from "./views/AllQuestions"
import Container from 'react-bootstrap/Container';

type Props = {}

export default function App({}: Props) {
    return (
        <>
            <Navigation />
            <Container>
                <AllQuestions />
            </Container>
        </>
    )
}