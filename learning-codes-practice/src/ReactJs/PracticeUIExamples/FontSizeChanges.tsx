import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";


const ChangeFontSize = () => {
    const [initialFontSize, SetFontSize] = useState<any>();
    const maxLimitOfFontSize = 50;
    const minLimitOfFontSize = 10;

    const functionToChangeFontSize = (type: String) => {
        if (type === 'inc' && initialFontSize < maxLimitOfFontSize) {
            SetFontSize(initialFontSize + 10)
        }
        if (type === 'dec' && initialFontSize > minLimitOfFontSize) {
            SetFontSize(initialFontSize - 10)
        }
        if (type === '') {
            SetFontSize(20)
        }
    }

    return (
        <>
            <Container>
                <Card>
                    <Card.Header>Change Font Size on Click Buttons</Card.Header>
                    <Card.Body>
                        <div>
                            <Button style={{ marginRight: '2px' }} className="gap-4 ml-3" onClick={() => functionToChangeFontSize('inc')}>
                                A+
                            </Button>
                            <Button style={{ marginRight: '2px' }} className="gap-4 ml-3" onClick={() => functionToChangeFontSize('')}>
                                A
                            </Button>
                            <Button style={{ marginRight: '2px' }} className="gap-4 ml-3" onClick={() => functionToChangeFontSize('dec')}>
                                A-
                            </Button>
                        </div>
                        <div className="text">
                            <p className="changeFontSizeOfText" style={{ fontSize: `${initialFontSize}px` }}>
                                This is the normal text
                            </p>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <p>
                            Current font Size of text: {initialFontSize}
                        </p>
                    </Card.Footer>
                </Card>
            </Container>

        </>
    )
}

export default ChangeFontSize;