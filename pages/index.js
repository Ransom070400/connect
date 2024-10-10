import { ConnectWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<ConnectsuiWallet theme='dark' />
		</div>
	);
}
