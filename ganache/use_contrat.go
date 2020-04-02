package main

import (
    "fmt"
    "log"

    "github.com/ethereum/go-ethereum/common"
    "github.com/ethereum/go-ethereum/ethclient"

    covid19 "./contracts" // for demo
)

func main() {
	client, err := ethclient.Dial("http://localhost:8545")
    if err != nil {
        log.Fatalf("Failed to connect the ethereum network: %v", err)
	}

    address := common.HexToAddress("0x11f808fe93b2509Fa8A958d1a3A93C734949d16D")
    instance, err := covid19.NewCovi19(address, client)
    if err != nil {
        log.Fatal(err)
    }

    version, err := instance.Version(nil)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(version) // "1.0"
}