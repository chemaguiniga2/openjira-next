import React, { FC, useReducer } from 'react'
import { Entry } from '../../interfaces';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { v4 as uuidv4, v4 } from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Proidejlka sdjahdjh sfdfjsjflkjad',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Proidejlka sdjahdjh sfdfjsjflkjad',
            status: 'in-progress',
            createdAt: Date.now() - 10000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Proidejlka sdjahdjh sfdfjsjflkjad',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
        
    ],
}

type Props = {
    children?: React.ReactNode
}

export const EntriesProvider:FC<Props> = ({ children }) => {

const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE)

const addNewEntry = ( description: string ) => {
    const newEntry: Entry = {
        _id: uuidv4(),
        description,
        createdAt: Date.now(),
        status: 'pending'
    }
    dispatch({ type: '[Entry] Add-Entry', payload: newEntry });
}

const updateEntry = ( entry: Entry ) => {
    dispatch({ type: '[Entry] Entry-Updated', payload: entry });
}

    return (
        <EntriesContext.Provider value={{ 
           ...state,

           //Methods
           addNewEntry,
           updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}