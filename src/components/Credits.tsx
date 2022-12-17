// @flow
import * as React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    text-align: center;
`

const StyledBlueSpan = styled.span`
  color: var(--darkBlue)
`

const StyledGoldenSpan = styled.span`
  color: var(--golden)
`


export const Credits = () => {
    return (
        <StyledContainer>
            <StyledGoldenSpan><h1>Interaktywny Wykres Gantta</h1></StyledGoldenSpan>
            <h2>Projekt na zaliczenie przedmiotu: Zarządzanie projektami informatycznymi</h2>
            <h3>Prowadzący: dr hab. Marek Parfieniuk</h3>

            <h2>Twórcy:</h2>
            <StyledBlueSpan><h3>Konrad Czaczkowski</h3></StyledBlueSpan>
            <StyledBlueSpan><h3>Greta Sielawa</h3></StyledBlueSpan>
        </StyledContainer>
    );
};