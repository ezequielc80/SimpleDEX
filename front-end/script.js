
const simpleDexAddress = "0x3Af7DC658faAC2A513f0CFA12DA90A939F560836";    //add SimpleDEX
const simpleDexAbi = [{"inputs":[{"internalType":"address","name":"_tokenA","type":"address"},{"internalType":"address","name":"_tokenB","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"LiquidityAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountA","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"LiquidityRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountAIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amountBOut","type":"uint256"}],"name":"TokensSwappedAforB","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountBIn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amountAOut","type":"uint256"}],"name":"TokensSwappedBforA","type":"event"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"addLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"name":"removeLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountAIn","type":"uint256"}],"name":"swapAforB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBIn","type":"uint256"}],"name":"swapBforA","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const AddTokenA = "0xC92ee24ADd678b9020f3b938Aeab2026B8D50aDa";
const TokenAabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const AddTokenB = "0xC754EeEE032a7634AB8fB4845A86113EC3A7ACf3";
const TokenBabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

let signer;
let Idtoken;
let simpleDexContract;

let ConnectWallet = 0;      //flag connected wallet


/*Function Connect Wallet*/                 
async function Connect() {
    if (typeof window.ethereum !== 'undefined') {
        // Solicitar conexión a MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        const address = await signer.getAddress();

        simpleDexContract = new ethers.Contract(simpleDexAddress, simpleDexAbi, signer);

        tokenAContract = new ethers.Contract(AddTokenA, TokenAabi, signer);
        tokenBContract = new ethers.Contract(AddTokenB, TokenBabi, signer);
        
        ConnectWallet = 1;
        
        document.getElementById("messageWallet").innerText = `Connecting Wallet..`;
        document.getElementById("accountAddress").innerText = `Account Address: ${address}`;
    } else {
        alert('MetaMask is not installed');
    }
}
  

/*Funcion AddLiquity NUEVA*/                                                                 
async function AddLiquity() {
    let ValueTokenA = document.getElementById("AmountTokenA").value;
    let ValueTokenB = document.getElementById("AmountTokenB").value;
    if (ValueTokenA == 0 || ValueTokenB == 0) {
        alert("Enter Amounts for Tokens");
        return;
    }
    
    if (ConnectWallet == 1) {
        
        const txTokenA = await tokenAContract.approve(simpleDexAddress, ValueTokenA);
        await txTokenA.wait();
        document.getElementById("approvetokenA").innerText = `Approved Transaction TokenA: ${ValueTokenA} `;
                
        const txTokenB = await tokenBContract.approve(simpleDexAddress, ValueTokenB);
        await txTokenB.wait();
        document.getElementById("approvetokenB").innerText = `Approved Transaction TokenB: ${ValueTokenB} `;
        
        const tx = await simpleDexContract.addLiquidity(ValueTokenA, ValueTokenB);
        await tx.wait();
        document.getElementById("liquidity").innerText = `Liquidity Added`;
        }
            else {
                 alert("Connect the Wallet.."); }
}
    


/*Funcion RemoveLiquity*/                         
async function RemoveLiquity() {
    let ValueTokenA = document.getElementById("AmountTokenA").value;
    let ValueTokenB = document.getElementById("AmountTokenB").value;
        
    if (ConnectWallet == 1) {
        
        const tx = await simpleDexContract.removeLiquidity(ValueTokenA, ValueTokenB);
        await tx.wait();  

        document.getElementById("removeTokenA").innerText = `Remove Liquidity TokenA: ${ValueTokenA} `;
        document.getElementById("removeTokenB").innerText = `Remove Liquidity TokenB: ${ValueTokenB} `;
    }
    else {
           alert("Connect the Wallet.."); }
}


/*Funcion swapAforB*/                                              
async function swapAforB() {
    let ValueTokenA = document.getElementById("amountAIn").value;
        
    if (ConnectWallet == 1) {
        
        const txTokenA = await tokenAContract.approve(simpleDexAddress, ValueTokenA);
        await txTokenA.wait();
        document.getElementById("approvetokenA").innerText = `Approved Transaction TokenA: ${ValueTokenA} `;

        const tx = await simpleDexContract.swapAforB(ValueTokenA);
        await tx.wait(); 
        document.getElementById("swapAforB").innerText = `Swap Completed`;

        }
        else {
           alert("Connect the Wallet.."); }
}


/*Funcion swapBforA*/                                                               
async function swapBforA() {
    let ValueTokenB = document.getElementById("amountBIn").value;
        
    if (ConnectWallet == 1) {
        
        const txTokenB = await tokenBContract.approve(simpleDexAddress, ValueTokenB);
        await txTokenB.wait();
        document.getElementById("approvetokenB").innerText = `Approved Transaction TokenB: ${ValueTokenB} `;

        const tx = await simpleDexContract.swapBforA(ValueTokenB);
        await tx.wait(); 
        document.getElementById("swapBforA").innerText = `Swap Completed`;

        }
        else {
           alert("Connect the Wallet.."); } 
}


/*Funcion GetPrice*/
async function GetPrice() {
    let tokenId = document.getElementById("token").value;
               
    if (tokenId == "TokenA") {
         Idtoken = AddTokenA;  }
    else {
        Idtoken = AddTokenB;        
    }
    
    if (ConnectWallet == 1) {
       
        let price = await simpleDexContract.getPrice(Idtoken); 
        price = price / (10 ** 18);
        document.getElementById("getprice").innerText = `Price ${tokenId}: ${price} `;
    
       }
       else {
           alert("Connect the Wallet.."); } 
}

    
    














    