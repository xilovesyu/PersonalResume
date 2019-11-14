import React from "react"
import Header from '../components/Header'
import Container from "../components/Container";
import { Helmet } from "react-helmet"
import icon from "../../static/favicon.ico"
export default class Index extends React.Component {
    render() {
        return <>
            <Helmet defer={false} defaultTitle={'Personal Resume'}>
                <link rel="shortcut icon" type="image/x-icon" href={icon}/>
            </Helmet>
            <Header />
            <Container />
            </>
    }
}
