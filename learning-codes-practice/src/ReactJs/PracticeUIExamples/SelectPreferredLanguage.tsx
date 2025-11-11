import { useEffect, useState } from "react";
import { Card, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const languageOptions = [
    { name: 'English', value: 'English', lngCode: 'EN' },
    { name: 'Hindi', value: 'Hindi', lngCode: 'HN' },
    { name: 'French', value: 'French', lngCode: 'FR' }
];

const textInMultipleLanguage = {
    mainPage: {
        EN: "This is simple text.",
        HN: "यह एक साधारण पाठ है।",
        FR: "Ceci est un texte simple."
    },
    aboutPage: {
        EN: "About us page.",
        HN: "हमारे बारे में पृष्ठ।",
        FR: "Page à propos de nous."
    }
};


const SelectPreferredLanguage = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('EN')
    const [selectedLanguageText, setSelectedLanguageText] = useState<string>('');

    useEffect(() => {
        if (selectedLanguage) {
            const text = textInMultipleLanguage.mainPage[selectedLanguage as keyof typeof textInMultipleLanguage.mainPage];
            setSelectedLanguageText(text);
        }
    }, [selectedLanguage]);

    const handleSelectLanguage = (e: any) => {
        setSelectedLanguage(e.target.value);
    };



    return (
        <>
            <Container>
                <Card>
                    <Card.Header>
                        <p>Function to select preferred languages of own choice.</p>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <FormGroup>
                                <FormLabel>Select Language</FormLabel>
                                <FormControl
                                    as="select"
                                    name="language"
                                    value={selectedLanguage}
                                    onChange={handleSelectLanguage}
                                >
                                    {languageOptions && languageOptions.map((language) => (
                                        <option key={language.lngCode} value={language.lngCode}>
                                            {language.name}
                                        </option>
                                    ))}
                                </FormControl>
                            </FormGroup>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <p>Selected language code is : {selectedLanguage}</p>
                        <p>Slected text in slected language code</p>
                        <p><strong>{selectedLanguageText}</strong></p>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default SelectPreferredLanguage;