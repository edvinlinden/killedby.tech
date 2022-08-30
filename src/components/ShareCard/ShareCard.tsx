import useScrollPosition from "@hooks/useScrollPosition";
import React, { useEffect, useState } from "react";
import styles from "./ShareCard.module.scss";

export async function copyTextToClipboard(text: string) {
	if ("clipboard" in navigator) {
		return await navigator.clipboard.writeText(text);
	} else {
		return document.execCommand("copy", true, text);
	}
}

const ShareCard = () => {
	const COPY_LINK_TEXT = "Copy the link";
	const scrollPosition = useScrollPosition();
	const [isClosed, setIsClosed] = useState(false);
	const [copyLinkText, setCopyLinkText] = useState(COPY_LINK_TEXT);
	const shouldShowShareCard = scrollPosition > 4000 && !isClosed;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopyLinkText(COPY_LINK_TEXT);
		}, 5000);

		return () => {
			clearTimeout(timeout);
		};
	}, [copyLinkText]);

	return (
		shouldShowShareCard && (
			<div className={styles.shareCard}>
				<div>
					<h3>👋 Hey there! Help me spread the tech history</h3>
					<p>
						Let your friends know about the Zune, Apple's iPod Socks
						and all the other discontinued products.
					</p>
				</div>
				<div className={styles.linkContainer}>
					<a
						onClick={() => {
							copyTextToClipboard(
								window.location.href + "?ref=sharecard"
							);
							setCopyLinkText("Copied!");
						}}
					>
						<img
							src="/images/link-icon.svg"
							alt="Link icon"
							width="24"
							height="24"
							className={styles.logo}
							title="Link icon"
						/>{" "}
						{copyLinkText}
					</a>
					<a
						href="https://twitter.com/intent/tweet?text=Do%20you%20remember%20the%20Zune%3F%20How%20about%20Apple%27s%20iPod%20Socks%3F%20Discover%20the%20history%20of%20discontinued%20products%20at%20killedby.tech"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/images/twitter-logo.svg"
							alt="Twitter logo"
							width="24"
							height="24"
							className={styles.logo}
							title="Twitter logo"
						/>{" "}
						Share on Twitter
					</a>
					<a
						onClick={() => setIsClosed(true)}
						className={styles.noThanksLink}
					>
						No thanks
					</a>
				</div>
			</div>
		)
	);
};

export default ShareCard;
