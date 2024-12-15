// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.22;

/// @title SimpleDEX contract
/// @author Ezequiel
/// @notice Contract for Decentralized Exchange DEX

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleDEX {
    
    IERC20 private tokenA;       
    IERC20 private tokenB;       

    address private owner;      

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);

        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    event LiquidityAdded (address, uint256 amountA, uint256 amountB);  
    event TokensSwappedAforB (address indexed, uint256 amountAIn, uint256 _amountBOut);     
    event TokensSwappedBforA (address indexed, uint256 amountBIn, uint256 _amountAOut);
    event LiquidityRemoved (address, uint256 amountA, uint256 amountB);
    
        
/// @notice Function for addLiquidity - Only Owner     
    function addLiquidity(uint256 amountA, uint256 amountB) external onlyOwner {
    
        tokenA.transferFrom(msg.sender, address(this), amountA);        
                     
        tokenB.transferFrom(msg.sender, address(this), amountB);        
         
        emit LiquidityAdded (msg.sender, amountA, amountB);  
    }       

    
/// @notice Function for getPrice  
    function getPrice(address _token) external view returns (uint256)  {
         
        uint256 _poolTokenA;
        uint256 _poolTokenB;

        _poolTokenA = tokenA.balanceOf(address(this));                //balance pool tokenA 
        _poolTokenB = tokenB.balanceOf(address(this));                //balance pool tokenB 
                        
        if (tokenA == IERC20(_token)) {
              return (_poolTokenB * 10 ** 18/_poolTokenA);     //tokenA price    
            }
        else {
            if (tokenB == IERC20(_token)) {
                    return (_poolTokenA * 10 ** 18/_poolTokenB);     //tokenB price 
            }
        }
        revert("Invalid token");   
    }       


    
/// @notice Function for swapAforB - send amountAIn tokenA receive tokenB         
    function swapAforB(uint256 amountAIn) external {
        uint256 _amountBOut;

        uint256 _poolTokenA;
        uint256 _poolTokenB;

        _poolTokenA = tokenA.balanceOf(address(this));                //balance pool tokenA 
        _poolTokenB = tokenB.balanceOf(address(this));                //balance pool tokenB 

        _amountBOut = _poolTokenB - (_poolTokenA * _poolTokenB) / (_poolTokenA + amountAIn);
        
        tokenA.transferFrom(msg.sender, address(this), amountAIn);         
                
        tokenB.transfer(msg.sender, _amountBOut);                       
                
        emit TokensSwappedAforB (msg.sender,amountAIn, _amountBOut); 
    }   
  

/// @notice Function for swapBforA - send amountBIn tokenB receive tokenA        
    function swapBforA(uint256 amountBIn) external {
        uint256 _amountAOut;

        uint256 _poolTokenA;
        uint256 _poolTokenB;

        _poolTokenA = tokenA.balanceOf(address(this));                //balance pool tokenA 
        _poolTokenB = tokenB.balanceOf(address(this));                //balance pool tokenB 

        _amountAOut = (_poolTokenA * _poolTokenB) / (_poolTokenB - amountBIn) - _poolTokenA;
        
        tokenB.transferFrom(msg.sender, address(this), amountBIn);      
                   
        tokenA.transfer(msg.sender, _amountAOut);                       
                
        emit TokensSwappedBforA (msg.sender, amountBIn, _amountAOut);   
    } 
    
    
/// @notice Function for removeLiquidity - Only owner   
    function removeLiquidity(uint256 amountA, uint256 amountB) external onlyOwner {
        
        uint256 _poolTokenA;
        uint256 _poolTokenB;

        _poolTokenA = tokenA.balanceOf(address(this));                //balance pool tokenA 
        _poolTokenB = tokenB.balanceOf(address(this));                //balance pool tokenB 
                
        require((_poolTokenA > amountA) && (_poolTokenB > amountB),"Lower Amount");
                
        tokenA.transfer(msg.sender, amountA); 
                
        tokenB.transfer(msg.sender, amountB); 
                
        emit LiquidityRemoved (msg.sender, amountA, amountB);
    }   
    
}