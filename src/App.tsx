import React from 'react'
import './styles/main.less'
import { RecordMainPage } from './modules/RecordMainPage/index'
import { Col, Layout, Menu, Row } from "antd";
import { TestGrid } from './modules/Grid/TestGrid';
import { MyInputNumber } from './components/MyInputNumber';
import { Search } from './components/Search';
import { DemoTable } from './components/MyTable';
import { CarouselAntd } from './components/CarouselAntd';
import { da } from 'date-fns/locale';
import { FadeIn } from './components/Animation/FadeIn';
const { Content, Header, Footer } = Layout;

function App() {
    const data = [];

    for(let i = 0; i < 100; i++) {
       data.push(i) 
    }

    const containerStyle = {
        width: "100%",
        minHeight: "100vh", 
        padding: "0 30px",
    }

    return (
        <div style={containerStyle}>
            <FadeIn />
        </div>
        
    )
}

export default App
