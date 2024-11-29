import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HwSprint2Week3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string,
                            setError: (a: string) => void,
                            setName: (a: string) => void,
                            addUserCallback: (name: string) => void) => {

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim()) {
        addUserCallback(name)
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: (a: string) => void) => {
    // если имя пустое - показать ошибку
    !name.trim() && setError('Ошибка! Введите имя!')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    // если нажата кнопка Enter - добавить
    e.key === 'Enter' && addUser()
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {

    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = users.length ? users[users.length - 1].name : null

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
