import styled from 'styled-components';

export const PanelButton = styled.div<{ height: number, width: number, paddingLeft?: number }>`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    width: ${props => props.width - 5}px;
    height: ${props => props.height - 5}px;

    ${props => props.paddingLeft ? "padding-left:" + props.paddingLeft + ";" : ""}

    transition: transform 100ms;
    &:hover {
        transform: scale(1.1);
    }

`;

export const Container = styled.div`
    margin: auto;
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);

    gap: 0px 15px;

    align-items: center;

    .change-music-button {
        color: var(--text-color-secondary-darker);
        
        margin-left: auto;
        margin-right: auto;

        &:hover {
            color: var(--text-color-secondary);
        }
    }
`;