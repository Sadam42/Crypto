
/*
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var tether = document.getElementById("tether");
var sol = document.getElementById("solana");
var ada = document.getElementById("cardano");
var dot = document.getElementById("polkadot");
var cos = document.getElementById("cosmos");
var inch = document.getElementById("1inch");
var chainlink = document.getElementById("chainlink");
var Dai = document.getElementById("dai");
var TerraUSD = document.getElementById("ust");
var UNI = document.getElementById("uniswap");
var Litecoin = document.getElementById("litecoin");
*/

var setting = {
    "async": true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano%2Cpolkadot%2Ccosmos%2C1inch%2CDai%2Cchainlink%2Cuniswap%2Clitecoin%2CterraUSD%2CFilecoin%2CStellar%2CAlgorand%2CFantom%2CGala%2Cocean-protocol%2CBand-Protocol%2CBitcoin-Cash%2CAxie-Infinity%2CThe-Sandbox&vs_currencies=usd",
    "method": "GET",
    "headers": {}


}

function setCryptoPrice(cryptoName, price){
    let element = document.getElementById(cryptoName);
    if (element !== null){
        element.innerHTML = price;
    }
  
}

$.ajax(setting).done(function (response){
    console.log('something');
    console.log(response);
    /*
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    tether.innerHTML = response.tether.usd;
    sol.innerHTML = response.solana.usd;
    ada.innerHTML = response.cardano.usd;
    dot.innerHTML = response.polkadot.usd;
    cos.innerHTML = response.cosmos.usd;
    inch.innerHTML = response.inch.usd;
    chainlink.innerHTML = response.chainlink.usd;
    Dai.innerHTML = response.dai.usd;
    TerraUSD.innerHTML = response.ust.usd;
    uniswap.innerHTML = response.uniswap.usd;
    Litecoin.innerHTML = response.litecoin.usd;
*/
    for (const crypto in response){
       console.log(response[crypto].usd);
       setCryptoPrice(crypto, response[crypto].usd)
                            
    }
   for (let i = 0; i < response.legnth; i++){
       console.log(response[i]);
   }
});