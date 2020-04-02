package main

import (
    "context"
    "crypto/ecdsa"
    "fmt"
    "log"
    "math/big"

    "github.com/ethereum/go-ethereum/accounts/abi/bind"
    "github.com/ethereum/go-ethereum/crypto"
    "github.com/ethereum/go-ethereum/ethclient"

    covid19 "./contracts" // for demo
)

func main() {
   
    client, err := ethclient.Dial("http://localhost:8545")
    if err != nil {
        log.Fatalf("Failed to connect the ethereum network: %v", err)
	}

    // fmt.Println("we have a connection")
    // _ = client // we'll use this in the upcoming sections

    // address := common.HexToAddress("0x147B8eb97fD247D06C4006D269c90C1908Fb5D54")
	
	// contract, err := Covid19(common.HexToAddress("0x11f808fe93b2509Fa8A958d1a3A93C734949d16D"), client)
    
    // if err != nil {
    //     log.Fatalf("Failed to instantiate contract: %v", err)
    // }

    // version, err := contract.Version(nil)
    // if err != nil {
    //     log.Fatal(err)
    // }
    
    privateKey, err := crypto.HexToECDSA("fad9c8855b740a0b7ed4c221dbad0f33a83a49cad6b3fe8d5817ac83d38b6a19")
    if err != nil {
        log.Fatal(err)
    }

    publicKey := privateKey.Public()
    publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
    if !ok {
        log.Fatal("error casting public key to ECDSA")
    }

    fromAddress := crypto.PubkeyToAddress(*publicKeyECDSA)
    nonce, err := client.PendingNonceAt(context.Background(), fromAddress)
    if err != nil {
        log.Fatal(err)
    }

    gasPrice, err := client.SuggestGasPrice(context.Background())
    if err != nil {
        log.Fatal(err)
    }

    auth := bind.NewKeyedTransactor(privateKey)
    auth.Nonce = big.NewInt(int64(nonce))
    auth.Value = big.NewInt(0)     // in wei
    auth.GasLimit = uint64(300000) // in units
    auth.GasPrice = gasPrice

    input := "1.0"
    address, tx, instance, err := covid19.DeployCovid19(auth, client, input)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(address.Hex())   // 0x147B8eb97fD247D06C4006D269c90C1908Fb5D54
    fmt.Println(tx.Hash().Hex()) // 0xdae8ba5444eefdc99f4d45cd0c4f24056cba6a02cefbf78066ef9f4188ff7dc0

    _ = instance
}