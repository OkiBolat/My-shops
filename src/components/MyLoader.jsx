import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={155}
    height={265}
    viewBox="0 0 155 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="157" /> 
    <rect x="0" y="167" rx="5" ry="5" width="0" height="1" /> 
    <rect x="0" y="187" rx="11" ry="11" width="150" height="14" /> 
    <rect x="0" y="234" rx="10" ry="10" width="90" height="15" /> 
    {/* <rect x="0" y="230" rx="11" ry="11" width="80" height="24" />  */}
    <rect x="118" y="230" rx="7" ry="7" width="32" height="32" />
  </ContentLoader>
)

export default MyLoader