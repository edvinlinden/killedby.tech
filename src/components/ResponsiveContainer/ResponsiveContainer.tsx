import React from "react";
import styles from "./ResponsiveContainer.module.scss";

const ResponsiveContainer: React.FC<{ children: any }> = ({
	children,
	...props
}) => {
	return (
		<div className={styles.responsiveContainer} {...props}>
			{children}
		</div>
	);
};

export default ResponsiveContainer;
