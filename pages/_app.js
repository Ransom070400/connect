import {
	ThirdwebProvider,
	coinbaseWallet,
	embeddedWallet,
	localWallet,
	metamaskWallet,
	phantomWallet,
	rainbowWallet,
	trustWallet,
	walletConnect,
	zerionWallet,
	suiwallet,
} from '@thirdweb-dev/react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>thirdweb ConnectWallet</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>

			<ThirdwebProvider
				activeChain='sui'
				clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
				supportedWallets={[
					embeddedWallet(),
					metamaskWallet(),
					coinbaseWallet(),
					walletConnect(),
					rainbowWallet(),
					zerionWallet(),
					trustWallet(),
					phantomWallet(),
					localWallet(),
					suiwallet(),
				]}
			>
				<Component {...pageProps} />
			</ThirdwebProvider>
		</>
	);
}

export default MyApp;
