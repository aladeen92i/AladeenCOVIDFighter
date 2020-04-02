
https://goethereumbook.org/smart-contract-compile

> sudo snap install solc --edge
> 
> go get -u github.com/ethereum/go-ethereum
> 
> cd $GOPATH/src/github.com/ethereum/go-ethereum/
> 
> make
> 
> make devtools

> solc --abi Covid19.sol
> 
> solc --bin Store.sol
> 
> abigen --bin=Covid19_sol_Covid19.bin --abi=Covid19_sol_Covid19.abi --pkg=covid19 --out=Covid19.go

>go run client.go

