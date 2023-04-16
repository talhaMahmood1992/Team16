/* eslint-disable indent */
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Media } from "../MediaData";
import { mediaData } from "../MediaData";
import ListUI from "./ListUI";
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
                          x.title.includes(text) || x.type.includes(text)
                  )
              );
    }
    const [text, setName] = useState<string>("");
    const [list, setList] = useState<Media[]>(mediaData);
    return (
        <div>
            <Form.Group controlId="formCorrectAnswer">
                <Form.Label>Search for Media</Form.Label>
                <Form.Control
                    value={text}
                    onChange={(e) => {
                        updateName(e as React.ChangeEvent<HTMLInputElement>);
                        setListHelper(e.target.value);
                    }}
                />
            </Form.Group>
            <div>
                <ListUI MediaData={list}></ListUI>
            </div>
        </div>
    );
}
