import classes from "./Footer.module.css";

const Footer = ({ listLength, clear, mode, query, setQuery }) => {
    const footerClasses = [classes.footer];

    if (mode === "light") {
        footerClasses.push(classes.light);
    }

    return (
        <div className={footerClasses.join(" ")}>
            <div className={classes.footer__items__counter}>
                {listLength} items left
            </div>
            <div className={classes.footer__sort__queries}>
                <p
                    className={query === "all" ? `${classes.query_active}` : ""}
                    onClick={() => setQuery("all")}
                >
                    All
                </p>
                <p
                    className={query === "active" ? `${classes.query_active}` : ""}
                    onClick={() => setQuery("active")}
                >
                    Active
                </p>
                <p
                    className={query === "completed" ? `${classes.query_active}` : ""}
                    onClick={() => setQuery("completed")}
                >
                    Completed
                </p>
            </div>
            <div className={classes.footer__clear} onClick={() => clear()}>
                <p className={classes.footer__clear__text}>Clear Completed</p>
            </div>
        </div>
    );
};

export default Footer;
