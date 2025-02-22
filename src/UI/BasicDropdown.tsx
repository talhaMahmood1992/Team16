import React, { useEffect, useRef, useState } from "react";
import classes from "./BasicDropdown.module.css";
import { IoIosArrowBack } from "react-icons/io";

interface BasicDropdownProps {
    title: string;
    items: string[];
    onClick: (item: any) => void /* eslint-disable-line */;
}

export const BasicDropdown = ({
    title,
    items,
    onClick
}: BasicDropdownProps): JSX.Element => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const menuRef = useRef(document.createElement("div"));

    const dropdownMenuStyle = dropdownOpen
        ? `${classes.dropdown_menu} ${classes.active}`
        : `${classes.dropdown_menu} ${classes.inactive}`;

    const menuTriggerStyle = dropdownOpen
        ? `${classes.menu_trigger} ${classes.active_icon}`
        : `${classes.menu_trigger}`;

    const toggleDropdownHandler = (): void => {
        setDropdownOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handler = (e: any) /* eslint-disable-line */ => {
            if (!menuRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div
            className={classes.dropdown_wrapper}
            ref={menuRef}
            data-testid="basic-dropdown"
        >
            <button
                className={menuTriggerStyle}
                onClick={toggleDropdownHandler}
            >
                {title} <IoIosArrowBack className={classes.icon} />
            </button>

            <div className={dropdownMenuStyle}>
                {items.map((item) /* eslint-disable-line */ => (
                    <DropdownItem
                        text={item}
                        toggleDropdownHandler={toggleDropdownHandler}
                        key={item}
                        onClick={onClick}
                    />
                ))}
            </div>
        </div>
    );
};

interface DropdownItemProps {
    onClick: (item: string) => void;
    text: string;
    toggleDropdownHandler: () => void;
}

const DropdownItem = ({
    onClick,
    text,
    toggleDropdownHandler
}: DropdownItemProps): JSX.Element => {
    const clickHandler = () => {
        if (onClick) {
            onClick(text);
        }
        toggleDropdownHandler();
    };

    return (
        <a onClick={clickHandler} className={classes.dropdownItem}>
            {text}
        </a>
    );
};
