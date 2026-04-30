import styled from 'styled-components';
import media from 'styled-media-query';

export const MainContainer = styled.section`
display: flex;
flex-direction: column;
font-family: 'Raleway';
max-width: 1280px;
margin: 0 auto;

  ${media.greaterThan('medium')`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const DatasheetContent = styled.div`
  max-width: 974px;

  background-color: ${({ theme }) => theme.colors.greyLight};
  padding: 16px;
  p {
    color: ${({ theme }) => theme.colors.green};
  }

`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 20px;

  ${media.greaterThan('medium')`
    padding: 16px 20px;
    width: 100%;
  `}
`;

export const BlockOne = styled(Block)`
  hr {
    display: none;
  }

  ${media.greaterThan('medium')`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
  `}
`;

export const BlockTwo = styled(Block)`
  display: flex;
  gap: 12px;

  ${media.greaterThan('medium')`
    padding: 16px 20px;
    flex-shrink: 0;
    align-items: flex-start;

    p {
      font-size: 16px;
      line-height: 23.6px;
    }
  `}
`;

export const BlockThree = styled(Block)`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 10px;
  
  div {
    flex-basis: 33%;

    &.price-wfull {
      flex-basis: 100%;
    }
  }

  ${media.greaterThan('medium')`
    align-content: start;
    border: none;
    padding: 16px 20px;
    flex-wrap: nowrap;
  `}
`;

export const BlockFour = styled(Block)`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 240px;

  ${media.greaterThan('medium')`
    align-content: start;
    border: none;
    padding: 19px 26px;
  `}
`;

export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;

  ${({ tagsCount }) => tagsCount > 1 && `
    ${InfoContent} {
      flex-direction: column;
      align-items: flex-start;
    }
  `}

  ${({ tagsCount }) => tagsCount > 1 && `
    ${Location} {
      align-self: center;
      width: auto;
    }
  `}

  ${media.greaterThan('small')`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const InfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ tagsCount }) => tagsCount > 1 && `
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const Type = styled.p`
  font: 16px 'Raleway';
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  text-transform: uppercase;
`;

export const Location = styled.div`
  font: 14px 'Raleway';
  color: ${({ theme }) => theme.colors.green};
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.fontsWeight.medium};
  padding: 8px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    width: 50%;
  `}

  a {
    display: flex;
  }

  img {
    width: 18px;
    margin-right: 4px;
  }

  button {
    ${media.greaterThan('large')`
      display: none;
    `}
  }
`;


export const GroupNeigRef = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    align-items: start;
    margin-top: -2px;
  `}
`;

export const Neighborhood = styled.h1`
  display: flex;
  width: 100%;
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  text-transform: capitalize;
  margin-bottom: 12px;

`;

export const NeighborhoodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%
`;

export const GroupTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BuildingTitle = styled.h2`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  margin-bottom: 12px;
`;

export const CategoryRelease = styled.p`
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.69px;
  display: none;

  ${media.greaterThan('medium')`
    display: block;
    margin-top: -12px;
  `}
`;

export const Ref = styled.p`
  font-size: 14px;
  white-space: nowrap;
  margin-left: 18px;
  padding-top: 4px;

  ${media.greaterThan('medium')`
    font-size: 16px;
    line-height: 23.6px;
    letter-spacing: 0.34px;
  `}
`;

export const GroupTagsSearchPage = styled.div`
  margin-right: 12px;
  div + div {
    margin-top: 10px;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 23.6px;
  color: ${({ theme }) => theme.colors.green};
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;

  &.price-wfull, &.price-expenses {
    margin-top: 20px;
  }

  div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 12px;
    justify-content: space-between;

    p {
      &:nth-child(1) {
        font-size: 16px;
        font-weight: ${({ theme }) => theme.fontsWeight.bold};
      }

      &:nth-child(2) {
        font-size: 18px;
        line-height: 26px;
        font-weight: ${({ theme }) => theme.fontsWeight.bold};
      }
    }
  }
`;

export const PriceGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.green};

  ${media.greaterThan('medium')`
    padding: 20px;
    max-width: 291px;
    max-height: ${({ type }) => (type === 'lancamento' ? '210px' : '275px;')}; 
    justify-content: ${({ type }) => (type === 'lancamento' ? 'start' : 'space-around')};
    margin: 16px 16px 0 0;
  `}
`;

export const PriceGroupMobile = styled(PriceGroup)`
  display: flex;
  ${media.greaterThan('medium')`
    display: none;
  `}
`

export const PriceGroupDesktop = styled(PriceGroup)`
display: none;
  ${media.greaterThan('medium')`
    display: flex;
  `}
`

export const PriceRelease = styled.div`
  flex-basis: auto;
  min-height: 26px;
  margin: 0; 
  padding: 0;

  p {
    font-size: 22px;
    font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
  }

  ${media.greaterThan('medium')`
    ${({ type }) => (type === 'pronto' && `
      padding-top: 22px;
      padding-bottom: 29px;
    `)}

    p {
      font-size: 24px;
    }
  `}
`;

export const BuildingLabel = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;

  ${media.greaterThan('medium')`
      left: unset;
      right: 20px;
    `}
`;

export const InfoValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;

  p {
    font-size: 14px;
    &:nth-child(1) {
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
    }
  }

  ${media.greaterThan('medium')`
    height: auto;
    padding: 14px 0;
  `}
`;

export const Delivery = styled.div`
  p {
    text-align: center;
    background-color: ${({ theme }) => theme.colors.greenLight};
    color: ${({ theme }) => theme.colors.green};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontsWeight.medium};
    height: 35px;
    line-height: 35px;

    span {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
      color: ${({ theme }) => theme.colors.green};
    }
  }

  ${media.greaterThan('medium')`
    max-width: 974px;
    margin: auto;

    p {
      width: 100%;
      max-width: 349px;
    }
  `}
`;

export const PriceExpenses = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    width: 100%;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.green};
    border-top: 1px solid ${({ theme }) => theme.colors.green};

    p {
      font-size: 12px;
      font-weight: ${({ theme }) => theme.fontsWeight.bold};
      text-transform: uppercase;
      margin-top: 12px;
    }

    dl {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      dt,
      dd {
        width: 50%;
        font-size: 16px;
      }
  
      dd {
        text-align: right;
      }
    }
`

export const CharacteristicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CharacteristicItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 18px;
    height: 18px;
  }

  p {
    font-size: 14px;
    color:  ${({ theme }) => theme.colors.green};
  }
`;

export const ButtonVisit = styled.button`
font-size: 16px;
font-weight: ${({ theme }) => theme.fontsWeight.bold};
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.orange};
border-radius: 4px;
width: 100%;
height: 46px;
margin-top: 20px;
padding: 10px;
`

export const ButtonMoreInfo = styled.button`
font-size: 16px;
font-weight: ${({ theme }) => theme.fontsWeight.bold};
color: ${({ theme }) => theme.colors.white};
background-color: ${({ theme }) => theme.colors.orange};
border: 1px solid ${({ theme }) => theme.colors.orange};
border-radius: 4px;
width: 100%;
height: 46px;
margin-top: 12px;
padding: 10px;

`

export const GenericDiv = styled.div`
`

// MODAL ------------------------------------------------

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 1060;
`

export const ModalBodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    top: 10px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1060;
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 325px;
    background-color:  ${({ theme }) => theme.colors.orange};
`

export const ModalOverlay = styled.div`
    display: block;
    transition: all 0.2s ease-out;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1050;
    height: 100%;
    overflow-y: hidden;
    right: 0;
    visibility: visible;
    opacity: 1;
`

// HEADER
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #2F4447;
  padding: 20px 20px 15px 20px;
  position: relative;
`

export const ModalHeaderTitle = styled.div`
  color:  ${({ theme }) => theme.colors.orange};
  font-size: 22px;
`

export const ModalHeaderBtnClose = styled.button`
  position: absolute;
  top: 15px;
  right: 0;
`

export const ModalHeaderBtnCloseImage = styled.button`
  
`

// LOCAL
export const ModalLocal = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 20px 10px 20px;
`

export const ModalLocalImage = styled.div`
    img {
      max-width: 130px;
    }
`

export const ModalLocalDescription = styled.div`
  padding: 0 0 0 10px;
`

export const ModalLocalTitle = styled.div`
  color:  ${({ theme }) => theme.colors.orange};
  display: block;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`

export const ModalLocalInfos = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 10px;
  font-weight: 500;
`

// FORM
export const ModalForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`

export const ModalFormGroupNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  width: 100%;
  div {
    width: 47.5%;
  }
  input {
    width: 100%;
      color: ${({ theme }) => theme.colors.grey2};
      display: block;
      font-size: 16px;
      padding: 10px 20px  !important;
      border: 1px solid  ${({ theme }) => theme.colors.grey2};
      border-radius: 4px;
  }
`

export const ModalFormGroup = styled.div`
  margin: 0 0 10px 0;
  width: 100%;
  input {
    color: ${({ theme }) => theme.colors.grey2};
    display: block;
    font-size: 16px;
    padding: 10px 20px !important;
    border: 1px solid  ${({ theme }) => theme.colors.grey2};
    width: 100%;
    border-radius: 4px;
  }
`

export const ModalInput = styled.div``

export const ModalSchedule = styled.div``

export const ModalScheduleTitle = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
`

export const ModalScheduleWrapper = styled.div`
  display: flex;
  width: 280px;
  overflow-x: auto;
  padding: 15px 0;
  margin: 0 0 15px 0;

  &::-webkit-scrollbar {
      width: 10px;
      height: 7px;
  }
  &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.greyDark};
      border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.green};
      border-radius: 10px;
      transition: 0.2s;
  }
  &::-webkit-scrollbar-thumb:hover {
      background:rgb(75, 112, 118);
  }
`

export const ModalScheduleItem = styled.div`
  display: block;
  min-width: 70px;
  margin: 0 10px 0 0;
`

export const ModalScheduleItemLine = styled.div`
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  background-color: ${(props) => (props.selected ? '#ECEFEF' : '#FFF')};
`

export const ModalScheduleItemDay = styled.div`
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
`

export const ModalScheduleItemDayNumber = styled.div`
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
`

export const ModalScheduleItemMonth = styled.div`
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
`

export const ModalScheduleHour = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
`

export const ModalScheduleSelect = styled.select`
  width: 100%;
  color: ${({ theme }) => theme.colors.green};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontsWeight.regular};
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.green};
  background:  ${({ theme }) => theme.colors.orange};
`

export const ModalFormGroupCheckbox = styled.div`
  width: 100%;
  margin: 10px 0 35px 0;

  input {
    -webkit-appearance: checkbox;
    accent-color: ${({ theme }) => theme.colors.green};
  }

  label {
    padding: 0 0 0 10px;
  }
`

export const ModalFormSubmit = styled.div`
    width: 100%;
`

export const ModalFormBtnSubmit = styled.div`
  color:  ${({ theme }) => theme.colors.orange};
  cursor: pointer;
  display: block;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100%;
  text-align: center;
  padding: 10px 0;
`