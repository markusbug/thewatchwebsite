import Web3Modal from "web3modal-coinbase";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import WalletLink from "walletlink";





const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: "686f1deb990f477ba111bc2fb00cbb15" // required
        }
    },
    fortmatic: {
        package: Fortmatic, // required
        options: {
            key: "pk_live_87D11E714CB8036F" // required
        }
    },
    portis: {
        package: Portis, // required
        options: {
            id: "346c8013-e99b-4738-8cb3-d5803b9da247" // required
        }
    },
    walletlink: {
        package: WalletLink, // required
        options: {
            appName: "DEMU", // required
            appLogoUrl: "https://bafybeic77wgionxvk5nvq27edguig643h4a2ec7d6l2plhncyvbdkwuj6q.ipfs.infura-ipfs.io", // optional - favicon is used if unspecified
            darkMode: false, // optional - false if unspecified
            // walletLinkUrl: "SERVER_URL", // optional - WalletLink server URL; for most, leave it unspecified
            jsonRpcUrl: "https://mainnet.infura.io/v3/686f1deb990f477ba111bc2fb00cbb15", // required
            chainId: 5 // optional - 1 is used if unspecified
        }
    }
};
let web3Modal;
if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
        chainId: 137, // optional
        cacheProvider: true, // optional
        providerOptions // required
    });
}



export { web3Modal };