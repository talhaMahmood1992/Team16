/* eslint-disable indent */
import React, { useState } from "react";
import { Media } from "../MediaData";
import { mediaData } from "../MediaData";
import ListUI from "./ListUI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
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
                <Row className="justify-content-md-center">
                    <Col xs lg="2"></Col>
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
                    <Col xs lg="2"></Col>
                </Row>
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
    logo: {
        backgroundColor: "white" // Set the background color for the logo
    }
};
