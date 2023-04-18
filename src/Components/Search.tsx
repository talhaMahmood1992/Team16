/* eslint-disable indent */
import React, { useState } from "react";
import { Media } from "../MediaData";
import { mediaData } from "../MediaData";
import ListUI from "./ListUI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
//import classes from "../index";
//import classes from "../UI/SearchBar.module.css";
export function SearchBar(): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function setListHelper(text: string) {
        text === ""
            ? setList(mediaData)
            : setList(
                  mediaData.filter(
                      (x: Media): boolean =>
                          x.title.toLowerCase().includes(text.toLowerCase()) ||
                          x.type.toLowerCase().includes(text.toLowerCase()) ||
                          x.yearReleased.toString().includes(text)
                  )
              );
    }
    const [, setName] = useState<string>("");
    const [list, setList] = useState<Media[]>(mediaData);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateName(event as React.ChangeEvent<HTMLInputElement>);
        setListHelper(event.target.value);
    };
    return (
        <div>
            {" "}
            <h1 style={{ textAlign: "center" }} className="heading-primary">
                Browse Media
            </h1>
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="1"></Col>
                        <Col md="auto">
                            <Row>
                                <Col md="auto">
                                    <Form>
                                        <Form.Group>
                                            <Form.Control
                                                placeholder="Search Media"
                                                className="rounded-pill"
                                                style={styles.search}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md="auto">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="secondary"
                                            className="rounded-pill"
                                            style={styles.sort}
                                        >
                                            Sort Media
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu style={styles.dropdown}>
                                            <Dropdown.Item
                                                onClick={() =>
                                                    alert("Alphabetically")
                                                }
                                            >
                                                Alphabetically
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() =>
                                                    alert("High to Low Ratings")
                                                }
                                            >
                                                High to Low Ratings
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() =>
                                                    alert("Low to High Ratings")
                                                }
                                            >
                                                Low to High Ratings
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs lg="1"></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <ListUI MediaData={list}></ListUI>
            </div>
        </div>
    );
}

const styles = {
    search: {
        fontSize: "22px",
        padding: "10px 10px 10px 20px"
    },
    sort: {
        fontSize: "22px",
        padding: "10px 40px 10px 20px"
    },
    dropdown: {
        fontSize: "15px",
        padding: "10px 10px 10px 20px"
    },
    logo: {
        backgroundColor: "white" // Set the background color for the logo
    }
};
