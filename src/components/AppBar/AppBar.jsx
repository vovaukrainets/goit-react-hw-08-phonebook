import React from 'react';
import { Header } from './AppBar.styled';


const AppBar = () => {
    const { isLoggedIn } = useAuth();
    
    return (<Header></Header>);
    
    export default AppBar;