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
    return (
        <section className="page">
            <h2 className="heading-secondary">Friends List</h2>
            <h3>Temporary Drag and Drop will be here:</h3>
            <div className="widgets">
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Widget A")}
                >
                    Widget A
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Widget B")}
                >
                    Widget B
                </div>
                <div
                    className="widget"
                    draggable
                    onDragStart={(e) => handleOnDrag(e, "Widget C")}
                >
                    Widget C
                </div>
            </div>
            <div
                className="page"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                {widgets.map((widget, index) => (
                    <div className="dropped-widget" key={index}>
                        {widget}
                    </div>
                ))}
            </div>
        </section>
    );
};
