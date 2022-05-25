import React from 'react'
import '../../styles/main.less'
import { Container } from '../Container';
import {Button, Layout} from "antd";
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { ComponentArea } from './components/ContentArea';
import { Carousel } from '../Carousel';
const { Content, Footer } = Layout;


export const RecordMainPage = () => {
    return (
        <Layout id={"root"}>
            <Header />
            <Content>
                <Container>
                    <div className={'wrapMainContent'}>
                        <SideBar />
                        <ComponentArea />
                    </div>
                    <div>
                        <Carousel
                            slidesToShow={3}
                            offset={0.7}
                            customButtons={{prev: <Button>1</Button>, next: <Button>2</Button>}}
                            withBlur={false}
                            hideButtonsOnLimits={false}
                        >
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>2</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>2</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>2</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>1</div>
                            <div className={'testBlock'}>2</div>
                            <div className={'testBlock'}>1</div>
                        </Carousel>
                    </div>

                </Container>
            </Content>
            <Footer>
                <Container>
                    <div>
                        Layout: Главная страница Record
                    </div>
                </Container>
            </Footer>
        </Layout>
    )
}
