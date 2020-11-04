import React, { useState } from 'react'
import styled from 'styled-components'

import PhoneBookList from './components/common/PhoneBookList'

const Styled = {
    Body: styled.div`
    display : flex;
    width : 100%;
    flex-direction : column;
  `,
    Container: styled.div`
    display : flex;
    width : 1000px;
    min-height : 1000px;
    margin : auto;
    flex-direction : column;
    background-color : skyblue;
  `,
    Wrapper: styled.div`
    display : flex;
    width : 100%;
    
  `
}

function App() {


    const [phoneBookInfos, setPhoneBookInfos] = useState([
        {
            id: 1,
            isEditing: false,
            infos: [
                {
                    title: '안녕1',
                    name: 'hello',
                    value: '',
                    type: 'text',
                },
                {
                    title: '전화번호',
                    name: 'phoneNumber',
                    value: '',
                    type: 'number',
                },
            ]
        },
        {
            id: 2,
            isEditing: false,
            infos: [
                {
                    title: '안녕1',
                    name: 'hello',
                    value: '',
                    type: 'text',
                },
                {
                    title: '전화번호',
                    name: 'phoneNumber',
                    value: '',
                    type: 'number',
                },
            ]
        },
    ])

    const handleOnChangePhoneBookInfo = (e, id) => {
        setPhoneBookInfos((prevState) => {
            return prevState.map((res) => {
                if(res.id === id){
                    return {
                        ...res,
                        infos : res.infos.map((inRes) => {
                            if (e.target.name === inRes.name) {
                                return {
                                    ...inRes,
                                    value: e.target.value
                                }
                            }
                            return inRes
                        })
                    }
                }
                return res
            })
        })
    }

    const handleOnClickPhoneBookInfoEditButton = (id) => {
        setPhoneBookInfos((prevState) => {
            return prevState.map((res) => {
                if (id === res.id) {
                    return {
                        ...res,
                        isEditing: !res.isEditing
                    }
                }
                return res
            })
        })
    }

    return (
        <Styled.Body >
            <Styled.Container>
                <Styled.Wrapper>

                    <PhoneBookList
                        infos={phoneBookInfos}
                        onChange={handleOnChangePhoneBookInfo}
                        onClickEditButton={handleOnClickPhoneBookInfoEditButton}
                    />

                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Body>
    );
}

export default App;
