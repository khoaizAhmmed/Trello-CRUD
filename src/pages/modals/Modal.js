import React from 'react';
import { Button, Error, FormHead, FormStyle, Input, Level } from '../../styles/Form.style';
import { Close, CloseButton, ModalStyle } from '../../styles/Modal.style';

export default function Modal({
    Title,
    name,
    desc,
    inputNameHandler,
    inputDescHandler,
    clickHandler,
    closeHandler,
}) {
    return (
        <ModalStyle>
            <FormStyle>
                <Close>
                    <CloseButton onClick={closeHandler}>Close</CloseButton>
                </Close>
                <FormHead>{Title}</FormHead>
                <Level>
                    Board Title
                    <Input value={name} onChange={inputNameHandler} />
                </Level>
                <Level>
                    Board Description
                    <Input value={desc} onChange={inputDescHandler} />
                </Level>
                <Error />
                <Button type="submit" onClick={clickHandler}>
                    Submit
                </Button>
            </FormStyle>
        </ModalStyle>
    );
}
