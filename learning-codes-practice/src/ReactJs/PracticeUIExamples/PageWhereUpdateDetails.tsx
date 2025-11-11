import { useState } from "react";
import { Container, Card, Row, Col, Button, FormControl } from "react-bootstrap";
import { PencilSquare, Trash, Check, X } from "react-bootstrap-icons";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const PageWhereSeeOrUpdateDetails = () => {
  const [user, setUser] = useState<User>({
    id: "001",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 555 123 4567",
  });

  // Track which field is currently being edited
  const [editingField, setEditingField] = useState<keyof User | null>(null);
  const [tempValue, setTempValue] = useState<string>("");

  const startEdit = (field: keyof User) => {
    setEditingField(field);
    setTempValue(user[field]);
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue("");
  };

  const saveEdit = (field: keyof User) => {
    // Example: Replace with GraphQL mutation
    console.log(`Save ${field}: ${tempValue}`);

    // Update local state
    setUser((prev) => ({ ...prev, [field]: tempValue }));
    setEditingField(null);
    setTempValue("");
  };

  const handleDelete = (field: keyof User) => {
    if (!window.confirm(`Are you sure you want to delete ${field}?`)) return;

    // Example: Replace with GraphQL mutation
    console.log(`Delete ${field}`);

    setUser((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Container className="mt-4">
      <Card style={{ width: "40rem", margin: "auto" }}>
        <Card.Header>
          <h5>User Personal Details</h5>
        </Card.Header>
        <Card.Body>
          {Object.entries(user).map(([key, value]) =>
            key === "id" ? null : (
              <Row key={key} className="align-items-center mb-3">
                <Col xs={4}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                </Col>
                <Col xs={6}>
                  {editingField === key ? (
                    <FormControl
                      value={tempValue}
                      onChange={(e) => setTempValue(e.target.value)}
                    />
                  ) : (
                    <span>{value || <em>Not provided</em>}</span>
                  )}
                </Col>
                <Col xs={2} className="text-end d-flex justify-content-end">
                  {editingField === key ? (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => saveEdit(key as keyof User)}
                      >
                        <Check />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={cancelEdit}
                      >
                        <X />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="me-2"
                        onClick={() => startEdit(key as keyof User)}
                      >
                        <PencilSquare />
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(key as keyof User)}
                      >
                        <Trash />
                      </Button>
                    </>
                  )}
                </Col>
              </Row>
            )
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PageWhereSeeOrUpdateDetails;
