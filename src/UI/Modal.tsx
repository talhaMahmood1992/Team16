import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
    hideSettingsHandler: () => void;
}

interface ModalOverlayProps {
    children: JSX.Element[];
    className: string;
}

interface ModalProps {
    className: string;
    children: JSX.Element[];
    hideSettingsHandler: () => void;
}

const Backdrop = ({ hideSettingsHandler }: BackdropProps): JSX.Element => {
    return <div className={classes.backdrop} onClick={hideSettingsHandler} />;
};

const ModalOverlay = ({
    children,
    className
}: ModalOverlayProps): JSX.Element => {
    return <div className={`${classes.modal} ${className}`}>{children}</div>;
};

const portalElement: HTMLElement = document.getElementById("overlays")!;

const Modal = ({
    className,
    hideSettingsHandler,
    children
}: ModalProps): JSX.Element => {
    return (
        <div className={className}>
            {createPortal(
                <Backdrop hideSettingsHandler={hideSettingsHandler} />,
                portalElement
            )}
            {createPortal(
                <ModalOverlay className={className}>{children}</ModalOverlay>,
                portalElement
            )}
        </div>
    );
};

export default Modal;
