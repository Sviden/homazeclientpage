import {useState, useEffect} from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import icon from '../Icon.png';
import axios from 'axios';
import moment from 'moment';

const MainContainer = styled.div`
font-family: 'Poppins';
background-color: #F6F9FA;
height: 990px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 800px) {
width: 100%;

}

`

const Header = styled.div`
top: 11px;
margin-top: 11px;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
letter-spacing: 0.436364px;
color: #2D2D2D;
text-aign: left;
width: 1160px;
@media only screen and (max-width: 800px) {
  width: 50%;
  text-align:center;
  }

h1 {

  margin-top:0.5rem;
margin-bottom: 0.5rem;
  font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
letter-spacing: 0.436364px;
color: #2D2D2D;
}

`
const SearchContractsListWrapper = styled.div`
width: 1162px;
height: 880px;
margin-top: 0px;
margin-bottom: 46px;
background: #FFFFFF;
border: 1px solid #DDEDF4;
border-radius: 9px;

@media only screen and (max-width: 800px) {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`


 const SearchContainer = styled.div`
 height: 73px;
 .inputWrapper{
   position: relative;
  width: 289px;
  height 46px;
  left: 30px;
  top: 27px;
 }
 img{
  position:absolute;
  right: 1rem;
  bottom: 1rem;
  opacity: 0.5;
  }
  @media only screen and (max-width: 800px) {
   width: 100%;

  }

 
 `

const SearchInput = styled.input`
position: relative;
width: 289px;
height: 46px;
opacity: 0.3;
border: 1px solid #2D2D2D;
border-radius: 7px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
color: black;
padding: 15px;

 ::placeholder{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.272728px;

  color: #2D2D2D;

 }
`

const ContractsListWrapper = styled.div`
  margin: 20px 30px 30px 30px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   row-gap: 26px;
   column-gap: 26px;
   gap: 26px;
   @media only screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: 1fr;
    justify-items: center;

    }



`


const ProjectHolder = styled.div`
width: 350px;
height: 235px;
background: #FFFFFF;
border: 1px solid #DDEDF4;
border-radius: 9px;
overflow: hidden;

@media only screen and (max-width: 800px) {
  width: 90%;
  .nameAndIdWrapper{
    width: 100% !important; 
  }
  .rooms{
    width: 100%;
    margin: 2px 5px 5px 5px !important;
  }
  }

.nameAndIdWrapper{
  display: flex;
  width: 348px;
  height: 76px;
  background: #F6F9FA;
  border-radius:  7px 7px 0 0;   // ??? 
  flex-direction: column;
  padding: 18px 10px 18px 19px;
  color:#2D2D2D;
  .name{
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .id{
    margin-top: 4px;
    opacity: 0.5;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.272728px;
    color: #2D2D2D;

  }
  #untitled{
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    
    letter-spacing: 0.272728px;
    
    color: #2D2D2D;
  }
}

.address{
  height: 20px;
  margin: 9px 0 20px 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.272728px;
  color: #2D2D2D;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rooms{
  height: 28px;
  margin: 0 0 20px 20px;
  .room{
    color: #3CB2E4;
    margin-right:3px;
    font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.272728px;


  padding: 4px 10px 4px 10px;
  height: 28px;

  background: rgba(60, 178, 228, 0.1);
  border-radius: 6px;
  }
}

 .UpdateRenameStageInfoWrapper{
    display: flex;
    justify-content: space-around;

  .infoHolder{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 
  .infoLabel{
    height: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.272728px;
    color: #9F9F9F;
    
  }

  .dateInfoData{
    height: 20px;
   margin: 8px 0px 21px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.272728px;
  color: #2D2D2D;
  }

   
    
   .totalInfoData{
    margin-top:8px;
    margin-bottom: 21px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.272728px;
    color: #2D2D2D;
   }

   #stageInfoLabel {
      margin-left: 10px;
    }
  .infoStage{
    margin-top: 5px;
    padding: 2px 10px;
    width: fit-content;
    height: 24px;
    left: 369px;
    top: 609px;
    color: ${({stageFontColor})=> stageFontColor};
    background:${({stageColorBackgr})=> stageColorBackgr};
    border-radius: 50px;
    font-style: normal;
      font-weight: ${({stageFontWeight})=> stageFontWeight};
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.272728px;
      display: flex;
      justify-content: center;
      align-items: center;

  }

  }
  
 }


`

export function ContractsList(){
   const [filteredContractsArray, setFilteredContractsArray] = useState();
   const [allContractsArray, setAllContractsArray] = useState();
   const [lastSearchLength, setLastSearchLength] = useState();


   useEffect(()=>{
      getContractsData();
      setLastSearchLength(0);
   }, [])

   const getContractsData = async()=>{
      const response = await axios.get("https://63d02c988a780ae6e685235a.mockapi.io/api/projects/contracts");
      setFilteredContractsArray(response.data);
      setAllContractsArray(response.data);
   }

   const searchHandler = (userInput) =>{
    userInput = userInput.toLowerCase();
    let contractsArr;
    if (userInput.length < lastSearchLength)
    {
      contractsArr = allContractsArray;
    }
    else
    { 
      contractsArr = filteredContractsArray;
    }
    setLastSearchLength(userInput.length);
    if(userInput.length >= 2){
      contractsArr = contractsArr.filter(contract => {return (contract.customerName.toLowerCase().includes(userInput) || contract.address.toLowerCase().includes(userInput))})
    }
      
    setFilteredContractsArray(contractsArr);

   }

    return(
        <>
        <GlobalStyle/>
        <MainContainer>
        <Header>
          <h1>Contracts</h1>
        </Header>
        <SearchContractsListWrapper>
         
          <SearchContainer>
           <div className="inputWrapper">
          <SearchInput type="text" placeholder="Search Customer" onChange={e => searchHandler(e.target.value)}></SearchInput>
        <img src={icon} alt="png"/></div>
        </SearchContainer>

         <ContractsListWrapper>

          {filteredContractsArray && filteredContractsArray.map((contract,index)=> {
           const stageBackColor = contract.projectState === "In progress" ? "#F6F9FA" : contract.projectState === 'Done' ? "#EBFCEC" : contract.projectState === "Cancelled" ? "#EBF7FC" : "#FAEEE8";
           const stageFontColor = contract.projectState === "In progress" ? "#2D2D2D" : contract.projectState === 'Done' ? "#30D869" : contract.projectState === "Cancelled" ? "#3CB2E4" : "#E4783C";
           const stageFontWeight = contract.projectState === "Cancelled" ? 700 : 400;
            return(
            <ProjectHolder stageFontWeight={stageFontWeight} stageColorBackgr={stageBackColor} stageFontColor={stageFontColor} key={`projHolder${index}`}> 
            <div className="nameAndIdWrapper" key={`nameid${index}`} >
              <span className="name">{contract.customerName ? contract.customerName : <span id="untitled" className="name">Untitled</span>}</span>
            <span className="id">{contract.projectId}</span> 
              
            </div>
            <div className="address" key={`address${index}`}>{contract.address}</div>
            <div className="rooms">

            {contract.rooms.map((room, index) => {
                return(
                  <span className="room" key={`room${index}`}>{room.name}</span> 
                )}
              )}
       
            </div>
            <div className="UpdateRenameStageInfoWrapper" key={`infowrapp${index}`}>
              <div className="infoHolder"><span className="infoLabel">Last updated</span><span className="dateInfoData">{ moment.utc(contract.updated_timestmp).format("MM.DD.YYYY")  }</span></div>
              <div className="infoHolder"><span className="infoLabel">Total</span><span className="totalInfoData">${contract.totalProject.toLocaleString("en-US")}.00</span></div>
              <div className="infoHolder"><span className="infoLabel" id="stageInfoLabel" >Stage</span><span className="infoStage">{contract.projectState}</span></div>
            </div> 
            </ProjectHolder>
            )
          
          })}
          </ContractsListWrapper>

       
        </SearchContractsListWrapper>
        </MainContainer>
      </>
    )
       

}