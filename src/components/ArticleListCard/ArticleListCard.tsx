import React from "react";
import styles from "./ArticleListCard.module.scss";

interface ArticleListCardInterface {
	link: string;
	title: string;
	description: string;
}

const ArticleListCard: React.FC<ArticleListCardInterface> = ({
	link,
	title,
	description,
}) => {
	return (
		<a className={styles.articleCard} href={link} title={title}>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.readMore}>Read more</div>
		</a>
	);
};

const ArticleList: React.FC<{ children: any }> = ({ children }) => {
	return <div className={styles.articleList}>{children}</div>;
};

export { ArticleList, ArticleListCard };
