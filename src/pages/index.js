import React from "react"
import { Link } from "gatsby"
import {BreadCrumb} from 'primereact/breadcrumb'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const items = [
    {label:'Categories'},
    {label:'Sports'},
    {label:'Football'},
    {label:'Countries'},
    {label:'Spain'},
    {label:'F.C. Barcelona'},
    {label:'Squad'},
    {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
];

const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi peopleDAWDAWDAWDAD</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <BreadCrumb model={items} home={home}/>
  </Layout>
)

export default IndexPage
