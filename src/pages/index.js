import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TitleBlock from "../components/title-block"
import DropdownList from "../components/dropdown-list"


const IndexPage = () => (
  <Layout style={{ alignContent: 'center', textAlign: 'center' }}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    < TitleBlock></TitleBlock>
    <div style={{ maxWidth: `300px`, margin: `0 auto`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <DropdownList ListTitle="Appeltaart en meer"></DropdownList>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
