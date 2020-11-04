import React from 'react';
import styled from 'styled-components';

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const Input = (props) => {

    const { info, onChange,isEditing } = props

    const { title, value, name,type } = info

    return (
        <Styled.Body>
            <Styled.Col width="50">
                {title}
            </Styled.Col>
            <Styled.Col width="50">
                {isEditing ? (
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                ) : value}
            </Styled.Col>
        </Styled.Body>
    );
};

Input.defaultProps = {

}

export default Input;