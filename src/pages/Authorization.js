import { useState } from 'react';
import { Button, Error, FormHead, FormStyle, Input, Level } from '../styles/Form.style';

export default function Authorization() {
    const [key, setKey] = useState('');
    const [secret, setSecret] = useState('');
    const [error, setError] = useState({ input: false, auth: false });
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!!key === false || !!secret === false) {
            setError({ input: true });
        } else {
            setError({ input: false });
            const api = await fetch(
                `https://api.trello.com/1/members/me/?key=${key}&token=${secret}`
            );
            if (api.status !== 200) {
                console.log(api.status);
                setError({ auth: true });
            } else {
                const data = await api.json();
                const auth = {
                    login: true,
                    key,
                    secret,
                };

                sessionStorage.setItem('auth', JSON.stringify(auth));
                sessionStorage.setItem('me', JSON.stringify(data));
                window.location.reload();
            }
        }
    };
    return (
        <FormStyle onSubmit={submitHandler}>
            <FormHead>Authorization</FormHead>
            <Level>
                Api key
                <Input
                    type="text"
                    onChange={(e) => {
                        setKey(e.target.value);
                        setError({ auth: false });
                    }}
                    value={key}
                />
            </Level>
            <Level>
                Api secret
                <Input
                    type="text"
                    onChange={(e) => {
                        setSecret(e.target.value);
                        setError({ auth: false });
                    }}
                    value={secret}
                />
            </Level>
            <Error>{error.auth && 'Authorization failed'}</Error>
            <Error>{error.input && 'Input empty'}</Error>
            <Button type="submit">Submit</Button>
        </FormStyle>
    );
}
