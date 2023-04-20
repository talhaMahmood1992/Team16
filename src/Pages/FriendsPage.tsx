import React from "react";
import { useState } from "react";
export const FriendsPage = (): JSX.Element => {
    const [widgets, setWidgets] = useState<string[]>([]);
    function handleOnDrag(e: React.DragEvent, widgetType: string) {
        e.dataTransfer.setData("widgetType", widgetType);
    }
    function handleOnDrop(e: React.DragEvent) {
        const widgetType = e.dataTransfer.getData("widgetType") as string;
        setWidgets([...widgets, widgetType]);
    }
    function handleDragOver(e: React.DragEvent) {
        e.preventDefault();
    }
    function widgetToElement(widget: string, index: number) {
        return (
            <div className="dropped-widget" key={index}>
                {widget}
            </div>
        );
    }
    return (
        <section className="page">
            <h2 className="heading-secondary">Friends List</h2>
            <h3>Temporary Drag and Drop will be here:</h3>
            <p>Drag These:</p>
            <div>
                <div draggable onDragStart={(e) => handleOnDrag(e, "Movie A")}>
                    Widget A
                </div>
                <div draggable onDragStart={(e) => handleOnDrag(e, "Movie B")}>
                    Widget B
                </div>
                <div draggable onDragStart={(e) => handleOnDrag(e, "Movie C")}>
                    Widget C
                </div>
            </div>
            <br />
            <div onDrop={handleOnDrop} onDragOver={handleDragOver}>
                {/*In the future we will place an image like a folder
                to drag items into rather than displaying them, but this
                display helps to show functionality */}
                <p>Drop Below:</p>
                {widgets.map((widget, index) => widgetToElement(widget, index))}
            </div>
        </section>
    );
};
