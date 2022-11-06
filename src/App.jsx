import React from 'react'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Services } from './components/services/Services'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
// Apx file is used to access HTML in js file jsx= JS + XML

const App = () => {
  return (
    <>
        <Header/>
        <section><Nav/></section>
        <section><About/></section>
        <section><Experience/></section>
        <section><Services/></section>
        <section><Portfolio/></section>
        <section><Contact/></section>
        <section><Footer/></section>


    </>
  )
}

export default App