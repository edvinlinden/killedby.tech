import React from "react";
import styles from './Products.module.scss';

export default Product = ({product}) => {
    const {name, dateOpen, dateClose, link, description, type} = product;
    return(<div className={styles.product}>
        <h3 class={styles.name} >{name}</h3>
        <p class={styles.years} title={`${dateOpen} to ${dateClose}`}>{dateOpen.substr(0,4)} – {dateClose.substr(0,4)}</p>
        <p>{description}</p>
        <p><a href={`${link}`}>Read more</a></p>
    </div>);
}