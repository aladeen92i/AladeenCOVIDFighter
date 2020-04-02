pragma solidity >=0.4.22 <0.7.0;


contract Covid19 {
    
    address private owner;
    
     struct Hospital {
        string NameMedecin;  
        string KeyPatient; 
    }

    mapping(uint => Hospital) public data;
    
    uint256 index = 0;
    
    constructor() public{
        owner = msg.sender; 
    }
    
     modifier onlyOwner() { 
        require(
            msg.sender == owner,
            "Only owner can call this."
        );
        _;
    }
    
    
    function save(string memory NameMedecin, string memory KeyPatient)
    public returns(bool success)
    {
        data[index].NameMedecin = NameMedecin;
        data[index].KeyPatient = KeyPatient;

        index = index + 1;
        
        return true;
    }
    
    function retrieveData(uint256 i) public view onlyOwner
    returns(string memory nameMedecin, string memory keyPatient)
    {

        nameMedecin = data[i].NameMedecin;
        keyPatient = data[i].KeyPatient;
        

        return(nameMedecin, keyPatient);
    }
    
    function retrieveDataNumber() public view
    returns(uint256 i)
    {
        i = index;
        return(i);
    }
  
}