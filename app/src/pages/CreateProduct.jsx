import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { useState } from "react";
import { useNavigate } from "react-router";

import { register } from "../services/authServices";

const CreateProduct = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        price: "",
        name: "",
        description: "",
        stock: "",
    });

    const [photos, setphotos] = useState([]);

    const [validated, setvalidated] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //TODO: finish this file
    const handleChangePhotos = (e) => {
        const files = Array.from(e.target.files);
        console.log(files);

        setphotos(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setvalidated(true);
        } else {
            try {
                const { data } = await register(formData);
                console.log(data);
                navigate("/login");
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <Container>
            <h1>Creación de producto</h1>
            <Form
                noValidate
                className="mt-5"
                onSubmit={handleSubmit}
                validated={validated}
            >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            name="name"
                            required
                            type="text"
                            placeholder="Nombre de producto"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            name="price"
                            required
                            type="number"
                            placeholder="$10.0"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            name="description"
                            required
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            name="stock"
                            required
                            type="number"
                            placeholder="0"
                            value={formData.stock}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Fotos del producto</Form.Label>
                        <Form.Control
                            name="photos"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            multiple
                            onChange={handleChangePhotos}
                        />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Crear producto
                </Button>
            </Form>
        </Container>
    );
};

export default CreateProduct;
